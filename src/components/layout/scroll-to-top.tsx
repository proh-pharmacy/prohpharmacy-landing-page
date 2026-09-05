"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures cross-page route transitions always start at the top of the viewport
 * when the target URL does not specify an in-page hash anchor.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}
