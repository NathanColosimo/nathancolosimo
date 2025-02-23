import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import HeaderAuth from "@/components/header-auth";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
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
            <div className="absolute top-5 right-5 z-50">
              <div className="flex items-center gap-2 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-accent">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-accent">
                  London, UK
                </span>
              </div>
            </div>
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center h-24">
                <div className="w-full max-w-5xl p-3">
                  <div className="w-full h-full bg-white/5 backdrop-blur-sm border border-accent/10 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center h-full px-5">
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
                      <div className="flex-1 flex justify-center">
                        <GitCloneBtn />
                      </div>
                      <div className="flex items-center gap-4">
                        <HeaderAuth />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="flex flex-col gap-20 max-w-5xl p-5 w-full">
                {children}
              </div>

              <BuiltWith />

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
