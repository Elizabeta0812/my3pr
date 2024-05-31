const openButton = document.querySelector('.header__burger-button')
const closeButton = document.querySelector('.close')
const burgerMenu = document.querySelector('.burgerMenu')
openButton.addEventListener('click' , () => {
    burgerMenu.classList.add('active')
})
closeButton.addEventListener('click' , () => {
    burgerMenu.classList.remove('active')
})