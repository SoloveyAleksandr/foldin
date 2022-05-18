//smooth hook

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const id = link.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
})

//service color

const serviceItem = document.querySelectorAll('.services-list__item');

serviceItem.forEach(item => {
  item.addEventListener('click', e => {
    e.target.classList.toggle('active');
  })
})