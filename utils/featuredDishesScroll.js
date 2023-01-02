function start() {
    const btnLeft = document.querySelector('#left-button');
    const btnRight = document.querySelector('#right-button');
    const container = document.querySelector('.scroll-container');
    
    btnLeft.addEventListener('click', () => {
      container.scrollLeft -= 50; 
    });
    
    btnRight.addEventListener('click', () => {
      container.scrollLeft += 50; 
    });
    
}



window.addEventListener("load", start,false)