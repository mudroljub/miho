const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')

comics = ['bullo001.jpg', 'bullo002.jpg', 'bullo003.jpg', 'bullo004.jpg', 'bullo005.jpg']

let i = 0

arrowRight.addEventListener('click', () => {
  mainImage.src=`images/comics/${comics[++i % comics.length]}`
})

arrowLeft.addEventListener('click', () => {
  i = i - 1 < 0 ? comics.length - 1 : i - 1
  mainImage.src = `images/comics/${comics[i]}`;
});