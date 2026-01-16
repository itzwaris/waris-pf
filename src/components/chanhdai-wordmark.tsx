import Image from "next/image";

export function ChanhDaiWordmark(props: React.ComponentProps<"div">) {
  return (
    <div {...props} className={props.className}>
      <Image
        src="/waris-banner.svg"
        alt="Waris Wordmark"
        width={120} // Adjusted width suitable for icon/logotype context
        height={40}  // Adjusted height
        className="dark:invert" // Invert for dark mode if needed, or adjust based on banner content
        style={{ width: "auto", height: "auto" }} // Responsive containment
      />
    </div>
  );
}

export function getWordmarkSVG(color: string) {
  return "";
}
