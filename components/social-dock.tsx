"use client";

import Image from "next/image";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SOCIALS = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/NathanColosimo",
    icon: "/images/github-logo.svg",
    className: "",
  },
  Instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/nathan_colosimo/",
    icon: "/images/instagram-logo.svg",
    className: "",
  },
  LinkedIn: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nathancolosimo/",
    icon: "/images/linkedin-logo.svg",
    className: "",
  },
  Substack: {
    name: "Substack",
    url: "https://substack.com/@nathancolosimo",
    icon: "/images/substack-logo.svg",
    className: "",
  },
  X: {
    name: "X",
    url: "https://x.com/thenathancolo",
    icon: "/images/x-logo.svg",
    className: "",
  },
};

export function SocialDock() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Dock
        className="border border-accent/10 bg-white/5 p-3 backdrop-blur-xs"
        direction="middle"
        iconDistance={120}
        iconMagnification={90}
        iconSize={60}
      >
        {Object.entries(SOCIALS).map(([name, social]) => (
          <DockIcon
            className="rounded-full transition-colors hover:bg-black/5"
            key={name}
          >
            <Link
              aria-label={social.name}
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "size-14 rounded-full hover:bg-transparent focus-visible:ring-0"
              )}
              href={social.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt={social.name}
                className={`${social.className}`}
                height={28}
                src={social.icon}
                width={28}
              />
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
