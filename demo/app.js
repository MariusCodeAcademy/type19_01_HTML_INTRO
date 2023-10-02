// paspaudus mygtuka paslepti paveiksleli

// Psiaudo kodas
// nusitaikyti i mygtuka
const mainBtn = document.getElementById('main');
// nusitaiki i paveiksleli
const beeImg = document.getElementById('bee-img');

// sureguoti i mygtuko paspaudima
mainBtn.addEventListener('click', () => {
  console.count('Paspaudei');
  // padaryti paveiksleliui "display:none"
  // beeImg.style.display = 'none';

  // prideti arba nuimti klase hide
  beeImg.classList.toggle('hide');
});
