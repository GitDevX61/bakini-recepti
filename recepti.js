const frwrdBtnEl = document.querySelector('.js-frwrd-btn');
const bckwrdBtnEl = document.querySelector('.js-bckwrd-btn');
const imgEl =  document.querySelector('.js-recipe-image');

frwrdBtnEl.addEventListener('click', () => {
  imgEl.src = "image1.jpeg"
  bckwrdBtnEl.classList.add('enable-bckwrd-btn');
});

bckwrdBtnEl.addEventListener('click', () => {
  imgEl.src = "image0.jpeg"
});