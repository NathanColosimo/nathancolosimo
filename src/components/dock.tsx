import { FloatingDock } from "@/components/ui/floating-dock";
import { GithubLight } from "./ui/svgs/githubLight";
import { InstagramIcon } from "./ui/svgs/instagramIcon";
import { X } from "./ui/svgs/x";
import { Linkedin } from "./ui/svgs/linkedin";

export function Dock() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <GithubLight className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/NathanColosimo/",
    },

    {
      title: "Instagram",
      icon: (
        <InstagramIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/nathan_colosimo/",
    },
    {
      title: "X",
      icon: (
        <X className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/thenathancolo",
    },
    {
      title: "Linkedin",
      icon: (
        <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/nathancolosimo/",
    },
  ];
  return (
    <FloatingDock
      items={links}
    />
  );
}
