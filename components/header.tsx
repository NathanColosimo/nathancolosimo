import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CloneButton from "./clone-button";

export default function Header() {
  return (
    <nav className="mx-auto w-full max-w-5xl p-5">
      <div className="rounded-lg border border-accent/10 bg-white/5 p-4">
        <div className="mb-4 flex items-center justify-between">
          <Link
            className="flex items-center gap-3 font-bold font-heading text-xl hover:text-primary"
            href="/"
          >
            <Image alt="Logo" height={24} src="/favicon.ico" width={24} />
            <span>Nathan Colosimo</span>
          </Link>
          <div className="flex items-center gap-2 rounded border border-accent/10 bg-white/5 px-2 py-1">
            <MapPin className="h-4 w-4 text-accent" />
            <span
              className="text-accent text-sm"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              Boston, MA
            </span>
          </div>
        </div>
        <CloneButton />
      </div>
    </nav>
  );
}
