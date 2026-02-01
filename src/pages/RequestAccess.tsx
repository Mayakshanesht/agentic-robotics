import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  full_name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  role: z.string().trim().max(100, "Role must be less than 100 characters").optional(),
  use_case: z.string().trim().max(1000, "Use case must be less than 1000 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const RequestAccess = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      const { error } = await supabase.from("beta_access_requests").insert({
        full_name: data.full_name,
        email: data.email,
        company: data.company || null,
        role: data.role || null,
        use_case: data.use_case || null,
      });

      if (error) throw error;

      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="section-spacing relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-hero-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174_72%_46%/0.08)_0%,_transparent_60%)]" />
          
          <div className="section-container relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <div className="max-w-2xl mx-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h1 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                    Request Submitted!
                  </h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Thank you for your interest in CloudBee Robotics. We'll review your request and get back to you soon.
                  </p>
                  <Link to="/">
                    <Button variant="hero" size="lg">
                      Return to Home
                    </Button>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-sm text-primary font-medium">Private Beta</span>
                    </div>
                    <h1 className="font-display text-3xl lg:text-5xl font-bold mb-4">
                      Request <span className="text-gradient-teal">Access</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                      Join the future of Physical AI infrastructure. Fill out the form below and our team will reach out to discuss your robotics needs.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="border-gradient p-8 lg:p-10">
                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="full_name">Full Name *</Label>
                          <Input
                            id="full_name"
                            placeholder="John Doe"
                            {...register("full_name")}
                            className="bg-secondary/50"
                          />
                          {errors.full_name && (
                            <p className="text-sm text-destructive">{errors.full_name.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            {...register("email")}
                            className="bg-secondary/50"
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Acme Robotics"
                            {...register("company")}
                            className="bg-secondary/50"
                          />
                          {errors.company && (
                            <p className="text-sm text-destructive">{errors.company.message}</p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="role">Your Role</Label>
                          <Input
                            id="role"
                            placeholder="CTO, Head of AI, etc."
                            {...register("role")}
                            className="bg-secondary/50"
                          />
                          {errors.role && (
                            <p className="text-sm text-destructive">{errors.role.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="use_case">Tell us about your use case</Label>
                        <Textarea
                          id="use_case"
                          placeholder="Describe your robotics challenges and what you're hoping to achieve with CloudBee..."
                          rows={4}
                          {...register("use_case")}
                          className="bg-secondary/50 resize-none"
                        />
                        {errors.use_case && (
                          <p className="text-sm text-destructive">{errors.use_case.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="hero"
                        size="xl"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          "Submitting..."
                        ) : (
                          <>
                            Submit Request
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestAccess;
