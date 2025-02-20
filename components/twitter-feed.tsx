"use client";

export function TwitterFeed() {
  const encodedDomain = encodeURIComponent("sharpsenders.com");
  const encodedTwitterName = encodeURIComponent("thenathancolo");
  
  return (
    <div className="w-full h-[600px] overflow-hidden bg-black rounded-lg">
      <iframe 
        loading="lazy" 
        width="100%" 
        height="100%" 
        src={`https://syndication.twitter.com/srv/timeline-profile/screen-name/${encodedTwitterName}?frame=false&hideBorder=true&hideFooter=true&hideHeader=true&hideScrollBar=false&origin=${encodedDomain}&maxHeight=600px&showHeader=false&showReplies=false&transparent=false&theme=dark&width=550px`}
        style={{ 
          height: '100%',
          backgroundColor: 'black'
        }}
        frameBorder="0"
        scrolling="no"
      />
    </div>
  );
} 