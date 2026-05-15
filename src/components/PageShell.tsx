import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface PageShellProps {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
}

export function PageShell({ title, description, path, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={path} />
        <link rel="canonical" href={path} />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
