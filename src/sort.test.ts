import { describe, expect, test } from "vitest";
import { BOOKS } from "./books";
import { sortBooks } from "./sort";

describe("sortBooks", () => {
  test("sorts by title A to Z", () => {
    expect(sortBooks(BOOKS, "title")[0]!.title).toBe("Café Society");
  });
  test("does not change the original list", () => {
    const before = BOOKS.map(b => b.title);
    sortBooks(BOOKS, "rating");
    expect(BOOKS.map(b => b.title)).toEqual(before);
  });
});
