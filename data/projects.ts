import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "physicians-assistant",
    title: "Physician’s Assistant",
    summary:
      "A real-time clinical workflow automation platform for physicians's, simplifying patient-note capture, summarization, and insurance and CMS code compliance.",
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
    repositoryUrl: "https://github.com/abrarz2511/physician_assistant",
    sections: [
      {
        heading: "Problem",
        body: "Physician's have to go through the tedious task of reporting ICD-10-CM codes for billing, as these codes justify the medical necessity of the bills. Another important but rigorous process is to find and report CMS/CPT service or provider codes, which explain the nature of the service that was provided (level, complexity, time).",
        documentTable: {
          introduction:
            "A physician would need to go through the following documents to find the codes to be reported:",
          documents: [
            {
              source: "ICD-10-CM Alphabetic Index",
              purpose: "Maps diagnosis terms to candidate ICD-10-CM codes.",
              approximatePages: "~580 pages",
              citationLabel: "Centers for Medicare & Medicaid Services",
              citationUrl:
                "https://www.cms.gov/medicare/coding-billing/icd-10-codes",
            },
            {
              source: "ICD-10-CM Tabular List",
              purpose:
                "Provides official code definitions, inclusion/exclusion notes, laterality, 7th characters, and coding instructions.",
              approximatePages: "~1,130 pages",
              citationLabel: "Centers for Medicare & Medicaid Services",
              citationUrl:
                "https://www.cms.gov/medicare/coding-billing/icd-10-codes",
            },
            {
              source: "ICD-10-CM Official Coding Guidelines",
              purpose:
                "Official rules for code selection, sequencing, and reporting.",
              approximatePages: "117 pages (FY2027 PDF)",
              citationLabel: "CDC FTP",
              citationUrl:
                "https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2027/",
            },
            {
              source: "CMS MLN006764 – Evaluation and Management Services",
              purpose:
                "Explains E/M level selection, MDM, time, documentation, and billing guidance.",
              approximatePages: "29 pages (May 2026 edition)",
              citationLabel: "Centers for Medicare & Medicaid Services",
              citationUrl:
                "https://www.cms.gov/files/document/mln006764-evaluation-management-services.pdf",
            },
            {
              source: "Medicare Claims Processing Manual, Chapter 12",
              purpose:
                "Detailed Medicare billing and payment rules for physicians and E/M services.",
              approximatePages: "~185 pages",
              citationLabel: "Centers for Medicare & Medicaid Services",
              citationUrl:
                "https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/downloads/clm104c12.pdf",
            },
          ],
        },
      },
      {
        heading: "Approach",
        body: "The system combines retrieval-augmented insurance-code compliance, LLM patient summarization, Websocket based audio transcription and a Vue.js interface in one workflow.",
        video: {
          youtubeId: "3GtZVTIvmpc",
          title: "Physician Assistant project demonstration",
        },
        highlights: [
          {
            label: "RAG based code-compliance",
            body: "The RAG system retrieves the most relevant ICD-10-CM and CMS/CPT guidance for each encounter, grounding recommendations in authoritative documentation. The Hybrid Search levarages both semantic meaning and keyword matching, which ensures better comprehensive code retrieval in a medical context. It helps physicians identify reportable codes faster while keeping the source context available for review.",
          },
          {
            label: "LLM data summarization",
            body: "The LLM converts encounter transcripts into concise, structured patient summaries and draft SOAP notes. Physicians can review the essential clinical details quickly instead of manually reorganizing an entire conversation.",
          },
          {
            label: "WebSocket audio transcription",
            body: "A persistent WebSocket connection streams encounter audio to the backend for near-real-time transcription. This lets physicians capture the conversation continuously without waiting for a complete recording to upload and process.",
          },
          {
            label: "Data persistence with PostgreSQL",
            body: "PostgreSQL provides durable relational storage for encounters, transcripts, generated summaries, and coding recommendations. It keeps each workflow's related data organized and available for later review and retrieval.",
          },
        ],
      },
      {
        heading: "Architecture",
        body: "A FastAPI WebSocket backend receives streamed binary audio, runs speech-to-text processing, and coordinates PostgreSQL and Redis-backed services. LangChain coordinates the hybrid search pipeline, combining semantic and keyword retrieval over the indexed compliance sources, while PostgreSQL persists related metadata and Redis caches repeated lookups.",
        technologyTable: {
          title: "Technology stack",
          technologies: [
            {
              name: "FastAPI",
              iconSlug: "fastapi",
              url: "https://fastapi.tiangolo.com/",
            },
            { name: "Groq", url: "https://groq.com/" },
            {
              name: "LangChain",
              iconSlug: "langchain",
              url: "https://www.langchain.com/",
            },
            {
              name: "PostgreSQL",
              iconSlug: "postgresql",
              url: "https://www.postgresql.org/",
            },
            {
              name: "Vue.js",
              iconSlug: "vuedotjs",
              url: "https://vuejs.org/",
            },
            {
              name: "Redis",
              iconSlug: "redis",
              url: "https://redis.io/",
            },
            {
              name: "Docker",
              iconSlug: "docker",
              url: "https://www.docker.com/",
            },
            {
              name: "Prometheus",
              iconSlug: "prometheus",
              url: "https://prometheus.io/",
            },
            {
              name: "Grafana",
              iconSlug: "grafana",
              url: "https://grafana.com/",
            },
            {
              name: "LangSmith",
              iconSlug: "langchain",
              url: "https://www.langchain.com/langsmith",
            },
          ],
        },
      },
      {
        heading: "Reliability",
        body: "Prometheus, Grafana, LangSmith, caching, and containerized services provide observability and stronger post-deployment reliability.",
        highlights: [
          {
            label: "Prometheus + Grafana observability",
            body: "Prometheus collects backend health, request latency, error-rate, and service-performance metrics. Grafana turns those metrics into dashboards that make system behavior, bottlenecks, and reliability issues easier to observe.",
          },
          {
            label: "LangSmith LLM monitoring",
            body: "LangSmith traces the LLM and RAG workflow, including model calls, retrieval steps, latency, and failures. These traces help diagnose unexpected outputs and evaluate the quality and consistency of generated summaries and coding recommendations.",
          },
        ],
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
