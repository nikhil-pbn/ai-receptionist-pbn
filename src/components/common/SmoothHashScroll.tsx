"use client";

import { useEffect } from "react";

/**
 * App-wide fix for same-page hash links.
 *
 * A link to `/demo#recorded-demo` (or nav links like `/#features`) does nothing
 * when you are already on that page and the URL hash is already set — the
 * browser/router sees no URL change and skips scrolling. This one listener
 * catches clicks on any same-page `#id` anchor and always smooth-scrolls to the
 * target, so it works everywhere without touching individual links. Links to a
 * different page are ignored and handled by Next.js as usual.
 */
export function SmoothHashScroll() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            // Ignore modified / non-primary clicks so "open in new tab" still works.
            if (
                e.button !== 0 ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey
            ) {
                return;
            }

            const anchor = (e.target as HTMLElement | null)?.closest("a");
            if (!anchor) return;
            if (anchor.target && anchor.target !== "_self") return;
            if (anchor.hasAttribute("download")) return;

            const href = anchor.getAttribute("href");
            if (!href) return;

            let url: URL;
            try {
                url = new URL(anchor.href, window.location.href);
            } catch {
                return;
            }

            // Different page/origin → let Next.js handle the navigation.
            if (
                url.origin !== window.location.origin ||
                url.pathname !== window.location.pathname ||
                url.search !== window.location.search
            ) {
                return;
            }

            const targetHash = url.hash && url.hash !== "#" ? url.hash : "";

            if (targetHash) {
                // Same-page anchor: always scroll to it, even when the hash is
                // already in the URL.
                const el = document.getElementById(
                    decodeURIComponent(targetHash.slice(1))
                );
                if (!el) return;

                e.preventDefault();
                el.scrollIntoView({ behavior: "smooth" });
                // Write the full normalized URL so the hash is REPLACED, never
                // appended (avoids `/#features#roi-calculator`).
                window.history.replaceState(
                    null,
                    "",
                    url.pathname + url.search + targetHash
                );
            } else if (window.location.hash) {
                // Link to the current page with NO hash while a hash is still in
                // the URL (e.g. clicking "Demo" in the nav while on
                // /demo#recorded-demo): drop the stale hash and go back to top.
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(null, "", url.pathname + url.search);
            }
        };

        // Capture phase so this runs before Next.js's Link handler, which
        // otherwise no-ops when the target URL equals the current one.
        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, []);

    return null;
}
