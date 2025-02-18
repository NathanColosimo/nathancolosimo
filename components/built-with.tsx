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
    <div className="w-full max-w-5xl px-5 mb-20">
      <NeonGradientCard
        neonColors={{
          firstColor: "#ff0000",
          secondColor: "#ffffff"
        }}
        className="w-full"
      >
        <div className="flex flex-col gap-4 p-6">
          <h2 className="text-xl font-bold neon-text-red">Built with</h2>
          <div className="flex flex-wrap gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                title={tool.name}
              >
                <div className="bg-black/50 p-4 rounded-full border border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={24}
                    height={24}
                    className={tool.className}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </NeonGradientCard>
    </div>
  );
} 