export type LanguageKey =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "react"
  | "postgresql"
  | "express api";

type LanguageStyle = {
  label: string;
  colors: {
    bg: string;
    border: string;
    text: string;
  };
};

export const LANGUAGE_MAP: Record<LanguageKey, LanguageStyle> = {
  html: {
    label: "HTML",
    colors: {
      bg: "#2C4233",
      border: "#31672E",
      text: "#75B68A",
    },
  },
  css: {
    label: "CSS",
    colors: {
      bg: "#42422C",
      border: "#73732F",
      text: "#B2B647",
    },
  },
  javascript: {
    label: "JavaScript",
    colors: {
      bg: "#422C2C",
      border: "#7D3939",
      text: "#C85B5B",
    },
  },
  typescript: {
    label: "TypeScript",
    colors: {
      bg: "#3F2C42",
      border: "#6E3777",
      text: "#B163BD",
    },
  },
  react: {
    label: "React",
    colors: {
      bg: "#2C4142",
      border: "#377477",
      text: "#63B3BD",
    },
  },
  postgresql: {
    label: "PostgreSQL",
    colors: {
      bg: "#42342C",
      border: "#775537",
      text: "#BD8F63",
    },
  },
  "express api": {
    label: "Express API",
    colors: {
      bg: "#2c4241",
      border: "#377777",
      text: "#63b8bd",
    },
  },
};
