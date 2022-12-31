window.addEventListener("load", function(){
    var date = new Date();

    var hour = date.getHours();
    var element = document.querySelector(".form-container");

    if(0 <= hour && hour < 8){ 
        element.style.background = "#F5F5F5";
    }
    else if(8 <= hour && hour < 16){
        element.style.background = "#FFFFCC";
    }
    else if(16 <= hour && hour < 24){
        element.style.background = "#D2A298";
    }
});