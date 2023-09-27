const scriptURL = 'https://script.google.com/macros/s/AKfycbzXkYTkBdYEIRNJKGOUMuPEIC8-Kw1c9Xrq0gKgGNyB3D8oODFkXBoZsquJqC3bLBM/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})