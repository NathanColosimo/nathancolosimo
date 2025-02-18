import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { BuiltWith } from "@/components/built-with";
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
    <html lang="en" className={`${jetbrainsMono.variable} font-mono`} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center h-24">
                <div className="w-full max-w-5xl p-3">
                  <NeonGradientCard
                    neonColors={{
                      firstColor: "#ff0000",
                      secondColor: "#ffffff"
                    }}
                    className="w-full h-full"
                  >
                    <div className="flex justify-between items-center h-full px-5">
                      <div className="flex gap-5 items-center">
                        <Link href="/" className="text-xl font-bold neon-text-red flex items-center gap-3">
                          <Image
                            src="/favicon.ico"
                            alt="Logo"
                            width={24}
                            height={24}
                          />
                          Nathan Colosimo
                        </Link>
                      </div>
                      <div className="flex items-center gap-4">
                        {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                        <ThemeSwitcher />
                      </div>
                    </div>
                  </NeonGradientCard>
                </div>
              </nav>

              <div className="flex flex-col gap-20 max-w-5xl p-5 w-full">
                {children}
              </div>

              <BuiltWith />

              <footer className="w-full border-t border-primary/20">
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
