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
      "A full-stack web application designed to solve a specific local problem: finding the right bike shop based on proximity and service offerings.",
    image: "/cyclespots-preview.png",
    repo_url: "https://github.com/aubreymae/cyclespots",
    languages: ["react", "javascript", "postgresql"],
    challenges:
      "Implementing a geospatial search feature to allow users to find bike shops based on their location and specific service needs.",
    outcomes:
      "Creating a database schema using PostgreSQL with PostGIS extension to store bike shop locations and services, and developing a React frontend that provides an intuitive user interface for searching and viewing bike shops.",
  },
  {
    id: "blogging-api",
    title: "Blogging API",
    release: "March 2026",
    description:
      "A small-scale blogging API built with Express.js, designed to provide a simple and efficient way for users to create, read, update, and delete blog posts.",
    image: "/blogging-api-preview.png",
    repo_url: "https://github.com/aubreymae/blogging-api",
    languages: ["html", "css", "javascript", "express api"],
    challenges:
      "Designing a RESTful API with proper error handling and validation.",
    outcomes:
      "Developing a scalable API with Express.js that supports CRUD operations for blog posts, along with comprehensive documentation and testing.",
  },
];
