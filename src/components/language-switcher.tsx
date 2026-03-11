import Link from "next/link";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  currentLang: "en" | "pt";
  className?: string;
}

export function LanguageSwitcher({ currentLang, className }: LanguageSwitcherProps) {
  return (
    <div className={cn("inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm p-1 shadow-sm font-sans text-sm font-medium print:hidden ring-1 ring-black/5 dark:ring-white/10", className)}>
      <Link 
        href="/" 
        className={cn(
          "relative flex items-center justify-center rounded-full px-3 py-1 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 select-none",
          currentLang === "en" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )}
        aria-current={currentLang === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <Link 
        href="/pt" 
        className={cn(
          "relative flex items-center justify-center rounded-full px-3 py-1 transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 select-none",
          currentLang === "pt" 
            ? "bg-primary text-primary-foreground shadow-sm" 
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )}
        aria-current={currentLang === "pt" ? "page" : undefined}
      >
        PT
      </Link>
    </div>
  );
}
