"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // next-themes only knows the real theme after mount; render a stable
    // placeholder on the server to avoid a hydration mismatch.
    useEffect(() => {
        const frame = window.requestAnimationFrame(() => setMounted(true));
        return () => window.cancelAnimationFrame(frame);
    }, []);

    const isDark = resolvedTheme === "dark";

    const toggle = () => setTheme(isDark ? "light" : "dark");

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle color theme"
            title={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : undefined}
            className={`relative grid size-9 cursor-pointer place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5 ${className}`}
        >
            {mounted ? (
                isDark ? <Sun size={18} /> : <Moon size={18} />
            ) : (
                // Keep the button size stable before hydration.
                <span className="size-4.5" />
            )}
        </button>
    );
}
