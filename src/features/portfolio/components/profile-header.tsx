"use client";

import { USER } from "@/features/portfolio/data/user";
import { FlipSentences } from "@/registry/flip-sentences";
import { useLanyard } from "@/hooks/use-lanyard";
import { cn } from "@/lib/utils";

import { PronounceMyName } from "./pronounce-my-name";
import { VerifiedIcon } from "./verified-icon";

const DISCORD_ID = "527280399903359018";

const StatusIndicator = ({ status }: { status: string }) => {
  switch (status) {
    case "online":
      return (
        <div className="absolute bottom-2 right-2 size-6 rounded-full border-[3px] border-background bg-green-500 sm:bottom-3 sm:right-3" title="Online" />
      );
    case "idle":
      return (
        <div className="absolute bottom-2 right-2 size-6 rounded-full border-[3px] border-background bg-background sm:bottom-3 sm:right-3" title="Idle">
          <img
            src="/idle-moon.png"
            alt="Idle"
            className="size-full object-cover scale-110"
          />
        </div>
      );
    case "dnd":
      return (
        <div className="absolute bottom-2 right-2 size-6 rounded-full border-[3px] border-background bg-red-500 flex items-center justify-center sm:bottom-3 sm:right-3" title="Do Not Disturb">
          <div className="h-1 w-3.5 rounded-full bg-background" />
        </div>
      );
    default: // offline
      return (
        <div className="absolute bottom-2 right-2 size-6 rounded-full border-[3px] border-background bg-zinc-500 flex items-center justify-center sm:bottom-3 sm:right-3" title="Offline">
          <div className="size-2.5 rounded-full bg-background" />
        </div>
      );
  }
};

export function ProfileHeader() {
  const { avatarUrl, status, data } = useLanyard(DISCORD_ID);

  const activities = data?.activities?.filter((a) => a.type !== 4); // Filter out custom status
  const activity = activities?.[0];

  return (
    <div className="screen-line-after flex border-x border-edge">
      <div className="shrink-0 border-r border-edge">
        <div className="mx-0.5 my-0.75 relative">
          <img
            className="size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40 object-cover"
            alt={`${USER.displayName}'s avatar`}
            src={avatarUrl || USER.avatar}
            fetchPriority="high"
          />
          <StatusIndicator status={status} />
        </div>

        <a
          href="https://en.wikipedia.org/wiki/India"
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 -left-px"
        >
          {/* Flag of India */}
          <svg
            className="h-8 sm:h-9"
            viewBox="0 0 30 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Flag of India</title>
            <rect width="30" height="20" fill="#f93" />
            <rect y="6.66" width="30" height="6.66" fill="#fff" />
            <rect y="13.33" width="30" height="6.66" fill="#138808" />
            <circle cx="15" cy="10" r="2.3" fill="none" stroke="#000080" strokeWidth="0.6" />
            <circle cx="15" cy="10" r="0.4" fill="#000080" />
            {[...Array(24)].map((_, i) => (
              <path
                key={i}
                d="M15,10 l0,-2.3"
                stroke="#000080"
                strokeWidth="0.1"
                transform={`rotate(${i * 15} 15 10)`}
              />
            ))}
          </svg>
        </a>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-3xl font-semibold">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-4.5 text-info select-none"
              aria-label="Verified"
            />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9 flex items-center">
            {activity ? (
              <div className="flex items-center gap-2 text-sm text-balance text-muted-foreground font-mono">
                {activity.assets?.large_image && (
                  <img
                    src={
                      activity.assets.large_image.startsWith("spotify:")
                        ? `https://i.scdn.co/image/${activity.assets.large_image.replace("spotify:", "")}`
                        : `https://cdn.discordapp.com/app-assets/${activity.application_id}/${activity.assets.large_image}.png`
                    }
                    alt={activity.name}
                    className="size-5 rounded-md"
                  />
                )}
                <span>
                  {activity.type === 2 ? "Listening to " : "Playing "}
                  <span className="font-semibold text-foreground">{activity.name}</span>
                  {activity.details && ` - ${activity.details}`}
                  {activity.state && ` - ${activity.state}`}
                </span>
              </div>
            ) : (
              <FlipSentences
                className="font-mono text-sm text-balance text-muted-foreground"
                variants={{
                  initial: { y: -10, opacity: 0 },
                  animate: { y: -1, opacity: 1 },
                  exit: { y: 10, opacity: 0 },
                }}
              >
                {USER.flipSentences}
              </FlipSentences>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
