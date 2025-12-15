const sliderWrapper = document.querySelector('.slider-wrapper');
  const slider = document.querySelector('.slider');
  const buttonPrev = document.getElementById('buttonPrev');
  const buttonNext = document.getElementById('buttonNext');

  // ancho de una card + gap
  const getScrollAmount = () => {
    const card = slider.querySelector('.col');
    const gap = parseInt(getComputedStyle(slider).gap) || 0;
    return card.offsetWidth + gap;
  };

  buttonNext.addEventListener('click', () => {
    sliderWrapper.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth'
    });
  });

  buttonPrev.addEventListener('click', () => {
    sliderWrapper.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth'
    });
  });