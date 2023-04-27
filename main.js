let BtnActive = document.querySelector('.home__button-reg');
let popupActive = document.querySelector('.form__data-phone');
let formActiveClouse = document.querySelector('.formActive-clouse')
let fheaderWhatsup = document.querySelector('.header__whatsup')
let infoAdress = document.querySelector('.header__info-adress');
let ssubmenuList = document.querySelector('.ssubmenu-adres-list')
let pupapVidos = document.querySelector('.pupap-vidos')
let btnVidos = document.querySelector('.button-videos')
let popupClousevidos = document.querySelector('.formpopup-clouse')

BtnActive.addEventListener('click', function(){
    popupActive.classList.toggle('openActifeSert')
})

formActiveClouse.addEventListener('click', function(){
    popupActive.classList.remove('openActifeSert')
})

fheaderWhatsup.addEventListener('click', function(){
    popupActive.classList.toggle('openActifeSert')
})

infoAdress.addEventListener('click', function(){
    ssubmenuList.classList.toggle('displayBlock')
})

btnVidos.addEventListener('click', function(){
    pupapVidos.classList.toggle('popup-vidos-open')
})

popupClousevidos.addEventListener('click', function(){
    pupapVidos.classList.remove('popup-vidos-open')
})