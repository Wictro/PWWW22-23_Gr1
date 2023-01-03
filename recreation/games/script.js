let lojtari1 = document.getElementById("lojtari1");
let emri1;
let lojtari2 = document.getElementById("lojtari2");
let emri2;
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");
let state = document.getElementById('state');
let squares = document.getElementsByClassName("unit");
let boardArray = buildBoardArray();
let charArray = [];
let Tabela;

function buildBoardArray(){
    let arr = [];
    let count = 0;
    for(var i = 0; i < 3; i++){
        arr[i] = [new BoardElement(squares[count++]), new BoardElement(squares[count++]), new BoardElement(squares[count++])];
    }
    return arr;
}

function buildCharArray(){
    for(var i = 0; i < 3; i++){
        charArray[i] = ['', '', ''];
    }
}

function Player(){
    this.name;
    this.sign;
    this.Winner = false;
    
    this.getName = function(){
        return this.name;
    }

    this.setName = function(newName){
        this.name = newName;
    }

    this.isWinner = function(){
        return this.Winner;
    }

    this.getSign = function(){
        return this.sign;
    }

    this.setSign = function(newSign){
        this.sign = newSign;
    }

    this.makeWinner = function(){
        this.Winner = true;
    }
}

function BoardElement(element){
    this.element = element;
    this.isAvaliable = true;
    this.sign;
}

function Board(board, chars){
    this.elements = board;
    this.chars = chars;
    this.taken = 0;
    this.isFull = function(){
        return this.taken >= 9;
    }
    this.evaluate = function(player, row, col){
        var counter = 0;
        var sign = player.getSign();
        
        //row check
        for(var j = 0; j < 3; j++){
            if(chars[row][j] == sign)
                counter++;
        }
        if(counter == 3){
            player.makeWinner();
            return [{pos1: row, pos2: 0}, {pos1: row, pos2: 1}, {pos1: row, pos2: 2}];
        }
        else{
            counter = 0;
        }
        
        //column check
        for(var j = 0; j < 3; j++){
            if(chars[j][col] == sign)
                counter++;
        }
        if(counter == 3){
            player.makeWinner();
            return [{pos1: 0, pos2: col}, {pos1: 1, pos2: col}, {pos1: 2, pos2: col}];
        }
        else{
            counter = 0;
        }
        
        //diagonal check
        if(row == col){//first diagonal
            for(var i = 0; i < 3; i++){
            if(chars[i][i] == sign)
                counter++;
            }
            if(counter == 3){
                player.makeWinner();
                return [{pos1: 0, pos2: 0}, {pos1: 1, pos2: 1}, {pos1: 2, pos2: 2}];
            }
            else{
                counter = 0;
            }
        }
        
        if(row == 2 - col){//second diagonal
            for(var i = 2; i >= 0; i--){
            if(chars[i][2-i] == sign)
                counter++;
            }
            if(counter == 3){
                player.makeWinner();
                return [{pos1: 0, pos2: 2}, {pos1: 1, pos2: 1}, {pos1: 2, pos2: 0}];
            }
            else{
                counter = 0;
            }
        }
    }
}

function prePlay(){
    if(lojtari1.value === '' || lojtari2.value === ''){
        state.innerHTML = 'Please write down your names!';
    }
    else{
        play();
    }
}

function play(){
    emri1 = lojtari1.value;
    emri2 = lojtari2.value;
    lojtari1.style.display = 'none';
    lojtari2.style.display = 'none';
    startButton.style.display = 'none';
    resetButton.style.display = 'inline';

    player1 = new Player();
    player1.setSign('X');
    player1.setName(emri1);
    player2 = new Player();
    player2.setSign('O');
    player2.setName(emri2);

    lojtari1.value = "";
    lojtari2.value = "";

    currentPlayer = player1;

    buildCharArray();
    Tabela = new Board(boardArray, charArray);
    state.innerHTML = 'It is ' + currentPlayer.getName() + '\'s turn to play!';
    let temp;
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            Tabela.elements[i][j].element.id = i + '' + j;
            Tabela.elements[i][j].element.onmouseover = function(){
                this.style.backgroundColor = 'rgb(53, 143, 80)';
                this.style.color = 'rgb(84, 84, 84)';
                this.innerHTML = currentPlayer.getSign();
            };
            Tabela.elements[i][j].element.onmouseout = function(){
                this.style.backgroundColor = 'rgb(45, 174, 84)';
                this.style.color = 'black'
                this.innerHTML = '';                    
            };
            Tabela.elements[i][j].element.onclick = function(){
                this.onclick = function(){};
                this.onmouseout = function(){};
                this.onmouseover = function(){};
                this.style.backgroundColor = 'rgb(53, 143, 80)';
                this.style.color = 'rgb(84, 84, 84)';
                this.innerHTML = currentPlayer.getSign();
                this.isAvaliable = false;
                Tabela.chars[parseInt(this.id.charAt(0))][parseInt(this.id.charAt(1))] = currentPlayer.getSign();
                Tabela.taken++;
                temp = Tabela.evaluate(currentPlayer, parseInt(this.id.charAt(0)), parseInt(this.id.charAt(1)));
                if(!Tabela.isFull() && !player1.isWinner() && !player2.isWinner()){
                    if(currentPlayer === player1){
                        currentPlayer = player2;
                    }
                    else{
                        currentPlayer = player1;
                    }
                    state.innerHTML = 'It is ' + currentPlayer.getName() + '\'s turn to play!';
                }
                else{
                    if(player1.isWinner()){
                        state.innerHTML = player1.getName() + ' is victorious!';
                    }
                    else if(player2.isWinner()){
                        state.innerHTML = player2.getName() + ' is victorious!';
                    }
                    else{
                        state.innerHTML = 'No one is victorious!';
                    }
                    freeze(temp);
                }
            };  
        }
    }
}

function freeze(temp){
    var valid = true;
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            valid = true;
            for(var k = 0; k < 3; k++){
                if(i == temp[k].pos1 && j == temp[k].pos2)
                    valid = false;
            }
            
            Tabela.elements[i][j].element.onmouseover = function(){};
            Tabela.elements[i][j].element.onmouseout = function(){};
            Tabela.elements[i][j].element.onclick = function(){};

            if(!valid){
                Tabela.elements[i][j].element.style.backgroundColor = '#7a072e';
                //Tabela.elements[i][j].element.style.color = '';
            }
        }
    }
}

function standardAnimation(){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            Tabela.elements[i][j].element.onmouseover = function(){};
            Tabela.elements[i][j].element.onmouseout = function(){};
            Tabela.elements[i][j].element.onclick = function(){};
            Tabela.elements[i][j].element.style.backgroundColor = 'rgb(45, 174, 84)';
            Tabela.elements[i][j].element.innerHTML = '';
        }
    }
}

function restart(){
    standardAnimation();
    resetButton.style.display = 'none';
    lojtari1.value = emri2;
    lojtari2.value = emri1;
    lojtari1.style.display = 'inline';
    lojtari2.style.display = 'inline';
    startButton.style.display = 'inline';
    state.innerHTML = '';
}
