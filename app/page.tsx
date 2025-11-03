import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { RetroGrid } from "@/components/magicui/retro-grid";
import PostList from "@/components/post-list";
import ProjectSection from "@/components/project-section";
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
            {/* Social Links Section */}
            <section className="flex flex-col gap-6">
              <h2 className="w-fit border-accent border-b-2 pb-2 font-heading font-semibold text-2xl">
                Links
              </h2>
              <SocialDock />
            </section>

            {/* Work Experience Section */}
            <ExperienceSection />

            {/* Projects Section */}
            <ProjectSection />

            {/* Education Section */}
            <EducationSection />

            {/* Content Feed Section */}
            <section className="flex flex-col gap-12">
              <h2 className="w-fit border-accent border-b-2 pb-2 font-heading font-semibold text-2xl">
                Substack
              </h2>
              <PostList profileHandle="nathancolosimo" />
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
