export const siteConfig = {
  name: "Abrar Zahin",
  role: "Software Engineer",
  eyebrow: "AI systems · Robotics · Full-stack",
  positioning:
    "I build reliable AI systems, intelligent APIs, and robotics software for real-world workflows.",
  profileAlt: "Portrait of Abrar Zahin",
  profileFocalPoint: "50% 35%",
  education: {
    degree: "B.S. Computer Engineering",
    school: "University of South Florida",
    graduation: "May 2026",
  },
  social: {
    github: "https://github.com/abrarz2511",
    linkedin: "https://www.linkedin.com/in/abrar-zahin12/",
  },
} as const;

export function getSiteUrl() {
  const value =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  if (!value) {
    return undefined;
  }

  try {
    return new URL(value.startsWith("http") ? value : `https://${value}`);
  } catch {
    return undefined;
  }
}
