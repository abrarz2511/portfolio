import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "physicians-assistant",
    title: "Physician’s Assistant",
    summary:
      "A real-time clinical workflow automation platform for physicians's, simplifying patient-note capture, summarization, and insurance and CMS code compliance.",
    role: "AI & Backend Engineering",
    detailLayout: "expanded",
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
    detailLayout: "expanded",
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
    repositoryUrl: "https://github.com/abrarz2511/production-api",
    sections: [
      {
        heading: "Problem",
        body: "A production LLM endpoint needs more than a successful model response. It must handle unsafe input, sensitive data, abuse, model failures, repeated requests, and operational visibility without exposing users to unpredictable behavior.",
      },
      {
        heading: "Approach",
        body: "The service uses FastAPI and a small LangGraph state machine to separate request validation, model orchestration, response handling, and monitoring concerns.",
        highlights: [
          {
            label: "Explicit agent flow",
            body: "LangGraph sends an accepted request to the primary OpenAI model and records which model produced the response. If the primary call fails, the graph routes to a fallback model before returning a safe error response when both calls fail.",
          },
          {
            label: "Controlled state",
            body: "Conversation messages, the latest error, retry state, and the selected model are carried through the graph explicitly. This makes fallback behavior easier to inspect and test than an implicit chain of model calls.",
          },
        ],
      },
      {
        heading: "Architecture",
        body: "FastAPI exposes chat, health, and operational endpoints while LangGraph owns model execution and fallback routing. Separate security, cache, monitoring, configuration, and schema modules keep cross-cutting production concerns isolated from the agent workflow.",
        technologyTable: {
          title: "Technology stack",
          technologies: [
            {
              name: "FastAPI",
              iconSlug: "fastapi",
              url: "https://fastapi.tiangolo.com/",
            },
            {
              name: "Python",
              iconSlug: "python",
              url: "https://www.python.org/",
            },
            {
              name: "LangGraph",
              url: "https://www.langchain.com/langgraph",
            },
            {
              name: "OpenAI API",
              url: "https://platform.openai.com/docs/",
            },
            {
              name: "SlowAPI",
              url: "https://slowapi.readthedocs.io/",
            },
            {
              name: "LangSmith",
              iconSlug: "langchain",
              url: "https://www.langchain.com/langsmith",
            },
            {
              name: "Docker",
              iconSlug: "docker",
              url: "https://www.docker.com/",
            },
          ],
        },
      },
      {
        heading: "Security",
        body: "The request lifecycle includes defensive checks before and after model execution so unsafe or sensitive content is not passed through without review.",
        highlights: [
          {
            label: "Input protection",
            body: "Prompt-injection checks, PII pattern detection, schema validation, and SlowAPI rate limiting reject or constrain unsafe and abusive requests before they reach the agent.",
          },
          {
            label: "Output protection",
            body: "Response validation masks or blocks sensitive output before it is returned to the caller, providing a final control after model generation.",
          },
        ],
      },
      {
        heading: "Reliability",
        body: "The API combines model failover, TTL caching, structured logging, request metrics, health checks, LangSmith tracing, and containerized delivery to make runtime behavior observable and resilient.",
        highlights: [
          {
            label: "Graceful model fallback",
            body: "The agent attempts a primary model first, routes to a fallback model on failure, and returns a safe apology response if neither provider call succeeds.",
          },
          {
            label: "Operational visibility",
            body: "Structured JSON logs, basic request metrics, health endpoints, and LangSmith traces expose request behavior and model execution for debugging and monitoring.",
          },
          {
            label: "Response caching",
            body: "An in-memory TTL cache can serve repeated responses without invoking the model again, reducing unnecessary latency and model usage while keeping entries time bounded.",
          },
        ],
      },
    ],
  },
  {
    slug: "supbuddy",
    title: "SupBuddy",
    summary:
      "An agent-assisted logistics platform that turns shipment exceptions into prioritized risks, contextual explanations, and recommended actions.",
    role: "Full-stack & Agent Engineering",
    detailLayout: "expanded",
    technologies: [
      "IBM watsonx Orchestrate",
      "FastAPI",
      "React",
      "TypeScript",
      "Python",
    ],
    publishedAt: "2026-05-01",
    featured: true,
    status: "building",
    repositoryUrl: "https://github.com/abrarz2511/SupBuddy",
    sections: [
      {
        heading: "Problem",
        body: "Logistics coordinators often have to check multiple tracking portals, compare milestone timestamps, read disruption reports, and decide which delayed shipment needs attention first. That manual process makes it difficult to distinguish a routine delay from a high-impact exception quickly.",
      },
      {
        heading: "Approach",
        body: "SupBuddy combines deterministic shipment monitoring with an IBM watsonx Orchestrate analyst agent. The backend identifies concrete exceptions first, enriches them with operating context, and then asks the agent for a structured risk explanation and recommended next action.",
        highlights: [
          {
            label: "Deterministic exception detection",
            body: "Scheduled ingestion normalizes ocean, port, trucking, hub, and final-mile milestones before SLA rules flag late arrivals, stale updates, missing milestones, and delayed handoffs.",
          },
          {
            label: "Context-aware enrichment",
            body: "Backend tools gather relevant weather, traffic, local-news, and port-disruption signals so exception analysis reflects the conditions surrounding a shipment.",
          },
          {
            label: "Human-controlled decisions",
            body: "The agent returns a likely cause, risk priority, and recommended action, while the logistics coordinator remains responsible for reviewing the evidence and deciding what to do next.",
          },
        ],
      },
      {
        heading: "Architecture",
        body: "A scheduled backend pipeline ingests shipment updates, normalizes milestone events, evaluates SLA rules, and gathers external context before invoking the analyst agent. FastAPI exposes shipment and alert workflows to a React operations dashboard that presents risk, evidence, status, and recommended actions.",
        technologyTable: {
          title: "Technology stack",
          technologies: [
            {
              name: "React",
              iconSlug: "react",
              url: "https://react.dev/",
            },
            {
              name: "TypeScript",
              iconSlug: "typescript",
              url: "https://www.typescriptlang.org/",
            },
            {
              name: "FastAPI",
              iconSlug: "fastapi",
              url: "https://fastapi.tiangolo.com/",
            },
            {
              name: "Python",
              iconSlug: "python",
              url: "https://www.python.org/",
            },
            {
              name: "IBM watsonx Orchestrate",
              url: "https://www.ibm.com/products/watsonx-orchestrate",
            },
            {
              name: "IBM Bob",
              url: "https://www.ibm.com/products/bob",
            },
          ],
        },
      },
      {
        heading: "Workflow",
        body: "Each exception moves through a traceable sequence from raw tracking data to a coordinator-reviewed recommendation.",
        highlights: [
          {
            label: "Monitor and normalize",
            body: "A scheduled job retrieves tracking updates and converts carrier-specific events into a common milestone model that the rules engine can evaluate consistently.",
          },
          {
            label: "Detect and explain",
            body: "The rules engine creates a structured exception, context tools add external evidence, and watsonx Orchestrate produces an operational explanation and priority.",
          },
          {
            label: "Review and act",
            body: "The dashboard highlights the highest-risk shipments and gives coordinators the supporting context and recommended next step needed to take informed action.",
          },
        ],
      },
      {
        heading: "Next Steps",
        body: "The architecture is designed to grow from demonstration data into real carrier, port, warehouse, and customer integrations while preserving human review of operational decisions.",
        highlights: [
          {
            label: "Planned integrations",
            body: "Future work includes live carrier and freight-forwarder APIs, predictive ETA scoring from historical shipment data, and approval workflows for customer notifications.",
          },
          {
            label: "Agent expansion",
            body: "The workflow can be extended with specialized customs, carrier, and warehouse agents while keeping exception evidence and final actions visible to the coordinator.",
          },
        ],
      },
    ],
  },
  {
    slug: "handwriting-generation",
    title: "Human Handwriting Generation",
    summary:
      "A deployable handwriting-synthesis model connected to a GRBL pen plotter and modular envelope-processing hardware.",
    role: "Machine Learning & Systems Engineering",
    detailLayout: "expanded",
    technologies: [
      "TensorFlow",
      "Python",
      "PyQt",
      "GRBL",
      "NVIDIA GPUs",
      "Google Colab",
    ],
    publishedAt: "2026-05-01",
    featured: true,
    status: "complete",
    sections: [
      {
        heading: "Problem",
        body: "Orion Mailing Solutions needed an affordable system that could generate unique, natural-looking handwritten letters with a real pen and move them through a modular envelope-packaging workflow. The final requirements targeted automated writing, minimal operator intervention, a build cost below $500, and handwriting that most reviewers would identify as human-written.",
      },
      {
        heading: "Approach",
        body: "The project adapted a recurrent handwriting-synthesis model to generate pen trajectories from text, then connected those trajectories to a desktop control application and physical plotting hardware.",
        highlights: [
          {
            label: "Sequence generation",
            body: "An LSTM-based recurrent network follows the Graves handwriting-synthesis architecture, using an attention window and Gaussian-mixture output to predict continuous pen movement and stroke state from an input sentence.",
          },
          {
            label: "Style variation",
            body: "A learned latent style representation gives the generator explicit variation instead of depending only on hidden-state drift, allowing repeated text inputs to produce distinct handwriting samples.",
          },
          {
            label: "Stable character alignment",
            body: "Variational encoding, Gaussian-mixture modeling, and monotonic attention were evaluated to reduce skipped, repeated, or abruptly changing characters in longer generated sequences.",
          },
        ],
      },
      {
        heading: "Architecture",
        body: "TensorFlow produces handwriting trajectories that a Python and PyQt control layer converts into G-code. GRBL firmware drives the pen plotter, while the surrounding modular mechanism positions the index card and envelope for writing, stamping, transfer, insertion, and sealing stages.",
        technologyTable: {
          title: "Technology stack",
          technologies: [
            {
              name: "TensorFlow",
              iconSlug: "tensorflow",
              url: "https://www.tensorflow.org/",
            },
            {
              name: "Python",
              iconSlug: "python",
              url: "https://www.python.org/",
            },
            {
              name: "PyQt",
              url: "https://www.riverbankcomputing.com/software/pyqt/",
            },
            {
              name: "GRBL",
              url: "https://github.com/gnea/grbl",
            },
            {
              name: "NVIDIA GPUs",
              iconSlug: "nvidia",
              url: "https://www.nvidia.com/",
            },
            {
              name: "Google Colab",
              iconSlug: "googlecolab",
              url: "https://colab.google/",
            },
          ],
        },
      },
      {
        heading: "Physical Workflow",
        body: "The deployable system combines the handwriting model with a supervised, continuous mailing workflow built around standard 3-by-5-inch index cards and number-10 envelopes.",
        highlights: [
          {
            label: "Writing stage",
            body: "The operator loads the card and envelope, the system clamps them in repeatable positions, and the GRBL-controlled plotter writes the generated message and addressing information with a real pen.",
          },
          {
            label: "Envelope handling",
            body: "After writing, the mechanism applies a stamp, releases the materials, transfers and flips the envelope, opens its flap, inserts the index card, and seals the package for output.",
          },
          {
            label: "Modular construction",
            body: "The writing and packaging stages were designed as separable modules so the prototype could be transported, reassembled, and iterated without rebuilding the full system.",
          },
        ],
      },
      {
        heading: "Validation",
        body: "The supplied final project documentation records the achieved requirements as well as the parts of the assembly line that remained incomplete at submission.",
        highlights: [
          {
            label: "Handwriting authenticity",
            body: "The final requirements report records 86.3% of evaluators identifying the generated writing as human, exceeding the documented 85% acceptance threshold.",
          },
          {
            label: "Cost and modularity",
            body: "The prototype was documented at $481.55, below the $500 requirement, and the modular assembly requirement was marked complete.",
          },
          {
            label: "Automation scope",
            body: "Automatic writing was marked complete, while the one-interaction production cycle and automatic envelope-packaging requirements were recorded as partially complete.",
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
