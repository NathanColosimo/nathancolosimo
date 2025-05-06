import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import HeaderAuth from "@/components/header-auth";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BuiltWith } from "@/components/built-with";
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
    <html lang="en" className={`${jetbrainsMono.variable} font-sans`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center relative">
            {/* Mobile: Built With and Location side by side above header */}
            <div className="md:hidden w-full max-w-5xl px-3 pt-3">
              <div className="flex justify-between items-center gap-3">
                <BuiltWith className="!static !flex !flex-row !items-center !gap-2 !p-2 bg-white/5 backdrop-blur-sm border border-accent/10 rounded-lg [&_div.flex]:!flex-row [&_div.flex]:!p-2 [&_div.flex]:!gap-2 [&_div.-space-y-2]:!space-y-0 [&_div.-space-y-2]:!space-x-2 [&_h2]:!border-none [&_h2]:!m-0" />
                <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-sm border border-accent/10 rounded-lg">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-accent" style={{ fontFamily: 'var(--font-satoshi)' }}>
                    NYC
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop: Location in top right */}
            <div className="hidden md:block absolute top-5 right-5 z-50">
              <div className="flex items-center gap-2 p-2 bg-white/5 backdrop-blur-sm border border-accent/10 rounded-lg">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent" style={{ fontFamily: 'var(--font-satoshi)' }}>
                  NYC
                </span>
              </div>
            </div>

            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center">
                <div className="w-full max-w-5xl p-3">
                  <div className="w-full min-h-[6rem] md:h-24 bg-white/5 backdrop-blur-sm border border-accent/10 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-full px-5 py-4 md:py-0 gap-4 md:gap-0">
                      <div className="flex gap-5 items-center">
                        <Link href="/" className="text-xl font-bold flex items-center gap-3 text-foreground hover:text-primary transition-colors font-heading">
                          <Image
                            src="/favicon.ico"
                            alt="Logo"
                            width={24}
                            height={24}
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

              <div className="flex flex-col gap-20 max-w-5xl p-5 w-full">
                {children}
              </div>

              {/* Built With - shows at bottom on larger screens */}
              <div className="hidden md:block">
                <BuiltWith />
              </div>

              <footer className="w-full border-t border-accent/10">
                <div className="max-w-5xl mx-auto py-8 px-5 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Nathan Colosimo. All rights reserved.
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
