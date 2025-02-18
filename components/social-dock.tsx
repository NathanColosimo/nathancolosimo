"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SOCIALS = {
  GitHub: {
    name: "GitHub",
    url: "https://github.com/NathanColosimo",
    icon: "/images/github-logo.svg",
    className: "invert"
  },
  Instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/nathan_colosimo/",
    icon: "/images/instagram-logo.svg",
    className: ""
  },
  Substack: {
    name: "Substack",
    url: "https://substack.com/@nathancolosimo",
    icon: "/images/substack-logo.svg",
    className: ""
  },
  X: {
    name: "X",
    url: "https://x.com/thenathancolo",
    icon: "/images/x-logo.svg",
    className: "invert"
  }
};

export function SocialDock() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock 
          direction="middle"
          iconSize={60}
          iconMagnification={90}
          iconDistance={120}
          className="bg-black/20 backdrop-blur-sm border border-white/10 p-3"
        >
          {Object.entries(SOCIALS).map(([name, social]) => (
            <DockIcon 
              key={name}
              className="bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-colors rounded-full [&_button]:hover:bg-transparent [&_a]:hover:bg-transparent"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-14 rounded-full hover:bg-transparent focus-visible:ring-0"
                    )}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={28}
                      height={28}
                      className={`${social.className}`}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
} 