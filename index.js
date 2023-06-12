import BooksList from './modules/bookslist.js';

import timeDate from './modules/timeDate.js';

const awesomeBooks = new BooksList();

const booksList = document.querySelector('#books');
const form = document.getElementById('form');

const createBookHTML = (book) => {
  const li = document.createElement('li');
  const bookDetails = document.createElement('span');
  const removeBtn = document.createElement('button');

  li.classList.add('book');
  bookDetails.classList.add('book-details');
  removeBtn.classList.add('remove-btn');
  removeBtn.classList.add('btn');

  bookDetails.innerText = `"${book.title}" by ${book.author}`;
  removeBtn.innerText = 'Remove';
  removeBtn.setAttribute('data-book-id', book.id);

  li.appendChild(bookDetails);
  li.appendChild(removeBtn);
  return li;
};

const loadBooks = () => {
  if (!awesomeBooks.books.length) {
    const noBooks = document.createElement('div');
    noBooks.classList.add('no-books-msg');
    noBooks.innerText = 'You have not added any books';
    booksList.innerHTML = '';
    booksList.appendChild(noBooks);
  } else {
    booksList.innerHTML = '';
    awesomeBooks.books.forEach((book) => {
      booksList.appendChild(createBookHTML(book));
    });
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = e.target.elements;
  const title = inputs.title.value;
  const author = inputs.author.value;
  awesomeBooks.addBook(title, author);
  loadBooks();
  e.target.reset();
});

booksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const id = e.target.dataset.bookId;
    awesomeBooks.removeBook(id);
    booksList.innerHTML = ' ';
    loadBooks();
  }
});

window.addEventListener('load', loadBooks);
