"use client";

import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { GitCloneBtn } from "@/components/git-clone-btn";
import { SocialDock } from "@/components/social-dock";
import { SubstackFeed } from "@/components/substack-feed";
import { TwitterFeed } from "@/components/twitter-feed";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 w-full">
      {/* Hero Section */}
      <section className="flex flex-col gap-8">
        <NeonGradientCard
          neonColors={{
            firstColor: "#ff0000",
            secondColor: "#ff0000"
          }}
          className="w-full"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold neon-text-red">
              Hey, I'm Nathan Colosimo 👋
            </h1>
            <p className="text-lg text-muted-foreground">
              Welcome to my corner of the internet. I'm passionate about technology, building things, and sharing knowledge.
            </p>
            <div className="mt-2">
              <GitCloneBtn />
            </div>
          </div>
        </NeonGradientCard>
      </section>

      {/* Social Links Section */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-semibold neon-text-white">Connect with me</h2>
        <SocialDock />
      </section>

      {/* Projects Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold neon-text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* We'll add project cards here later */}
          <div className="h-64 rounded-lg bg-card border border-primary/20 flex items-center justify-center">
            Projects Coming Soon
          </div>
        </div>
      </section>

      {/* Content Feed Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold neon-text-white">Latest Content</h2>
        <div className="flex flex-col gap-6">
          <NeonGradientCard
            neonColors={{
              firstColor: "#ff0000",
              secondColor: "#ff0000"
            }}
            className="w-full"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 neon-text-red">Substack</h3>
              <SubstackFeed />
            </div>
          </NeonGradientCard>

          <NeonGradientCard
            neonColors={{
              firstColor: "#ff0000",
              secondColor: "#ff0000"
            }}
            className="w-full"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4 neon-text-red">Twitter</h3>
              <TwitterFeed />
            </div>
          </NeonGradientCard>
        </div>
      </section>
    </div>
  );
}
