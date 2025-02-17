import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-primary/5 to-background px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Welcome to Your Next.js App
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-2xl mb-8">
          A modern web application powered by Next.js and Supabase. Build faster, scale easier, and deploy instantly.
        </p>
        <div className="flex gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Next.js 14",
                description: "Leverage the latest features of Next.js for optimal performance and developer experience."
              },
              {
                title: "Supabase Integration",
                description: "Built-in authentication and real-time database powered by Supabase."
              },
              {
                title: "Modern UI",
                description: "Beautiful, responsive design with Tailwind CSS and shadcn/ui components."
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg border bg-card">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us and start building your next great idea today.
          </p>
          <Button size="lg">Start Building</Button>
        </div>
      </section>
    </div>
  );
}
