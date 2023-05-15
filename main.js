const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')

const total = 10
const audio = new Audio('gun.mp3')

const pad = (num, size = 3) => {
  const s = "00" + num
  return s.substring(s.length - size)
}

let i = 1

arrowRight.addEventListener('click', () => {
  i++
  if (i > total) i = 1
  mainImage.src=`images/comics/bullo ${pad(i)}.jpg`
  audio.play();
})

arrowLeft.addEventListener('click', () => {
  i--
  if (i < 1) i = total
  mainImage.src = `images/comics/bullo ${pad(i)}.jpg`;
  audio.play();
});