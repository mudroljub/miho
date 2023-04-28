const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')

const total = 9
var audio = new Audio('gun.mp3');

let i = 1

arrowRight.addEventListener('click', () => {
  i++
  if (i > total) i = 1
  mainImage.src=`images/comics/bullo 00${i}.jpg`
  audio.play();
})

arrowLeft.addEventListener('click', () => {
  i--
  if (i < 1) i = total
  mainImage.src = `images/comics/bullo 00${i}.jpg`;
  audio.play();
});