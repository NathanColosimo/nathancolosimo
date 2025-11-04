import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import type { Post } from "@/lib/post-types";

type PostCardDisplayProps = {
  post: Post;
};

export default function PostCardDisplay(props: PostCardDisplayProps) {
  const post = props.post;
  const postDate = new Date(post.post_date);
  const month = postDate.toLocaleString("default", { month: "short" });
  const year = postDate.getFullYear();
  const postString = `${month} ${year}`;
  return (
    <Item variant="default">
      {post.cover_image && (
        <ItemMedia variant="image">
          <Image
            alt={post.title}
            height={200}
            src={post.cover_image}
            width={200}
          />
        </ItemMedia>
      )}
      <ItemContent className="gap-1.5">
        <ItemTitle>{post.title}</ItemTitle>
        <ItemDescription>{post.subtitle}</ItemDescription>
      </ItemContent>
      <ItemContent className="flex-none text-center">
        <ItemDescription>{postString}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button asChild variant="outline">
          <a href={post.canonical_url} rel="noreferrer" target="_blank">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </ItemActions>
    </Item>
  );
}
