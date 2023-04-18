const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')

const total = 9

let i = 1

arrowRight.addEventListener('click', () => {
  i++
  if (i > total) i = 1
  mainImage.src=`images/comics/bullo00${i}.jpg`
})

arrowLeft.addEventListener('click', () => {
  i--
  if (i < 1) i = total
  mainImage.src = `images/comics/bullo00${i}.jpg`;
});