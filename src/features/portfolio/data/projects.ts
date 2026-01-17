import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "minsql",
    title: "minsql",
    period: {
      start: "2025",
    },
    link: "https://github.com/itzwaris/minsql",
    skills: [
      "Database System",
      "Deterministic Execution",
      "Distributed Sharding",
      "Raft Consensus",
      "Time-Travel",
      "Intent-Driven",
    ],
    description: `A revolutionary, intent-driven database system with deterministic execution.
- Showcases intent-driven query model
- Deterministic execution and time-travel capabilities
- Supports distributed sharding and Raft consensus for high availability
- The Database Project. minsql. (c) notwaris`,
    isExpanded: true,
  },
  // {
  //   id: "placeholder-1",
  //   title: "Project Placeholder 1",
  //   period: {
  //     start: "Future",
  //   },
  //   link: "#",
  //   skills: ["Coming Soon"],
  //   description: "Future project placeholder.",
  // },
  // {
  //   id: "placeholder-2",
  //   title: "Project Placeholder 2",
  //   period: {
  //     start: "Future",
  //   },
  //   link: "#",
  //   skills: ["Coming Soon"],
  //   description: "Future project placeholder.",
  // },
  // {
  //   id: "placeholder-3",
  //   title: "Project Placeholder 3",
  //   period: {
  //     start: "Future",
  //   },
  //   link: "#",
  //   skills: ["Coming Soon"],
  //   description: "Future project placeholder.",
  // },
];
