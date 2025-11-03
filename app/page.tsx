"use client";

import { SocialDock } from "@/components/social-dock";
import { SubstackFeed } from "@/components/substack-feed";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TextReveal } from "@/components/magicui/text-reveal";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-24 w-full min-h-screen">
      <RetroGrid 
        className="fixed inset-0"
        opacity={0.2}
        lightLineColor="hsl(var(--accent))"
        darkLineColor="hsl(var(--accent))"
        cellSize={40}
        angle={35}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-16 w-full">
        {/* Hero Section */}
        <section className="flex flex-col gap-4 pt-12">
          <div className="flex flex-col gap-4">
            <div className="w-fit">
              <div className="group relative w-fit">
                <div className="absolute -inset-4 bg-secondary/50 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
                <h1 className="text-8xl font-bold text-foreground border-b-2 border-primary pb-4 relative font-heading">
                  Hi.
                </h1>
              </div>
            </div>
            <div className="min-h-[20vh] [&_p]:text-white/20! [&_span.absolute]:text-white/20! [&_span.motion]:text-foreground! [&_p]:text-3xl! md:[&_p]:text-4xl! lg:[&_p]:text-5xl! xl:[&_p]:text-6xl!">
              <TextReveal 
                text="Currently exploring Aesthetics, Intelligence, Technology, and Systems ↓" 
                className="h-[150vh]!"
              />
            </div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-foreground border-b-2 border-accent pb-2 inline-block w-fit font-heading">Links</h2>
          <SocialDock />
        </section>

        {/* Projects Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-foreground border-b-2 border-accent pb-2 inline-block w-fit font-heading">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute -inset-1 bg-secondary/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="h-64 rounded-lg bg-white/5 backdrop-blur-xs border border-accent/10 shadow-lg flex items-center justify-center text-muted-foreground relative">
                Projects Coming Soon
              </div>
            </div>
          </div>
        </section>

        {/* Content Feed Section */}
        <section className="flex flex-col gap-12">
          <h2 className="text-2xl font-semibold text-foreground border-b-2 border-accent pb-2 inline-block w-fit font-heading">Latest Content</h2>
          
          <div className="flex flex-col gap-16">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground font-heading">Substack</h3>
              <div className="rounded-lg overflow-hidden border border-accent/10 shadow-lg">
                <SubstackFeed />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground font-heading">
                X <a 
                  href="https://x.com/thenathancolo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-accent hover:underline"
                >@thenathancolo</a>
              </h3>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
