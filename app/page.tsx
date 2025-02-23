"use client";

import { SocialDock } from "@/components/social-dock";
import { SubstackFeed } from "@/components/substack-feed";
import { TwitterFeed } from "@/components/twitter-feed";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TextReveal } from "@/components/magicui/text-reveal";
import Script from "next/script";

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
      <div className="relative z-10 flex flex-col gap-24 w-full">
        {/* Hero Section */}
        <section className="flex flex-col gap-4 pt-24">
          <div className="flex flex-col gap-4">
            <h1 className="text-8xl font-bold text-foreground border-b-2 border-primary pb-4 inline-block w-fit font-heading">
              Hi.
            </h1>
            <div className="min-h-[50vh] [&_p]:!text-white/20 [&_span.absolute]:!text-white/20 [&_span.motion]:!text-foreground">
              <TextReveal 
                text="Currently exploring Aesthetics, Intelligence, Technology, and Systems ↓" 
                className="text-foreground"
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
            <div className="h-64 rounded-lg bg-white/5 backdrop-blur-sm border border-accent/10 shadow-lg flex items-center justify-center text-muted-foreground">
              Projects Coming Soon
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
              <div className="rounded-lg overflow-hidden border border-accent/10 shadow-lg">
                <TwitterFeed />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
