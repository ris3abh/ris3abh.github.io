import { SITE, PROJECTS, MORE, HONORS } from "../data/site";

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is an AI Lead Engineer at Spinutech, based in ${SITE.location}. He builds agent systems that verify their own work — long-horizon agent harnesses, autonomous research loops and measurable agent memory — and tests them with pre-registered experiments. He works on data and AI at Spinutech in Tampa, FL, reviews papers, judges hackathons, maintains the open-source archimedes.run project, and holds an MS in Data Science from Drexel University.

Contact: ${SITE.email}

## Systems
${PROJECTS.map((p) => `- [${p.name}](${SITE.url}/work/${p.slug}): ${p.summary}`).join("\n")}

## Recognition
${HONORS.map((h) => `- ${h}`).join("\n")}

## Other work (all at ${SITE.url}/work)
${MORE.flatMap((g) => g.items).map((l) => `- [${l.name}](${l.href}): ${l.note}`).join("\n")}

## Profiles
${SITE.socials.map((s) => `- [${s.label}](${s.href})`).join("\n")}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
