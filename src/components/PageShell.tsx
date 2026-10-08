import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";

const SITE_URL = "https://cloudbeerobotics.de";

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
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CloudBee Robotics" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${SITE_URL}${path}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`${SITE_URL}${path}`} />
      </Helmet>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <ScrollProgress />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </div>
  );
}
