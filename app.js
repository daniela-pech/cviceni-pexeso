console.log('Funguju!');

const karticky = document.querySelectorAll('.karticka');

karticky[0].classList.remove('otocena');

const otocitKarticku = (event) => {
  event.target.classList.toggle('otocena');
};

karticky.forEach((karticka) => {
  addEventListener('click', otocitKarticku);
});
