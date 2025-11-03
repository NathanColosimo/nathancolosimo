"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { TextReveal } from "@/components/magicui/text-reveal";
import { SocialDock } from "@/components/social-dock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex w-full max-w-5xl flex-col gap-20 p-5">
        <Header />

        <div className="relative flex flex-col gap-24">
          <RetroGrid
            angle={35}
            cellSize={40}
            className="fixed inset-0"
            darkLineColor="hsl(var(--accent))"
            lightLineColor="hsl(var(--accent))"
            opacity={0.2}
          />

          <div className="relative z-10 flex flex-col gap-16">
            {/* Hero Section */}
            <section className="flex flex-col gap-4 pt-12">
              <div className="group relative w-fit">
                <div className="-inset-4 absolute rounded-2xl bg-secondary/50 blur-2xl transition-all duration-300 group-hover:blur-3xl" />
                <h1 className="relative border-primary border-b-2 pb-4 font-bold font-heading text-8xl">
                  Hi.
                </h1>
              </div>
              <div className="min-h-[20vh] [&_p]:text-3xl! [&_p]:text-white/20! md:[&_p]:text-4xl! lg:[&_p]:text-5xl! xl:[&_p]:text-6xl! [&_span.absolute]:text-white/20! [&_span.motion]:text-foreground!">
                <TextReveal
                  className="h-[150vh]!"
                  text="Currently exploring Aesthetics, Intelligence, Technology, and Systems ↓"
                />
              </div>
            </section>

            {/* Social Links Section */}
            <section className="flex flex-col gap-6">
              <h2 className="w-fit border-accent border-b-2 pb-2 font-heading font-semibold text-2xl">
                Links
              </h2>
              <SocialDock />
            </section>

            {/* Projects Section */}
            <section className="flex flex-col gap-6">
              <h2 className="w-fit border-accent border-b-2 pb-2 font-heading font-semibold text-2xl">
                Projects
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="group relative">
                  <div className="-inset-1 absolute rounded-lg bg-secondary/30 blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative flex h-64 items-center justify-center rounded-lg border border-accent/10 bg-white/5 text-muted-foreground">
                    Projects Coming Soon
                  </div>
                </div>
              </div>
            </section>

            {/* Content Feed Section */}
            <section className="flex flex-col gap-12">
              <h2 className="w-fit border-accent border-b-2 pb-2 font-heading font-semibold text-2xl">
                Latest Content
              </h2>
              <div className="flex flex-col gap-16">
                <div className="space-y-4">
                  <h3 className="font-heading font-medium text-xl">Substack</h3>
                  <div className="rounded-lg border border-accent/10">
                    {/* <SubstackFeed /> */}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-heading font-medium text-xl">
                    X{" "}
                    <a
                      className="text-accent hover:underline"
                      href="https://x.com/thenathancolo"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @thenathancolo
                    </a>
                  </h3>
                </div>
              </div>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
