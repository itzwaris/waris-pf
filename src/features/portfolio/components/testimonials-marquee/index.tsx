import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

import { FAVORITE_ANIME } from "../../data/anime";
import { FAVORITE_SONGS } from "../../data/songs";
import { Panel } from "../panel";
import { AnimeItem } from "./anime-item";
import { SongItem } from "./song-item";

export function TestimonialsMarquee() {
  return (
    <Panel
      id="favorites"
      className="before:z-11 after:z-10 [&_.rfm-initial-child-container]:items-stretch! [&_.rfm-marquee]:items-stretch!"
    >
      <h2 className="sr-only">Favorites</h2>

      {/* Row 1: Anime */}
      <div className="relative">
        <div className="absolute top-0 left-0 z-10 bg-background/80 px-2 py-1 text-xs font-mono font-medium backdrop-blur-sm border-b border-r border-edge rounded-br-sm">
          Favorite Anime
        </div>
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent>
            {FAVORITE_ANIME.map((item) => (
              <MarqueeItem
                key={item.title}
                className="mx-0 h-full border-r border-edge"
              >
                <AnimeItem {...item} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

      <div className="screen-line-before screen-line-after relative flex h-4 w-full" />

      {/* Row 2: Songs */}
      <div className="relative">
        <div className="absolute top-0 right-0 z-10 bg-background/80 px-2 py-1 text-xs font-mono font-medium backdrop-blur-sm border-b border-l border-edge rounded-bl-sm">
          Favorite Songs
        </div>
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />

          <MarqueeContent direction="right" pauseOnHover>
            {FAVORITE_SONGS.map((item) => (
              <MarqueeItem
                key={item.title}
                className="mx-0 h-full border-r border-edge"
              >
                <SongItem {...item} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

    </Panel>
  );
}
