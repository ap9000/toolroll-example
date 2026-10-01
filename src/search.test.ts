import { describe, expect, test } from "vitest";
import { BOOKS } from "./books";
import { search } from "./search";

describe("search", () => {
  test("an empty query keeps every book", () => {
    expect(search(BOOKS, "  ")).toHaveLength(BOOKS.length);
  });
  test("matches titles and authors, ignoring case", () => {
    expect(search(BOOKS, "le guin").map(b => b.title)).toEqual(["The Left Hand of Darkness", "The Dispossessed"]);
    expect(search(BOOKS, "PIRANESI").map(b => b.author)).toEqual(["Susanna Clarke"]);
  });
});
