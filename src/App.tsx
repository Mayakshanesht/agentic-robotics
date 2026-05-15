import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Hardware from "./pages/Hardware";
import Research from "./pages/Research";
import Careers from "./pages/Careers";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPostDynamic from "./pages/BlogPostDynamic";
import RequestAccess from "./pages/RequestAccess";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/research" element={<Research />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          {/* Legacy routes — redirect to nearest new equivalent */}
          <Route path="/technology" element={<Navigate to="/platform" replace />} />
          <Route path="/use-cases" element={<Navigate to="/platform" replace />} />
          <Route path="/team" element={<Team />} />
          {/* Existing functional pages preserved */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/why-physical-ai-needs-4d-synthetic-data" element={<BlogPost1 />} />
          <Route path="/blog/sim-to-real-gap-solved" element={<BlogPost2 />} />
          <Route path="/blog/introducing-cloudbee-robotics" element={<BlogPost3 />} />
          <Route path="/blog/:slug" element={<BlogPostDynamic />} />
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
