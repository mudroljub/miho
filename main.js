const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')
const owner = document.getElementById('owner')

const total = 10
const audio = new Audio('gun.mp3')
const owners = {
  1: 'https://twitter.com/ILtroman',
}

let i = 1
let touchstartX = 0
let touchendX = 0

/* FUNCTIONS */

const renderOwner = () => {
  owner.innerHTML = owners[i] 
    ? `OWNED BY: <a href="${owners[i]}" target="_blank"><img src="images/twitter.png" height="24"></a>`
    : 'page owner info'
}

const pad = (num, size = 3) => {
  const s = "00" + num
  return s.substring(s.length - size)
}

const update = () => {
  mainImage.src = `images/comics/bullo ${pad(i)}.jpg`
  audio.play()
  renderOwner()
}

const nextImage = () => {
  if (++i > total) i = 1
  update()
}

const prevImage = () => {
  if (--i < 1) i = total
  update()
}

/* EVENTS */

renderOwner()

arrowRight.addEventListener('click', nextImage)
arrowLeft.addEventListener('click', prevImage)

/*
mainImage.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

mainImage.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  if (touchendX < touchstartX) nextImage()
  if (touchendX > touchstartX) prevImage()
})
*/