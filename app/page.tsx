import EducationSection from "@/components/education-section";
import { ExperienceItem } from "@/components/experience-item";
import ExperienceSection, {
  experienceItems,
} from "@/components/experience-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { RetroGrid } from "@/components/magicui/retro-grid";
import PostList from "@/components/post-list";
import ProjectSection from "@/components/project-section";
import { SocialDock } from "@/components/social-dock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-center">
      <RetroGrid
        angle={35}
        cellSize={40}
        className="pointer-events-none absolute inset-0"
        darkLineColor="hsl(var(--accent))"
        lightLineColor="hsl(var(--accent))"
        opacity={0.15}
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-16 px-5 py-12 lg:gap-20 lg:px-10">
        <Header />

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="flex flex-col gap-12">
            {/* Social Links Section */}
            <section className="flex flex-col gap-6">
              <h2 className="font-heading font-semibold text-2xl">Links</h2>
              <SocialDock />
            </section>

            {/* Professional Highlights Tabs */}
            <section className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-heading font-semibold text-2xl">
                  Highlights
                </h2>
                <ExperienceSection />
              </div>
              <Tabs className="flex flex-col gap-6" defaultValue="experience">
                <TabsList aria-label="Work highlights">
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                </TabsList>

                <TabsContent className="flex flex-col gap-4" value="experience">
                  {/* Fan out the structured data so each entry stays consistent */}
                  {experienceItems.map((item) => (
                    <ExperienceItem
                      key={`${item.company}-${item.position}`}
                      {...item}
                    />
                  ))}
                </TabsContent>

                <TabsContent className="flex flex-col gap-4" value="projects">
                  <ProjectSection />
                </TabsContent>

                <TabsContent className="flex flex-col gap-4" value="education">
                  <EducationSection />
                </TabsContent>
              </Tabs>
            </section>
          </div>

          <aside className="flex flex-col gap-12">
            {/* Content Feed Section */}
            <section className="flex flex-col gap-6">
              <h2 className="font-heading font-semibold text-2xl">Substack</h2>
              <PostList profileHandle="nathancolosimo" />
            </section>
          </aside>
        </div>

        <Footer />
      </div>
    </main>
  );
}
