(() => {
  document
    .querySelector('.js-send-form')
    .addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`),
    );

    e.target.reset();
  });
})();

function btnAlert() {
  alert("Дякуємо! Заяву прийнято, керівник зателефонує Вам.");
};