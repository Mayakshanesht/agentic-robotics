import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Product from "./pages/Product";
import Solution from "./pages/Solution";
import Research from "./pages/Research";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
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
import ResetPassword from "./pages/ResetPassword";
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
          <Route path="/product" element={<Product />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/research" element={<Research />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          {/* Legacy redirects */}
          <Route path="/platform" element={<Navigate to="/product" replace />} />
          <Route path="/hardware" element={<Navigate to="/solution" replace />} />
          <Route path="/technology" element={<Navigate to="/product" replace />} />
          <Route path="/use-cases" element={<Navigate to="/solution" replace />} />
          <Route path="/team-careers" element={<Navigate to="/team" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/why-physical-ai-needs-4d-synthetic-data" element={<BlogPost1 />} />
          <Route path="/blog/sim-to-real-gap-solved" element={<BlogPost2 />} />
          <Route path="/blog/introducing-cloudbee-robotics" element={<BlogPost3 />} />
          <Route path="/blog/:slug" element={<BlogPostDynamic />} />
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
