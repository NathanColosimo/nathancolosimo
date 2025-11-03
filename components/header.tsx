import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";
import CloneButton from "./clone-button";

export default function Header() {
  return (
    <nav className="flex w-full justify-center">
      <div className="w-full max-w-5xl p-3">
        <div className="w-full rounded-lg border border-accent/10 bg-white/5 shadow-lg backdrop-blur-xs">
          <div className="flex flex-col gap-4 px-5 py-4">
            <div className="flex items-center justify-between gap-5">
              <Link
                className="flex items-center gap-3 font-bold font-heading text-foreground text-xl transition-colors hover:text-primary"
                href="/"
              >
                <Image alt="Logo" height={24} src="/favicon.ico" width={24} />
                <span>Nathan Colosimo</span>
              </Link>
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
            <CloneButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
