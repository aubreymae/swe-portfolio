export type BlogPost = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  url: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Storing tags as an array in PostgreSQL",
    date: "March 8, 2026",
    excerpt:
      "I recently transitioned my microblogging API from using a local JSON file in memory to a persistent PostgreSQL database...",
    url: "https://www.linkedin.com/posts/aubreymg_i-recently-transitioned-my-microblogging-share-7436528403022860289-SFuh?utm_source=share&utm_medium=member_desktop&rcm=ACoAACmANOEBel386gQ_VdCw_0bT5AGlGgJxhYk",
  },
  {
    id: 2,
    title: "Reflection on design thinking",
    date: "February 13, 2026",
    excerpt:
      "Since transitioning into my current role back in June 2025, I've had exciting opportunities to work on many different projects...",
    url: "https://www.linkedin.com/posts/aubreymg_a-reflection-on-design-thinking-since-share-7428089407162789889-7RL-?utm_source=share&utm_medium=member_desktop&rcm=ACoAACmANOEBel386gQ_VdCw_0bT5AGlGgJxhYk",
  },
];
