const frwrdBtnEl = document.querySelector('.js-frwrd-btn');
const bckwrdBtnEl = document.querySelector('.js-bckwrd-btn');
const recipeImgContainerEl = document.querySelector('.js-recipe-image-container');
const startBtnEl = document.querySelector('.js-start-btn');

let book = [
  {
    name: 'page1',
    img: 'image0.jpeg'
  },
  {
    name: 'page2',
    img: 'image1.jpeg'
  },
  {
    name: 'page3',
    img: 'image2.jpeg'
  },
  {
    name: 'page4',
    img: 'image3.jpeg'
  }
]

let mainImg = document.createElement('img');
mainImg.setAttribute('src', book[0].img);
mainImg.classList.add('recipe-image');
recipeImgContainerEl.appendChild(mainImg);

let count = 0;

frwrdBtnEl.addEventListener('click', () => {

  if ((count+1) < book.length) {
    nextPage(count);
    count++;
  }

  function nextPage(count) {
    mainImg.src = book[count+1].img
  }
});

bckwrdBtnEl.addEventListener('click', () => {

  if (count < book.length) {
    prevPage(count);
    count--;
  }

  function prevPage(count) {
    mainImg.src = book[count-1].img
  }
});

/*
startBtnEl.addEventListener('click', () => {
  mainImg.src = book[0].img
  count = 0;
})
*/
