import { PlayIcon } from "lucide-react";
import Image from "next/image";

import type { Song } from "../../data/songs";

export function SongItem({ title, artist, image, url }: Song) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full w-[250px] items-center gap-3 overflow-hidden bg-white/5 p-3 transition-colors hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
            <div className="relative size-12 shrink-0 overflow-hidden rounded-md">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <PlayIcon className="size-5 text-white" fill="currentColor" />
                </div>
            </div>

            <div className="flex flex-col justify-center overflow-hidden">
                <span className="truncate text-sm font-medium text-foreground">{title}</span>
                <span className="truncate text-xs text-muted-foreground">{artist}</span>
            </div>
        </a>
    );
}
