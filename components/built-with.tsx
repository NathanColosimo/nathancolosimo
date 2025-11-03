import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface BuiltWithProps {
  className?: string;
}

export function BuiltWith({ className }: BuiltWithProps) {
  const tools = [
    {
      name: "Cursor",
      logo: "/images/cursor-logo.svg",
      url: "https://cursor.sh",
      className: ""
    },
    {
      name: "Next.js",
      logo: "/images/nextjs-logo.svg",
      url: "https://nextjs.org",
      className: ""
    },
    {
      name: "TypeScript",
      logo: "/images/typescript-logo.svg",
      url: "https://www.typescriptlang.org",
      className: ""
    },
    {
      name: "Supabase",
      logo: "/images/supabase-logo-icon.svg",
      url: "https://supabase.com",
      className: ""
    },
    {
      name: "Vercel",
      logo: "/images/vercel-logo.svg",
      url: "https://vercel.com",
      className: ""
    }
  ];

  const isHorizontal = className?.includes('flex-row!');

  return (
    <div className={cn("absolute left-5 top-5 z-50", className)}>
      <div className="flex flex-col items-center gap-2 p-4">
        <h2 className="text-sm font-bold text-foreground border-b border-accent">Built with</h2>
        <div className="flex flex-col items-center -space-y-2">
          {tools.map((tool, index) => (
            <Link
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform duration-200 hover:z-10 hover:scale-110"
              style={{ zIndex: tools.length - index }}
            >
              <div className="relative bg-white/5 backdrop-blur-xs w-10 h-10 rounded-full border border-accent/10 shadow-lg transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={20}
                    height={20}
                    className={tool.className}
                  />
                </div>
                <span className={cn(
                  "absolute pointer-events-none px-2 py-1 rounded bg-white/5 backdrop-blur-xs border border-accent/10 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity",
                  isHorizontal
                    ? "left-1/2 -translate-x-1/2 bottom-full mb-2" // Horizontal layout (mobile)
                    : "left-full ml-3 top-1/2 -translate-y-1/2" // Vertical layout (desktop)
                )}>
                  {tool.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 