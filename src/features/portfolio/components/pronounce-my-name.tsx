"use client";

import { Volume2Icon, VolumeXIcon } from "lucide-react";

import { useSound } from "@/hooks/use-sound";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

export function PronounceMyName({
  className,
  namePronunciationUrl,
}: {
  className?: string;
  namePronunciationUrl: string;
}) {
  const { play, stop, isPlaying } = useSound(namePronunciationUrl);

  return (
    <button
      className={cn(
        "relative text-muted-foreground transition-[color,scale] select-none hover:text-foreground active:scale-[0.9]",
        "after:absolute after:-inset-1",
        className
      )}
      onClick={() => {
        if (isPlaying) {
          stop();
        } else {
          play();
          trackEvent({
            name: "play_name_pronunciation",
          });
        }
      }}
    >
      {isPlaying ? <VolumeXIcon className="size-4.5" /> : <Volume2Icon className="size-4.5" />}
      <span className="sr-only">Pronounce my name</span>
    </button>
  );
}
