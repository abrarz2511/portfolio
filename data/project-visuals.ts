import type { StaticImageData } from "next/image";
import handwritingGenerationImage from "../resources/handwriting generation.jpg";
import physicianAssistantImage from "../resources/physician_assistant.png";
import productionAiApiImage from "../resources/production-api.jpg";
import supBuddyImage from "../resources/Supplybuddy.png";

type ProjectVisual = {
  image: StaticImageData;
  alt: string;
};

export const projectVisuals: Record<string, ProjectVisual> = {
  "physicians-assistant": {
    image: physicianAssistantImage,
    alt: "Physician Assistant app interface and clinical workflow features",
  },
  "production-ai-api": {
    image: productionAiApiImage,
    alt: "Production AI API retrieval and generation architecture diagram",
  },
  supbuddy: {
    image: supBuddyImage,
    alt: "SupBuddy global shipment monitoring and analytics interface",
  },
  "handwriting-generation": {
    image: handwritingGenerationImage,
    alt: "Physical handwriting generation machine and paper-feed mechanism",
  },
};
