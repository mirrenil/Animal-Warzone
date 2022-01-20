
window.onload = main;

function main(){
    addEventListeners();
}

function addEventListeners(){
    const Checkboxpig = document.getElementById("checkboxPig");
    Checkboxpig.onclick = choosePig;

    const Checkboxturtle = document.getElementById("checkboxTurtle");
    Checkboxturtle.onclick = chooseTurtle;

    const Checkboxmonkey = document.getElementById("checkboxMonkey");
    Checkboxmonkey.onclick = chooseMonkey;

    const Checkboxrabbit = document.getElementById("checkboxRabbit");
    Checkboxrabbit.onclick = chooseRabbit;
}

    let imgPig = document.getElementById("imgPig")
    let imgTurtle = document.getElementById("imgTurtle");
    let imgMonkey = document.getElementById("imgMonkey");
    let imgRabbit = document.getElementById("imgRabbit");
    let startGameButton = document.getElementById("start-game-button");
    let buttonTextOpacity = document.getElementById("buttonText");


function choosePig(){
        imgPig.style.opacity="1";
        imgTurtle.style.opacity="0.5";
        imgRabbit.style.opacity="0.5"
        imgMonkey.style.opacity="0.5";
        startGameButton.style.opacity="1";
        startGameButton.style.cursor="pointer";
        buttonTextOpacity.style.opacity="1";
}

function chooseTurtle(){
        imgPig.style.opacity="0.5";
        imgTurtle.style.opacity="1";
        imgRabbit.style.opacity="0.5"
        imgMonkey.style.opacity="0.5";
        startGameButton.style.opacity="1";
        startGameButton.style.cursor="pointer";
        buttonTextOpacity.style.opacity="1";
}

function chooseMonkey(){
        imgPig.style.opacity="0.5";
        imgTurtle.style.opacity="0.5";
        imgRabbit.style.opacity="0.5"
        imgMonkey.style.opacity="1";
        startGameButton.style.opacity="1";
        startGameButton.style.cursor="pointer";
        buttonTextOpacity.style.opacity="1";
}

function chooseRabbit(){
        imgPig.style.opacity="0.5";
        imgTurtle.style.opacity="0.5";
        imgRabbit.style.opacity="1"
        imgMonkey.style.opacity="0.5";
        startGameButton.style.opacity="1";
        startGameButton.style.cursor="pointer";
        buttonTextOpacity.style.opacity="1";
}