import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import Image from "next/image";
import Link from "next/link";

export function BuiltWith() {
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
      className: "invert"
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
      className: "invert"
    }
  ];

  return (
    <div className="absolute left-5 top-5 z-50">
      <NeonGradientCard
        neonColors={{
          firstColor: "#ff0000",
          secondColor: "#ff0000"
        }}
        className="w-fit"
      >
        <div className="flex flex-col items-center gap-2 p-4">
          <h2 className="text-sm font-bold neon-text-red">Built with</h2>
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
                <div className="relative bg-black/50 w-10 h-10 rounded-full border border-primary/20 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={tool.logo}
                      alt={tool.name}
                      width={20}
                      height={20}
                      className={tool.className}
                    />
                  </div>
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-black/90 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {tool.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </NeonGradientCard>
    </div>
  );
} 