var yellowstars;
function oneStar() {
    yellowstars = 1
    changeColor();
}

function twoStars() {
    yellowstars = 2
    changeColor();
}

function threeStars() {
    yellowstars = 3
    changeColor();
}

function fourStars() {
    yellowstars = 4
    changeColor();
}

function fiveStars() {
    yellowstars = 5
    changeColor();
}

function changeColor() {
    switch (yellowstars) {
        case 1: {
            for(let i = 1; i<=5; i++){
                if(i<=1){
                    document.getElementById(`star-${i}`).style.color = "#FFC800"
                } else {
                    document.getElementById(`star-${i}`).style.color = "#000000"
                }
            }
        }
            break;
        case 2: {
            for(let i = 1; i<=5; i++){
                if(i<=2){
                    document.getElementById(`star-${i}`).style.color = "#FFC800"
                } else {
                    document.getElementById(`star-${i}`).style.color = "#000000"
                }
            }
        }
            break;
        case 3: for(let i = 1; i<=5; i++){
                if(i<=3){
                    document.getElementById(`star-${i}`).style.color = "#FFC800"
                } else {
                    document.getElementById(`star-${i}`).style.color = "#000000"
                }
            }
            break;
        case 4: {
            for(let i = 1; i<=5; i++){
                if(i<=4){
                    document.getElementById(`star-${i}`).style.color = "#FFC800"
                } else {
                    document.getElementById(`star-${i}`).style.color = "#000000"
                }
            }
        }
            break;
        case 5: {
            for (let i = 1; i <= 5; i++) {
                document.getElementById(`star-${i}`).style.color = "#FFC800"
            }
        }
            break;

    }
}
