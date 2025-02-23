"use client";

export function TwitterFeed() {
  const encodedDomain = encodeURIComponent("sharpsenders.com");
  const encodedTwitterName = encodeURIComponent("thenathancolo");
  
  return (
    <div className="w-full overflow-hidden bg-white/5 backdrop-blur-sm border border-accent/10 shadow-lg rounded-lg">
      <iframe 
        loading="lazy" 
        width="100%" 
        height="100%" 
        src={`https://syndication.twitter.com/srv/timeline-profile/screen-name/${encodedTwitterName}?frame=false&hideBorder=true&hideFooter=true&hideHeader=true&hideScrollBar=false&origin=${encodedDomain}&maxHeight=600px&showHeader=false&showReplies=false&transparent=false&theme=light&width=550px`}
        style={{ 
          height: '600px',
          backgroundColor: 'transparent'
        }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
} 