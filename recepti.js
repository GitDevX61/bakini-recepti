const btnEl = document.querySelector('.js-btn');
const imgEl =  document.querySelector('.js-recipe-image');

btnEl.addEventListener('click', () => {
  imgEl.src = "image1.jpeg"
});