import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, KeyRound, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const resetSchema = z.object({
  email: z.string().trim().email("Please enter a valid email"),
});
type FormData = z.infer<typeof schema>;
type ResetData = z.infer<typeof resetSchema>;

const AdminLogin = () => {
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"signin" | "reset">("signin");
  const { toast } = useToast();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const { register: registerReset, handleSubmit: handleResetSubmit, formState: { errors: resetErrors } } = useForm<ResetData>({
    resolver: zodResolver(resetSchema),
    defaultValues: { email: "mayurwaghchoure1995@gmail.com" },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: data.email, password: data.password });
      if (error) throw error;
      navigate("/admin");
    } catch (e: unknown) {
      toast({ title: "Failed", description: e instanceof Error ? e.message : "Something went wrong", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const sendPasswordSetup = async (data: ResetData) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      toast({ title: "Password setup email sent", description: "Open the email link to create a new admin password." });
      setMode("signin");
      reset({ email: data.email, password: "" });
    } catch (e: unknown) {
      toast({ title: "Failed", description: e instanceof Error ? e.message : "Could not send password setup email", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="section-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="section-container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="max-w-md mx-auto">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                    <Lock className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="font-display text-3xl font-bold mb-2">Admin Access</h1>
                  <p className="text-muted-foreground">Sign in or securely set a password for your admin email.</p>
                </div>

                <div className="border-gradient p-8">
                  <Tabs value={mode} onValueChange={(v) => setMode(v as "signin" | "reset")} className="mb-6">
                    <TabsList className="grid grid-cols-2 w-full">
                      <TabsTrigger value="signin">Sign In</TabsTrigger>
                      <TabsTrigger value="reset">Set Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin" />
                    <TabsContent value="reset">
                      <p className="text-xs text-muted-foreground mt-2">
                        This email already exists. Use this to receive a secure password setup link.
                      </p>
                    </TabsContent>
                  </Tabs>

                  {mode === "signin" ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="mayurwaghchoure1995@gmail.com" {...register("email")} className="bg-secondary/50" />
                        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="••••••••" {...register("password")} className="bg-secondary/50" />
                        {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
                      </div>
                      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                        {loading ? "Please wait..." : "Sign In"}
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handleResetSubmit(sendPasswordSetup)} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="reset-email">Admin email</Label>
                        <Input id="reset-email" type="email" {...registerReset("email")} className="bg-secondary/50" />
                        {resetErrors.email && <p className="text-sm text-destructive">{resetErrors.email.message}</p>}
                      </div>
                      <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                        <KeyRound className="w-4 h-4 mr-2" /> {loading ? "Sending..." : "Send Password Setup Link"}
                      </Button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLogin;
