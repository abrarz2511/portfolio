import {
  siC,
  siCplusplus,
  siDart,
  siDocker,
  siDotnet,
  siExpress,
  siFastapi,
  siFlutter,
  siGithubactions,
  siGitlab,
  siGooglecolab,
  siGrafana,
  siHuggingface,
  siJavascript,
  siLangchain,
  siLinux,
  siMeta,
  siMongodb,
  siNodedotjs,
  siNvidia,
  siOpencv,
  siPostgresql,
  siPrometheus,
  siPytorch,
  siPython,
  siReact,
  siRedis,
  siRiscv,
  siSharp,
  siTensorflow,
  siTypescript,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";
import type { CSSProperties } from "react";
import type { Technology } from "@/types/content";

const icons: Record<string, SimpleIcon> = {
  c: siC,
  cplusplus: siCplusplus,
  dart: siDart,
  docker: siDocker,
  dotnet: siDotnet,
  express: siExpress,
  fastapi: siFastapi,
  flutter: siFlutter,
  githubactions: siGithubactions,
  gitlab: siGitlab,
  googlecolab: siGooglecolab,
  grafana: siGrafana,
  huggingface: siHuggingface,
  javascript: siJavascript,
  langchain: siLangchain,
  linux: siLinux,
  meta: siMeta,
  mongodb: siMongodb,
  nodedotjs: siNodedotjs,
  nvidia: siNvidia,
  opencv: siOpencv,
  postgresql: siPostgresql,
  prometheus: siPrometheus,
  pytorch: siPytorch,
  python: siPython,
  react: siReact,
  redis: siRedis,
  riscv: siRiscv,
  sharp: siSharp,
  tensorflow: siTensorflow,
  typescript: siTypescript,
  vuedotjs: siVuedotjs,
};

export function TechnologyItem({ technology }: { technology: Technology }) {
  const icon = technology.iconSlug ? icons[technology.iconSlug] : undefined;

  return (
    <li
      className="technology-item"
      style={
        icon
          ? ({ "--brand-color": `#${icon.hex}` } as CSSProperties)
          : undefined
      }
    >
      <a
        className="technology-item__link"
        href={technology.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${technology.name} official website (opens in a new tab)`}
      >
        {icon ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            role="img"
            className="technology-item__icon"
          >
            <path d={icon.path} />
          </svg>
        ) : (
          <span className="technology-item__fallback" aria-hidden="true">
            {technology.name.slice(0, 2).toUpperCase()}
          </span>
        )}
        <span>{technology.name}</span>
      </a>
    </li>
  );
}
