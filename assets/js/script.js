
document.addEventListener('DOMContentLoaded', function () {

  const title = document.querySelector('.hero__title');
  const sub   = document.querySelector('.hero__sub');
const cta   = document.querySelector('.hero__cta');
  // Piccolo timeout per far partire l'animazione dopo il render , questo serve per dare il tempo per l'animazione del titolo devono essere uguali il timer intendo cosi escono insieme .
  setTimeout(function () {
    title.classList.add('visible'); // title riprende il nome da hero title e visibile significa che dopo 1 seconfdo si vede il titolo
  }, 100);

  setTimeout(function () {
    sub.classList.add('visible');  // sub riprende da hero sub e (leggi sopra)
  }, 100);

setTimeout(function () {
    cta.classList.add('visible');
  }, 400); // stessa cosa di prrima.
  // =============================================
})