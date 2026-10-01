import type { Book } from "./books";

/** Books whose title or author contains the query, ignoring case. */
export function search(books: Book[], query: string): Book[] {
  const q = query.trim().toLowerCase();
  if (q === "") return books;
  return books.filter(book => book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q));
}
