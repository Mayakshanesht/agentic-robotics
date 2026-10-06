import { Helmet } from "react-helmet-async";

/** Keeps the admin surfaces out of search results, not just out of robots.txt. */
export function NoIndex({ title }: { title: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="robots" content="noindex, nofollow, noarchive" />
    </Helmet>
  );
}
