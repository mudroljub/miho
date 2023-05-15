const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')

let i = 1
let touchstartX = 0
let touchendX = 0

const total = 10
const audio = new Audio('gun.mp3')

/* FUNCTIONS */

const pad = (num, size = 3) => {
  const s = "00" + num
  return s.substring(s.length - size)
}

const nextImage = () => {
  if (++i > total) i = 1
  mainImage.src = `images/comics/bullo ${pad(i)}.jpg`
  audio.play()
}

const prevImage = () => {
  if (--i < 1) i = total
  mainImage.src = `images/comics/bullo ${pad(i)}.jpg`
  audio.play()
}

/* EVENTS */

arrowRight.addEventListener('click', nextImage)
arrowLeft.addEventListener('click', prevImage)

mainImage.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

mainImage.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  if (touchendX < touchstartX) nextImage()
  if (touchendX > touchstartX) prevImage()
})