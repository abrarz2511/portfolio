import type { TechnologyGroup } from "@/types/content";

export const technologyGroups: TechnologyGroup[] = [
  {
    name: "Languages",
    technologies: [
      { name: "Python", iconSlug: "python" },
      { name: "C", iconSlug: "c" },
      { name: "C++", iconSlug: "cplusplus" },
      { name: "C#", iconSlug: "sharp" },
      { name: "JavaScript", iconSlug: "javascript" },
      { name: "TypeScript", iconSlug: "typescript" },
      { name: "Dart", iconSlug: "dart" },
      { name: "RISC-V", iconSlug: "riscv" },
    ],
  },
  {
    name: "AI Engineering",
    technologies: [
      { name: "LangChain", iconSlug: "langchain" },
      { name: "LlamaIndex" },
      { name: "LangGraph" },
      { name: "NVIDIA Jetson", iconSlug: "nvidia" },
      { name: "FAISS", iconSlug: "meta" },
      { name: "Chroma" },
      { name: "LangSmith", iconSlug: "langchain" },
    ],
  },
  {
    name: "Machine Learning",
    technologies: [
      { name: "PyTorch", iconSlug: "pytorch" },
      { name: "TensorFlow", iconSlug: "tensorflow" },
      { name: "Hugging Face", iconSlug: "huggingface" },
      { name: "OpenCV", iconSlug: "opencv" },
      { name: "Google Colab", iconSlug: "googlecolab" },
    ],
  },
  {
    name: "Full Stack",
    technologies: [
      { name: "React", iconSlug: "react" },
      { name: "Vue.js", iconSlug: "vuedotjs" },
      { name: "Node.js", iconSlug: "nodedotjs" },
      { name: "Express", iconSlug: "express" },
      { name: "FastAPI", iconSlug: "fastapi" },
      { name: ".NET", iconSlug: "dotnet" },
      { name: "Flutter", iconSlug: "flutter" },
      { name: "MongoDB", iconSlug: "mongodb" },
      { name: "PostgreSQL", iconSlug: "postgresql" },
    ],
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS" },
      { name: "Docker", iconSlug: "docker" },
      { name: "GitHub Actions", iconSlug: "githubactions" },
      { name: "GitLab", iconSlug: "gitlab" },
      { name: "Linux", iconSlug: "linux" },
      { name: "Prometheus", iconSlug: "prometheus" },
      { name: "Grafana", iconSlug: "grafana" },
      { name: "IBM watsonx" },
    ],
  },
];
