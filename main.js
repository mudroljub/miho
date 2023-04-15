const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const mainImage = document.getElementById('main-image')

comics = ['001', '002', '003', '004', '005', '006', '007', '008']

let i = 0

arrowRight.addEventListener('click', () => {
  i++
  if (i >= comics.length) i = 0
  mainImage.src=`images/comics/bullo${comics[i]}.jpg`
})

arrowLeft.addEventListener('click', () => {
  i--
  if (i < 0) i = comics.length - 1
  console.log(i)
  mainImage.src = `images/comics/bullo${comics[i]}.jpg`;
});