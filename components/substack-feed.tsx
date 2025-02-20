"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    SubstackFeedWidget?: {
      substackUrl: string;
      posts: number;
      layout: "right" | "left" | "center";
      colors: {
        primary: string;
        secondary: string;
        background: string;
      };
    };
  }
}

export function SubstackFeed() {
  useEffect(() => {
    window.SubstackFeedWidget = {
      substackUrl: "nathancolosimo.substack.com",
      posts: 3,
      layout: "right",
      colors: {
        primary: "#ff0000",
        secondary: "#ffffff",
        background: "#000000",
      }
    };
  }, []);

  return (
    <div className="w-full h-[600px] overflow-hidden [&_*]:font-mono">
      <style jsx global>{`
        #substack-feed-embed {
          font-family: var(--font-jetbrains), ui-monospace, monospace !important;
          height: 600px;
          overflow: hidden;
        }
        #substack-feed-embed * {
          font-family: inherit !important;
        }
        #substack-feed-embed iframe {
          height: 600px !important;
          margin-bottom: 0 !important;
        }
      `}</style>
      <div id="substack-feed-embed" />
      <Script src="https://substackapi.com/embeds/feed.js" />
    </div>
  );
} 