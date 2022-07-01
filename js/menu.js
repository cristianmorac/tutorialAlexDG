(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link')
    const closeMenu = document.querySelector('.nav__close')
    /* Agregar clase */
    openButton.addEventListener('click',()=>{
        menu.classList.add('nav__link--show');
    })
    /* Eliminar clase */
    closeMenu.addEventListener('click',()=>{
        menu.classList.remove('nav__link--show');
    })
})();