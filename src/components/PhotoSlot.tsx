import { useState, type ReactNode } from "react";

/**
 * Drop-in photo: shows `src` once the file exists, otherwise renders `fallback`.
 * A missing file under /public is answered with index.html by the SPA rewrite,
 * which the browser can't decode, so onError still fires and the fallback shows.
 */
export function PhotoSlot({
  src,
  alt,
  fallback,
  className = "",
}: {
  src: string;
  alt: string;
  fallback: ReactNode;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  if (broken) return <>{fallback}</>;
  return <img src={src} alt={alt} onError={() => setBroken(true)} loading="lazy" className={className} />;
}
