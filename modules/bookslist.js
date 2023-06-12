class BooksList {
  #books;

  constructor() {
    const storedBooks = localStorage.getItem('awesomeBooks');
    this.#books = storedBooks ? JSON.parse(storedBooks) : [];
  }

  get books() {
    return this.#books;
  }

  addBook(title, author) {
    const rand = Math.floor(Math.random() * 10 ** 16);
    const date = Date.now();
    const id = `${rand}${date}`;

    const newBook = {
      title,
      author,
      id,
    };
    this.#books.push(newBook);
    localStorage.setItem('awesomeBooks', JSON.stringify(this.#books));
    return newBook;
  }

  removeBook(id) {
    this.#books = this.#books.filter((book) => book.id !== id);
    localStorage.setItem('awesomeBooks', JSON.stringify(this.#books));
  }
}
export default BooksList;
