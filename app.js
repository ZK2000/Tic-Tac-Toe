// player 1= X
// player 2= O

let turn= 1;

const selectBox = (id) => {
    let container = document.getElementById(id);
    // console.log(container);
    if (turn === 1 && container.innerText !== "O" && container.innerText !== "X"){
        container.innerText= "X";
    }
    else if(turn === 2 && container.innerText !== "O" && container.innerText !== "X"){
        container.innerText= "O";
    }

if(turn === 1){
    turn= 2;
}
else{
    turn= 1;
}

let text= document.getElementById("Text");

let b1= document.getElementById("1");
let b2= document.getElementById("2");
let b3= document.getElementById("3");
let b4= document.getElementById("4");
let b5= document.getElementById("5");
let b6= document.getElementById("6");
let b7= document.getElementById("7");
let b8= document.getElementById("8");
let b9= document.getElementById("9");


if (b1.innerText && b1.innerText === b2.innerText && b2.innerText === b3.innerText){
    text.innerText= `Player ${b1.innerText} Wins!`;
}

else if(b4.innerText && b4.innerText === b5.innerText && b5.innerText === b6.innerText){
    text.innerText= `Player ${b4.innerText} Wins!`;
}

else if(b7.innerText && b7.innerText === b8.innerText && b8.innerText === b9.innerText){
    text.innerText= `Player ${b7.innerText} Wins!`;
}

else if(b1.innerText && b1.innerText === b5.innerText && b5.innerText === b9.innerText){
    text.innerText= `Player ${b1.innerText} Wins!`;
}

else if(b3.innerText && b3.innerText === b5.innerText && b5.innerText === b7.innerText){
    text.innerText= `Player ${b7.innerText} Wins!`;
}

else if(b1.innerText && b1.innerText === b4.innerText && b4.innerText === b7.innerText){
    text.innerText= `Player ${b1.innerText} Wins!`;
}

else if(b2.innerText && b2.innerText === b5.innerText && b5.innerText === b8.innerText){
    text.innerText= `Player ${b2.innerText} Wins!`;
}

else if(b3.innerText && b3.innerText === b6.innerText && b6.innerText === b9.innerText){
    text.innerText= `Player ${b3.innerText} Wins!`;
}

else{
    text.innerText= `Game Draw`;
}





}



