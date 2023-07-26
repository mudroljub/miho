const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')
const owner = document.getElementById('owner')

const total = 15
const audio = new Audio('gun.mp3')
const owners = {
  1: 'https://twitter.com/ILtroman',
  2: 'https://twitter.com/ikaanft',
  3: 'https://twitter.com/Papa_MooMoo',
  4: 'https://twitter.com/f2kus',
  5: 'https://twitter.com/Alwin_SOL',
  6: 'https://twitter.com/Gr1nder4l1fe',
  7: 'https://twitter.com/wgarrettdavis',
  8: 'https://twitter.com/Trippsoul_NFT',
  9: 'https://twitter.com/f2kus',
  10: 'https://twitter.com/Gr1nder4l1fe',
}

let i = 1

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
