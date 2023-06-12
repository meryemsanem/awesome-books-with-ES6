const navLinks = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('#nav-links');
const pages = document.querySelectorAll('.page');
let currentPage = 'book-list-page';

const updatePage = () => {
  pages.forEach((page) => {
    if (page.id === currentPage) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });

  navLinks.forEach((navLink) => {
    if (navLink.dataset.linksTo === currentPage) {
      navLink.classList.add('current');
    } else {
      navLink.classList.remove('current');
    }
  });
};

navContainer.addEventListener('click', (e) => {
  if (e.target.dataset.linksTo) {
    currentPage = e.target.dataset.linksTo;
    updatePage();
  }
});

updatePage();
