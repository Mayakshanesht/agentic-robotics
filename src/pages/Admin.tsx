import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, LogOut, Trash2, RefreshCw, Users, Mail, Building, Briefcase, Calendar, MessageSquare, FileText, Newspaper } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { BlogManager } from "@/components/admin/BlogManager";

interface BetaRequest {
  id: string; full_name: string; email: string;
  company: string | null; role: string | null; use_case: string | null;
  created_at: string;
}
interface ContactInquiry {
  id: string; name: string; email: string; company: string | null;
  interest: string; message: string; created_at: string;
}
interface JobApplication {
  id: string; role: string; full_name: string; email: string;
  location: string | null; linkedin: string | null; portfolio: string | null;
  cover_letter: string; created_at: string;
}

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

const Admin = () => {
  const [beta, setBeta] = useState<BetaRequest[]>([]);
  const [contacts, setContacts] = useState<ContactInquiry[]>([]);
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => { checkAdminAndFetch(); }, []);

  const checkAdminAndFetch = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { navigate("/admin-login"); return; }
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin").maybeSingle();
      if (roleError || !roleData) {
        toast({ title: "Access Denied", description: "You don't have admin privileges", variant: "destructive" });
        await supabase.auth.signOut();
        navigate("/admin-login");
        return;
      }
      setIsAdmin(true);
      fetchAll();
    } catch { navigate("/admin-login"); }
  };

  const fetchAll = async () => {
    setIsLoading(true);
    try {
      const [b, c, j] = await Promise.all([
        supabase.from("beta_access_requests").select("*").order("created_at", { ascending: false }),
        supabase.from("contact_inquiries").select("*").order("created_at", { ascending: false }),
        supabase.from("job_applications").select("*").order("created_at", { ascending: false }),
      ]);
      if (b.error || c.error || j.error) throw b.error || c.error || j.error;
      setBeta(b.data || []); setContacts(c.data || []); setJobs(j.data || []);
    } catch {
      toast({ title: "Error", description: "Failed to fetch data", variant: "destructive" });
    } finally { setIsLoading(false); }
  };

  const deleteRow = async (table: "beta_access_requests" | "contact_inquiries" | "job_applications", id: string) => {
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) { toast({ title: "Error", description: "Failed to delete", variant: "destructive" }); return; }
    fetchAll();
    toast({ title: "Deleted" });
  };

  const handleLogout = async () => { await supabase.auth.signOut(); navigate("/"); };

  if (!isAdmin) {
    return <div className="min-h-screen bg-background flex items-center justify-center"><div className="text-muted-foreground">Checking access...</div></div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="section-spacing relative">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="section-container relative z-10">
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Link>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={fetchAll} disabled={isLoading}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} /> Refresh
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-2" /> Logout
                </Button>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-display text-3xl lg:text-4xl font-bold mb-2">
                Admin <span className="text-gradient-blue">Dashboard</span>
              </h1>
              <p className="text-muted-foreground mb-8">All inbound — contact inquiries, job applications, and beta requests.</p>

              <Tabs defaultValue="blog" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="blog"><Newspaper className="w-4 h-4 mr-2" /> Blog</TabsTrigger>
                  <TabsTrigger value="contacts"><MessageSquare className="w-4 h-4 mr-2" /> Contact ({contacts.length})</TabsTrigger>
                  <TabsTrigger value="jobs"><FileText className="w-4 h-4 mr-2" /> Jobs ({jobs.length})</TabsTrigger>
                  <TabsTrigger value="beta"><Users className="w-4 h-4 mr-2" /> Beta ({beta.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="blog">
                  <BlogManager />
                </TabsContent>

                <TabsContent value="contacts">
                  {contacts.length === 0 ? (
                    <EmptyState label="No contact inquiries yet" />
                  ) : (
                    <div className="space-y-4">
                      {contacts.map((r) => (
                        <Card key={r.id} onDelete={() => deleteRow("contact_inquiries", r.id)}>
                          <Row icon={Users} label="Name" value={r.name} />
                          <Row icon={Mail} label="Email" value={r.email} href={`mailto:${r.email}`} />
                          <Row icon={Building} label="Company" value={r.company || "—"} />
                          <Row icon={Briefcase} label="Interest" value={r.interest} />
                          <Detail label="Message" value={r.message} />
                          <Footer1 date={r.created_at} />
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="jobs">
                  {jobs.length === 0 ? (
                    <EmptyState label="No job applications yet" />
                  ) : (
                    <div className="space-y-4">
                      {jobs.map((j) => (
                        <Card key={j.id} onDelete={() => deleteRow("job_applications", j.id)}>
                          <Row icon={Briefcase} label="Role" value={j.role} />
                          <Row icon={Users} label="Name" value={j.full_name} />
                          <Row icon={Mail} label="Email" value={j.email} href={`mailto:${j.email}`} />
                          <Row icon={Building} label="Location" value={j.location || "—"} />
                          {j.linkedin && <Row icon={Mail} label="LinkedIn" value={j.linkedin} href={j.linkedin} />}
                          {j.portfolio && <Row icon={Mail} label="Portfolio" value={j.portfolio} href={j.portfolio} />}
                          <Detail label="Cover Letter" value={j.cover_letter} />
                          <Footer1 date={j.created_at} />
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="beta">
                  {beta.length === 0 ? (
                    <EmptyState label="No beta requests yet" />
                  ) : (
                    <div className="space-y-4">
                      {beta.map((r) => (
                        <Card key={r.id} onDelete={() => deleteRow("beta_access_requests", r.id)}>
                          <Row icon={Users} label="Name" value={r.full_name} />
                          <Row icon={Mail} label="Email" value={r.email} href={`mailto:${r.email}`} />
                          <Row icon={Building} label="Company" value={r.company || "—"} />
                          <Row icon={Briefcase} label="Role" value={r.role || "—"} />
                          {r.use_case && <Detail label="Use Case" value={r.use_case} />}
                          <Footer1 date={r.created_at} />
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

function Card({ children, onDelete }: { children: React.ReactNode; onDelete: () => void }) {
  return (
    <div className="glass-card p-6">
      <div className="flex justify-end mb-2">
        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10" onClick={onDelete}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{children}</div>
    </div>
  );
}
function Row({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-3 min-w-0">
      <Icon className="w-4 h-4 text-accent-blue mt-1 shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground mb-1">{label}</p>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="font-medium text-sm hover:text-accent-blue break-all">{value}</a>
        ) : (
          <p className="font-medium text-sm break-words">{value}</p>
        )}
      </div>
    </div>
  );
}
function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="col-span-full mt-2 pt-4 border-t border-border">
      <p className="text-xs text-muted-foreground mb-2">{label}</p>
      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{value}</p>
    </div>
  );
}
function Footer1({ date }: { date: string }) {
  return (
    <div className="col-span-full mt-3 flex items-center gap-2 text-xs text-muted-foreground">
      <Calendar className="w-3 h-3" /> {formatDate(date)}
    </div>
  );
}
function EmptyState({ label }: { label: string }) {
  return (
    <div className="glass-card p-16 text-center">
      <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
      <h3 className="font-display text-xl font-semibold mb-2">{label}</h3>
      <p className="text-muted-foreground text-sm">New entries will appear here automatically.</p>
    </div>
  );
}

export default Admin;
