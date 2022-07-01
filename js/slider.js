/* Funcion para el carrusel */
(function(){
    /* Convertirlo en un array */
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });
    const changePosition = (add)=>{
        const currentTesimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTesimony);
        value += add;

        sliders[Number(currentTesimony)-1].classList.remove('testimony__body--show');
        if(value==sliders.length+1 || value ==0){
            value = value ==  0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony__body--show');
    }
})();
