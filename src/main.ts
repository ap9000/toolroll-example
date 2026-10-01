import "./style.css";
import { BOOKS } from "./books";
import { search } from "./search";
import { sortBooks, type SortKey } from "./sort";

const list = document.querySelector<HTMLUListElement>("#books")!;
const input = document.querySelector<HTMLInputElement>("#search")!;
const sort = document.querySelector<HTMLSelectElement>("#sort")!;

const stars = (rating: number | null) => (rating === null ? "Not rated" : "★".repeat(rating) + "☆".repeat(5 - rating));

function render(): void {
  const books = sortBooks(search(BOOKS, input.value), sort.value as SortKey);
  list.innerHTML = books
    .map(book => `<li class="book"><h2>${book.title}</h2><p class="author">${book.author}</p><p class="rating">${stars(book.rating)}</p></li>`)
    .join("");
}

input.addEventListener("input", render);
sort.addEventListener("change", render);
render();
