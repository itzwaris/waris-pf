import { SITE_INFO } from "@/config/site";
import { EXPERIENCES } from "@/features/portfolio/data/experiences";

export const dynamic = "force-static";

export function GET() {
  const experienceSection = `
## Experience

${EXPERIENCES.map(
    (job) => `### ${job.positions[0].title} at ${job.companyName}
${job.positions[0].description}
`
  ).join("\n")}
`;

  return new Response(
    `# ${SITE_INFO.name}

${SITE_INFO.description}

- [About](${SITE_INFO.url}/about): A quick intro to me, my tech stack, and how to connect.
${experienceSection}
- [Projects](${SITE_INFO.url}/projects): Selected projects that show my skills and creativity.
- [Awards](${SITE_INFO.url}/awards): My key awards and honors.
- [Certifications](${SITE_INFO.url}/certifications): Certifications and credentials I've earned.
`,
    {
      headers: {
        "Content-Type": "text/markdown;charset=utf-8",
      },
    }
  );
}
