const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')

comics = ['001', '002', '003', '004', '005', '006', '007', '008']

let i = 0

arrowRight.addEventListener('click', () => {
  mainImage.src=`images/comics/bullo${comics[++i % comics.length]}.jpg`
})

arrowLeft.addEventListener('click', () => {
  i = i - 1 < 0 ? comics.length - 1 : i - 1
  mainImage.src = `images/comics/bullo${comics[i]}.jpg`;
});