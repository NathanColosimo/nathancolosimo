import { MapPin } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { GitCloneBtn } from "@/components/git-clone-btn";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Nathan Colosimo",
  description: "Personal website of Nathan Colosimo",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${jetbrainsMono.variable} font-sans`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
          forcedTheme="dark"
        >
          <main className="relative flex min-h-screen flex-col items-center">
            {/* Mobile: Built With and Location side by side above header */}
            <div className="w-full max-w-5xl px-3 pt-3 md:hidden">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 rounded-lg border border-accent/10 bg-white/5 p-2 backdrop-blur-xs">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span
                    className="font-medium text-accent text-sm"
                    style={{ fontFamily: "var(--font-satoshi)" }}
                  >
                    Boston, MA
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop: Location in top right */}
            <div className="absolute top-5 right-5 z-50 hidden md:block">
              <div className="flex items-center gap-2 rounded-lg border border-accent/10 bg-white/5 p-2 backdrop-blur-xs">
                <MapPin className="h-4 w-4 text-accent" />
                <span
                  className="font-medium text-accent text-sm"
                  style={{ fontFamily: "var(--font-satoshi)" }}
                >
                  Boston, MA
                </span>
              </div>
            </div>

            <div className="flex w-full flex-1 flex-col items-center gap-20">
              <nav className="flex w-full justify-center">
                <div className="w-full max-w-5xl p-3">
                  <div className="min-h-24 w-full rounded-lg border border-accent/10 bg-white/5 shadow-lg backdrop-blur-xs md:h-24">
                    <div className="flex h-full flex-col items-center justify-center gap-4 px-5 py-4 md:flex-row md:justify-between md:gap-0 md:py-0">
                      <div className="flex items-center gap-5">
                        <Link
                          className="flex items-center gap-3 font-bold font-heading text-foreground text-xl transition-colors hover:text-primary"
                          href="/"
                        >
                          <Image
                            alt="Logo"
                            height={24}
                            src="/favicon.ico"
                            width={24}
                          />
                          <span>Nathan Colosimo</span>
                        </Link>
                      </div>
                      <div className="flex items-center pr-10">
                        <GitCloneBtn />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="flex w-full max-w-5xl flex-col gap-20 p-5">
                {children}
              </div>

              <footer className="w-full border-accent/10 border-t">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-8">
                  <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} Nathan Colosimo. All rights
                    reserved.
                  </p>
                </div>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
