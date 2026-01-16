import { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "quaric",
    companyName: "Quaric",
    isCurrentEmployer: true,
    positions: [
      {
        id: "quaric-generalist", // Unique ID
        title: "Systems Engineer",
        employmentPeriod: {
          start: "2024",
          end: "Present",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "Leading development initiatives and building scalable solutions across the stack.",
        skills: ["Next.js", "TypeScript", "React", "Node.js"],
      },
    ],
  },
  {
    id: "simplamo",
    companyName: "Simplamo",
    isCurrentEmployer: false,
    positions: [
      {
        id: "simplamo-intermediate", // Unique ID
        title: "Intermediate Developer",
        employmentPeriod: {
          start: "2023",
          end: "2024",
        },
        employmentType: "Full-time",
        icon: "code",
        description:
          "Contributed to frontend architecture and key feature implementations.",
        skills: ["React", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
];
