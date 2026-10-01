import type { Book } from "./books";

export type SortKey = "title" | "rating";

/** A sorted copy: by title A–Z, or by rating, best first. */
export function sortBooks(books: Book[], key: SortKey): Book[] {
  const copy = [...books];
  if (key === "title") return copy.sort((a, b) => a.title.localeCompare(b.title));
  return copy.sort((a, b) => (b.rating ?? Infinity) - (a.rating ?? Infinity));
}
