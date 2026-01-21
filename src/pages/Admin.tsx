import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, LogOut, Trash2, RefreshCw, Users, Mail, Building, Briefcase, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface BetaRequest {
  id: string;
  full_name: string;
  email: string;
  company: string | null;
  role: string | null;
  use_case: string | null;
  created_at: string;
}

const Admin = () => {
  const [requests, setRequests] = useState<BetaRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAndFetch();
  }, []);

  const checkAdminAndFetch = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate("/admin-login");
        return;
      }

      // Check if user has admin role
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleError || !roleData) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges",
          variant: "destructive",
        });
        await supabase.auth.signOut();
        navigate("/admin-login");
        return;
      }

      setIsAdmin(true);
      fetchRequests();
    } catch (error) {
      navigate("/admin-login");
    }
  };

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("beta_access_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRequests(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch requests",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteRequest = async (id: string) => {
    try {
      const { error } = await supabase
        .from("beta_access_requests")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setRequests(requests.filter((r) => r.id !== id));
      toast({
        title: "Deleted",
        description: "Request has been removed",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete request",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Checking access...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="section-spacing relative">
          <div className="absolute inset-0 bg-hero-gradient" />

          <div className="section-container relative z-10">
            <div className="flex items-center justify-between mb-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <Button variant="heroOutline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="font-display text-3xl lg:text-4xl font-bold mb-2">
                    Beta Access <span className="text-gradient-teal">Requests</span>
                  </h1>
                  <p className="text-muted-foreground">
                    {requests.length} total request{requests.length !== 1 ? "s" : ""}
                  </p>
                </div>

                <Button variant="heroOutline" onClick={fetchRequests} disabled={isLoading}>
                  <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                  Refresh
                </Button>
              </div>

              {isLoading ? (
                <div className="text-center py-16 text-muted-foreground">
                  Loading requests...
                </div>
              ) : requests.length === 0 ? (
                <div className="border-gradient p-16 text-center">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">No requests yet</h3>
                  <p className="text-muted-foreground">
                    Beta access requests will appear here
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {requests.map((request, index) => (
                    <motion.div
                      key={request.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-gradient p-6"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className="flex-1 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          <div className="flex items-start gap-3">
                            <Users className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Name</p>
                              <p className="font-medium">{request.full_name}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Mail className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Email</p>
                              <a href={`mailto:${request.email}`} className="font-medium hover:text-primary transition-colors">
                                {request.email}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Building className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Company</p>
                              <p className="font-medium">{request.company || "—"}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Briefcase className="w-4 h-4 text-primary mt-1 shrink-0" />
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Role</p>
                              <p className="font-medium">{request.role || "—"}</p>
                            </div>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
                          onClick={() => deleteRequest(request.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {request.use_case && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-xs text-muted-foreground mb-2">Use Case</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {request.use_case}
                          </p>
                        </div>
                      )}

                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {formatDate(request.created_at)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
