import type { TechnologyGroup } from "@/types/content";

export const technologyGroups: TechnologyGroup[] = [
  {
    name: "Languages",
    technologies: [
      { name: "Python", iconSlug: "python", url: "https://www.python.org/" },
      { name: "C", iconSlug: "c", url: "https://www.c-language.org/" },
      { name: "C++", iconSlug: "cplusplus", url: "https://isocpp.org/" },
      {
        name: "C#",
        iconSlug: "sharp",
        url: "https://dotnet.microsoft.com/languages/csharp",
      },
      {
        name: "JavaScript",
        iconSlug: "javascript",
        url: "https://developer.mozilla.org/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        iconSlug: "typescript",
        url: "https://www.typescriptlang.org/",
      },
      { name: "Dart", iconSlug: "dart", url: "https://dart.dev/" },
      { name: "RISC-V", iconSlug: "riscv", url: "https://riscv.org/" },
    ],
  },
  {
    name: "AI Engineering",
    technologies: [
      {
        name: "LangChain",
        iconSlug: "langchain",
        url: "https://www.langchain.com/",
      },
      { name: "LlamaIndex", url: "https://www.llamaindex.ai/" },
      { name: "LangGraph", url: "https://www.langchain.com/langgraph" },
      {
        name: "NVIDIA Jetson",
        iconSlug: "nvidia",
        url: "https://developer.nvidia.com/embedded/jetson",
      },
      { name: "FAISS", iconSlug: "meta", url: "https://faiss.ai/" },
      { name: "Chroma", url: "https://www.trychroma.com/" },
      {
        name: "LangSmith",
        iconSlug: "langchain",
        url: "https://www.langchain.com/langsmith",
      },
    ],
  },
  {
    name: "Machine Learning",
    technologies: [
      { name: "PyTorch", iconSlug: "pytorch", url: "https://pytorch.org/" },
      {
        name: "TensorFlow",
        iconSlug: "tensorflow",
        url: "https://www.tensorflow.org/",
      },
      {
        name: "Hugging Face",
        iconSlug: "huggingface",
        url: "https://huggingface.co/",
      },
      { name: "OpenCV", iconSlug: "opencv", url: "https://opencv.org/" },
      {
        name: "Google Colab",
        iconSlug: "googlecolab",
        url: "https://colab.google/",
      },
    ],
  },
  {
    name: "Full Stack",
    technologies: [
      { name: "React", iconSlug: "react", url: "https://react.dev/" },
      { name: "Vue.js", iconSlug: "vuedotjs", url: "https://vuejs.org/" },
      { name: "Node.js", iconSlug: "nodedotjs", url: "https://nodejs.org/" },
      { name: "Express", iconSlug: "express", url: "https://expressjs.com/" },
      {
        name: "FastAPI",
        iconSlug: "fastapi",
        url: "https://fastapi.tiangolo.com/",
      },
      { name: ".NET", iconSlug: "dotnet", url: "https://dotnet.microsoft.com/" },
      { name: "Flutter", iconSlug: "flutter", url: "https://flutter.dev/" },
      { name: "MongoDB", iconSlug: "mongodb", url: "https://www.mongodb.com/" },
      {
        name: "PostgreSQL",
        iconSlug: "postgresql",
        url: "https://www.postgresql.org/",
      },
    ],
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS", url: "https://aws.amazon.com/" },
      { name: "Docker", iconSlug: "docker", url: "https://www.docker.com/" },
      {
        name: "GitHub Actions",
        iconSlug: "githubactions",
        url: "https://github.com/features/actions",
      },
      { name: "GitLab", iconSlug: "gitlab", url: "https://about.gitlab.com/" },
      { name: "Linux", iconSlug: "linux", url: "https://www.kernel.org/" },
      {
        name: "Prometheus",
        iconSlug: "prometheus",
        url: "https://prometheus.io/",
      },
      { name: "Grafana", iconSlug: "grafana", url: "https://grafana.com/" },
      { name: "IBM watsonx", url: "https://www.ibm.com/watsonx" },
    ],
  },
];
