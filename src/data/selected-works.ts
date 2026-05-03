import type { LanguageKey } from "./languages";

export type Work = {
  id: string;
  title: string;
  release: string;
  description: string;
  image: string;
  repo_url: string;
  languages: LanguageKey[];
  challenges: string;
  outcomes: string;
};

export const works: Work[] = [
  {
    id: "cyclespots",
    title: "CycleSpots",
    release: "April 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "..",
    repo_url: "..",
    languages: ["react", "javascript", "postgresql"],
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    outcomes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "blogging-api",
    title: "Blogging API",
    release: "March 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "..",
    repo_url: "..",
    languages: ["html", "css", "javascript", "express api"],
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    outcomes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
