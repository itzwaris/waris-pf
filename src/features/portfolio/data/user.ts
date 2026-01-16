import type { User } from "@/features/portfolio/types/user";

export const USER = {
  firstName: "Waris",
  lastName: "",
  displayName: "Waris",
  username: "waris",
  gender: "male",
  pronouns: "",
  bio: "Systems Engineer.",

  flipSentences: [
    "Systems Engineer",
    "Open Source Contributor",
  ],
  address: "India",
  phoneNumber: "", // Removed as per request
  email: "aGVsbG9Ad2FyaXMud3Rm", // hello@waris.wtf base64 encoded
  website: "https://waris.wtf",
  jobTitle: "Systems Engineer",
  jobs: [] as any, // Explicitly cast to any or Job[] to avoid 'never[]' inference issues in consumers
  about: `
- **Systems Engineer** with hands-on experience across backend, systems, and automation, focused on building real, working systems rather than toy projects.
- Skilled in **Rust**, **Go**, **Python**, and **JavaScript**; experienced with backend services, Discord bots, databases, and low-level tooling.
- Strong problem-solving mindset with a habit of diving deep into how things work under the hood, from async systems to performance-sensitive code.
- Passionate about experimenting across domains including backend engineering, DevOps fundamentals, and system-level concepts, turning ideas into functional prototypes and products.
- Independent builder with multiple self-driven projects, consistently shipping features, fixing edge cases, and optimizing real-world usage scenarios.
`,
  avatar: "https://assets.waris.com/images/waris-avatar-ghibli.webp",
  ogImage:
    "https://assets.waris.com/images/screenshot-og-image-light.png?v=4",
  namePronunciationUrl: "/audio/waris.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "waris",
    "warisdev",
    "waris portfolio",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
} satisfies User;
