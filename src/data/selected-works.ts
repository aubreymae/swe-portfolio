export type Work = {
  id: string;
  title: string;
  release: string;
  description: string;
  image: string;
  repo_url: string;
  languages: string[];
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
    languages: ["HTML", "CSS"],
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
    languages: ["HTML", "CSS"],
    challenges:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    outcomes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
