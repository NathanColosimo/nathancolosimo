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
        primary: "#1C1C1C",    // Primary vibrant red
        secondary: "#3D5A80",  // Deep indigo accent
        background: "#FAF9F6", // Warm white background
      }
    };
  }, []);

  return (
    <div className="w-full bg-white/5 backdrop-blur-sm border border-accent/10 shadow-lg">
      <style jsx global>{`
        #substack-feed-embed {
          font-family: var(--font-satoshi), ui-sans-serif, system-ui, sans-serif !important;
          min-height: 200px;
          height: auto;
          overflow: hidden;
        }
        #substack-feed-embed * {
          font-family: inherit !important;
        }
        #substack-feed-embed iframe {
          height: auto !important;
          min-height: 200px !important;
          margin-bottom: 0 !important;
        }
      `}</style>
      <div id="substack-feed-embed" />
      <Script src="https://substackapi.com/embeds/feed.js" />
    </div>
  );
} 