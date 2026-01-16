import Image from "next/image";

import type { Anime } from "../../data/anime";

export function AnimeItem({ title, image, url }: Anime) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-full w-[140px] flex-col overflow-hidden bg-black/5 transition-colors hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10"
        >
            <div className="relative h-[210px] w-full overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-medium text-white line-clamp-2">{title}</span>
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center p-3 text-center md:hidden">
                <span className="text-sm font-medium line-clamp-2">{title}</span>
            </div>
        </a>
    );
}
