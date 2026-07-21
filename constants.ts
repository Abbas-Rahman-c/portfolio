export const METADATA = {
  title: "Portfolio | Abbas Rahman",
  description:
    "AI/ML engineer building production-ready Generative AI systems, multi-agent pipelines, and RAG architectures.",
  siteUrl: "https://abbasrahman.vercel.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I build agentic AI systems",
  "I design RAG pipelines",
  "I develop multi-agent LLM apps",
  "I ship production-ready GenAI",
];

export const EMAIL = "rahmanabbas923@gmail.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/Abbas-Rahman-c",
  linkedin: "https://www.linkedin.com/in/abbas-rahman-05200b207",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

const BLUR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";

export const PROJECTS: IProject[] = [
  {
    name: "Locus AI",
    image: "/projects/locus-ai.jpg",
    blurImage: BLUR,
    description: "AI-powered decision tracker for teams, built as Backend Lead.",
    gradient: ["#1B2A5E", "#0F1B3D"],
    url: "https://github.com/Abbas-Rahman-c",
    tech: ["python", "fastapi", "supabase", "anthropic"],
  },
  {
    name: "Career Research Agent",
    image: "/projects/career-research-agent.jpg",
    blurImage: BLUR,
    description: "Multi-step reasoning agent answering career questions with cited sources.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/Abbas-Rahman-c/research-agent",
    tech: ["groq", "azure", "fastapi", "streamlit"],
  },
  {
    name: "Full-Stack RAG Chatbot",
    image: "/projects/agentic-chatbot.jpg",
    blurImage: BLUR,
    description: "Offline RAG chatbot over PDFs, powered by local Llama 3.2 via Ollama.",
    gradient: ["#245B57", "#004741"],
    url: "https://github.com/Abbas-Rahman-c/local-llm-chatbot",
    tech: ["fastapi", "react", "langchain", "faiss"],
  },
  {
    name: "InsightCV",
    image: "/projects/insightcv.jpg",
    blurImage: BLUR,
    description: "AI resume analyzer with instant, structured feedback via the Gemini API.",
    gradient: ["#5E4C06", "#746528"],
    url: "https://ai.studio/apps/840fda21-2c76-44c5-98b8-8d7d9c0056ba",
    tech: ["googlegemini", "nodedotjs"],
  },
  {
    name: "Induction Motor Fault Detection",
    image: "/projects/motor-fault-detection.jpg",
    blurImage: BLUR,
    description: "CNN model classifying motor health from vibration and current signals.",
    gradient: ["#003052", "#167187"],
    url: "https://github.com/Abbas-Rahman-c/Induction-Motor-Fault-Detection-Using-CNN",
    tech: ["tensorflow", "python", "numpy"],
  },
  {
    name: "Speech Emotion Recognition",
    image: "/projects/speech-emotion.jpg",
    blurImage: BLUR,
    description: "CNN-LSTM model classifying 6 emotions from raw audio, tested on RAVDESS.",
    gradient: ["#17007B", "#3A2C79"],
    url: "https://github.com/Abbas-Rahman-c",
    tech: ["tensorflow", "python"],
  },
];

export const SKILLS = {
  genAI: [
    "anthropic",
    "langchain",
    "huggingface",
    "openai",
    "googlegemini",
    "azure",
    "ollama",
    "faiss",
    "groq",
  ],
  mlDl: ["pytorch", "tensorflow", "scikitlearn", "keras"],
  toolsBackend: [
    "python",
    "javascript",
    "nodedotjs",
    "deno",
    "fastapi",
    "flask",
    "streamlit",
    "supabase",
    "postgresql",
    "numpy",
    "pandas",
    "docker",
    "git",
  ],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2027",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduating (Expected) 🎓",
    size: ItemSize.SMALL,
    subtitle: "B.E. Electrical Engineering, NUST Islamabad (SEECS)",
    slideImage: "/timeline/graduation.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2026",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Backend Lead, Locus AI (Present)",
    size: ItemSize.SMALL,
    subtitle:
      "Leading backend for an AI-powered decision tracker: Slack/Notion/Gmail ingestion, Claude-based extraction, and a RAG retrieval pipeline with multi-tenant security. Started June 2026, part of the PM Accelerator program.",
    slideImage: "/timeline/locus-ai.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Career Research Agent",
    size: ItemSize.SMALL,
    subtitle:
      "Built an autonomous agentic system for the Microsoft Agents League Hackathon: Azure AI Search, Groq LLaMA 3.3 70B, FastAPI/Streamlit",
    slideImage: "/timeline/hackathon-1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "InsightCV",
    size: ItemSize.SMALL,
    subtitle:
      "Built a Gemini API-powered CV analyzer for the Google Cloud AI Seekho Hackathon 🚀",
    slideImage: "/timeline/hackathon-2.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Started B.E. Electrical Engineering",
    size: ItemSize.SMALL,
    subtitle:
      "Began my journey at NUST Islamabad (SEECS), laying the foundation in Machine Learning, Signal Processing, and Data Structures & Algorithms",
    slideImage: "/timeline/nust.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}
