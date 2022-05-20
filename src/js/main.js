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

// //service color

const serviceItem = document.querySelectorAll('.services-list__item');

serviceItem.forEach(item => {
  item.addEventListener('click', e => {
    e.target.classList.toggle('active');
  })
})

//form

// const form = document.getElementById('form');
// const formBtn = document.getElementById('form-btn');
// const formInputName = document.querySelector('#form-name');
// const formInputTel = document.querySelector('#form-tel');
// const formMassage = document.querySelector('#form-massage');

// formBtn.addEventListener('click', e => {
//   e.preventDefault();
//   console.log(formInputName.value);
//   formInputName.value = '';
//   formInputTel.value = '';
//   formMassage.value = '';
// })

//smooth elements
const smoothElements = document.querySelectorAll('[class*=smooth-appearance_]');

function onEntry(entry) {
  entry.forEach(el => {
    if (el.isIntersecting && !el.target.classList.contains('element-show')) {
      el.target.classList.add('element-show');
    }
  });
}

const options = {
  theshold: [0.5]
};

const observer = new IntersectionObserver(onEntry, options);

smoothElements.forEach(el => observer.observe(el));