import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    slug: "orion-defense-solutions",
    title: "Software Engineering Intern",
    company: "Orion Defense Solutions",
    startDate: "2026-05",
    summary:
      "Building a multi-agent LLM pipeline for business-contract document generation.",
    highlights: [
      "Building a multi-agent LLM pipeline using Gemini Deep Research to automate contract document generation.",
      "Developing FastAPI microservices and Streamlit interfaces for orchestration and human review.",
      "Architecting agent collaboration and retrieval workflows to reduce manual drafting effort.",
    ],
  },
  {
    slug: "biatech-corporation",
    title: "AI Engineering Intern",
    company: "BiaTech Corporation",
    startDate: "2025-12",
    endDate: "2026-05",
    summary:
      "Developed embedded AI and autonomous robotics systems for industrial applications.",
    highlights: [
      "Designed automated-inspection systems and deployed edge inference workloads on NVIDIA Jetson.",
      "Built ROS 2 autonomous-navigation pipelines for UGV robots with Python and C++.",
      "Optimized real-time AI workloads for robotics and industrial monitoring.",
    ],
  },
  {
    slug: "usf-rare-lab",
    title: "Junior Researcher III",
    company: "USF RARE Lab",
    startDate: "2024-12",
    endDate: "2025-12",
    summary:
      "Worked on cloud-connected, explainable AI systems for collaborative robotics.",
    highlights: [
      "Rebuilt backend infrastructure for an OpenAI-powered robot platform and deployed it on AWS EC2.",
      "Migrated legacy ROS code to ROS 2 in C++ for compatibility with Unitree Go2 robots.",
      "Developed explainable machine-learning systems for safer collaborative robotics.",
    ],
  },
];
