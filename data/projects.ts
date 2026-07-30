import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "physicians-assistant",
    title: "Physician’s Assistant",
    summary:
      "A real-time clinical workflow platform for patient-note capture, summarization, and insurance-code compliance.",
    role: "AI & Backend Engineering",
    technologies: [
      "FastAPI",
      "Groq",
      "LangChain",
      "PostgreSQL",
      "Vue.js",
      "Redis",
      "Docker",
    ],
    publishedAt: "2026-06-01",
    featured: true,
    status: "building",
    sections: [
      {
        heading: "Problem",
        body: "Clinical note-taking and insurance-code checks create repetitive work around the patient conversation.",
      },
      {
        heading: "Approach",
        body: "The system combines retrieval-augmented insurance-code compliance, LLM patient summarization, and a Vue.js interface in one workflow.",
      },
      {
        heading: "Architecture",
        body: "A FastAPI WebSocket backend receives streamed binary audio, runs speech-to-text processing, and coordinates PostgreSQL and Redis-backed services.",
      },
      {
        heading: "Reliability",
        body: "Prometheus, Grafana, LangSmith, caching, and containerized services provide observability and stronger post-deployment reliability.",
      },
    ],
  },
  {
    slug: "production-ai-api",
    title: "Production AI API",
    summary:
      "A hardened, observable AI chat API designed around secure request handling and predictable production behavior.",
    role: "Backend & AI Engineering",
    technologies: [
      "FastAPI",
      "LangGraph",
      "OpenAI API",
      "SlowAPI",
      "LangSmith",
      "Docker",
    ],
    publishedAt: "2026-06-01",
    featured: true,
    status: "complete",
    sections: [
      {
        heading: "Problem",
        body: "A production LLM endpoint needs controls for unsafe input, sensitive data, abuse, caching, and operational visibility—not only a model response.",
      },
      {
        heading: "Approach",
        body: "The API uses FastAPI and LangGraph to separate request validation, orchestration, response handling, and monitoring concerns.",
      },
      {
        heading: "Security",
        body: "Prompt-injection checks, PII pattern detection, sensitive-output masking, request validation, and rate limiting form the security layer.",
      },
      {
        heading: "Operations",
        body: "TTL response caching, structured JSON logs, request metrics, LangSmith tracing, and Docker support reliable operation.",
      },
    ],
  },
  {
    slug: "supbuddy",
    title: "SupBuddy",
    summary:
      "An agentic supply-chain platform for shipment analysis, risk prediction, and exception communication.",
    role: "Full-stack & Agent Engineering",
    technologies: [
      "IBM watsonx Orchestrate",
      "FastAPI",
      "React",
      "PostgreSQL",
    ],
    publishedAt: "2026-05-01",
    featured: true,
    status: "building",
    sections: [
      {
        heading: "Problem",
        body: "Shipment monitoring and exception management require repeated analysis, risk review, and stakeholder communication.",
      },
      {
        heading: "Approach",
        body: "A multi-agent workflow supports analysis, risk prediction, and communication assistance using IBM watsonx Orchestrate and watsonx.ai.",
      },
      {
        heading: "Architecture",
        body: "FastAPI microservices provide agents with scoped business context and perform pre-checks before agent execution.",
      },
      {
        heading: "Outcome",
        body: "The project reduced manual shipment-monitoring effort by 60%, while pre-check services reduced agent costs by 30%.",
      },
    ],
  },
  {
    slug: "handwriting-generation",
    title: "Human Handwriting Generation",
    summary:
      "An RNN-based generation pipeline connected to pen-plotter hardware for automated handwriting execution.",
    role: "Machine Learning Engineering",
    technologies: ["TensorFlow", "Google Colab", "PyQt", "NVIDIA GPUs"],
    publishedAt: "2026-05-01",
    featured: true,
    status: "complete",
    sections: [
      {
        heading: "Problem",
        body: "Orion Mailing Solutions needed an end-to-end way to generate natural handwriting and execute it through physical plotting hardware.",
      },
      {
        heading: "Approach",
        body: "A recurrent neural network was designed and trained to generate human-like handwriting trajectories.",
      },
      {
        heading: "System",
        body: "The model output was integrated with a PyQt application and automated pen-plotter execution.",
      },
      {
        heading: "Training",
        body: "Training pipelines were optimized for NVIDIA P100 and RTX 3090 GPUs, producing handwriting measured at approximately 80% indistinguishability.",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
