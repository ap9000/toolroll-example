export type Book = { title: string; author: string; rating: number | null };

export const BOOKS: Book[] = [
  { title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", rating: 5 },
  { title: "Piranesi", author: "Susanna Clarke", rating: 4 },
  { title: "Café Society", author: "Émile Zola", rating: null },
  { title: "Project Hail Mary", author: "Andy Weir", rating: 4 },
  { title: "The Dispossessed", author: "Ursula K. Le Guin", rating: null },
  { title: "Klara and the Sun", author: "Kazuo Ishiguro", rating: 3 },
];
