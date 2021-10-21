const articleSlider = document.querySelector('.article__slider');
const btnSlider = document.querySelector('.btn-slider');
const priceText = document.querySelector('.price-text');
const pageViewsEl = document.querySelector('.pageviews-text');
const pricesPerMonthArr = [8,12,16,24,36];
const pageViewsArr = [10,50,100,500,1000];

function toggleBtnSlider() {
  btnSlider.classList.toggle('btn-slider--active');
  updatePriceAndViews.call(articleSlider);
};

function updateSliderBar() {
  const value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #a5f3eb 0%, #a5f3eb ' + value + '%, #eaeefb ' + value + '%, #eaeefb 100%)'
};

function updatePriceAndViews() {
  let discount = 1;
  if (btnSlider.classList.contains('btn-slider--active')) {
    discount = .75;
  }
  priceText.textContent = `$${pricesPerMonthArr[this.value-1]*discount},00`;
  if (this.value == 5) {
    pageViewsEl.textContent = `${pageViewsArr[this.value-1]}m pageviews`;
  } else {
    pageViewsEl.textContent = `${pageViewsArr[this.value-1]}k pageviews`;
  }
}

function updateSlider() {
  updateSliderBar.call(this);
  updatePriceAndViews.call(this);
};

function updateMouse() {
  this.classList.toggle("article__slider--active");
}

articleSlider.addEventListener('input', updateSlider);
articleSlider.addEventListener('mousedown', updateMouse);
articleSlider.addEventListener('mouseup', updateMouse);
btnSlider.addEventListener('click', toggleBtnSlider);