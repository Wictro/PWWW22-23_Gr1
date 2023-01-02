function start() {
    const btnLeft = document.querySelector('#left-button');
    const btnRight = document.querySelector('#right-button');
    const container = document.querySelector('.scroll-container');
    
    btnLeft.addEventListener('click', () => {
      container.scrollLeft -= 330; 
    });
    
    btnRight.addEventListener('click', () => {
      container.scrollLeft += 330; 
    });
    
}



window.addEventListener("load", start,false)