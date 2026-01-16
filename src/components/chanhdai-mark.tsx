import Image from "next/image";

import { cn } from "@/lib/utils";

export function ChanhDaiMark({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative aspect-[2/1] h-8 w-16", className)} {...props}>
      <Image
        src="/waris-logo-light.svg"
        alt="Waris Logo"
        fill
        className="object-contain dark:hidden"
        priority
      />
      <Image
        src="/waris-logo-dark.svg"
        alt="Waris Logo"
        fill
        className="hidden object-contain dark:block"
        priority
      />
    </div>
  );
}

// TODO: implementing getMarkSVG for dynamic usage if needed, currently returning empty as we use static files
export function getMarkSVG(color: string) {
  return "";
}
