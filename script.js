
// constants
const startscreen = document.getElementById("startscreen");
const game = document.getElementById("game");
let chances = document.getElementById("chances").innerHTML;
const gameOverScreen = document.getElementById("gameOverScreen");
const play1 = document.getElementById("play1");
const play2 = document.getElementById("play2");
const throwBtn = document.getElementById("btn");
const g_over_text = document.getElementById("g_over_text");

const NumGen = Math.round(1+(6-1)*Math.random());
document.querySelectorAll("p")[2].innerHTML = "Draw This : " +"<b>"+NumGen+"</b>";

// start game
function Hide1(){
    // unhide game
    game.classList.remove("hide")
    // hide start screen
    startscreen.classList.add("hide");
}

function DiceGen(){
    const FirstDiceNumGen = Math.round(1+(6-1)*Math.random());
    const SecondDiceNumGen = Math.round(1+(6-1)*Math.random());

    let FirstImgLinkGen = `dice_imgs/dice${FirstDiceNumGen}.png`;
    let SecondImgLinkGen = `dice_imgs/dice${SecondDiceNumGen}.png`;
    
    document.querySelectorAll("img")[0].setAttribute("src",FirstImgLinkGen);
    document.querySelectorAll("img")[1].setAttribute("src",SecondImgLinkGen);

    // document.querySelectorAll('.images_img').setAttributes=({
    //     style:{
    //         "transform": "rotate(150deg)",
    //         "transition": "all 0.5s"
    //     }
    // });

    let chancesArr1 = chances.split(""); //chancesArr[18] = 5
    chancesArr1[18]--;
    chancesArr1 = chancesArr1.join("");
    chances = chancesArr1;
    // console.log(chances)
    document.getElementById("chances").innerHTML = chances;

    let chancesArr2 = chances.split("");
    console.log(chancesArr2[18])
    if (chancesArr2[18]==0) {
        // Chances over
        gameOver();

    }

    if (NumGen==FirstDiceNumGen && NumGen!=SecondDiceNumGen) {
        console.log("Player1 Won");
        play1.innerHTML = "You Won";
        setTimeout(() => {   
            throwBtn.style.display = "none"; 
        }, 1000);
        g_over_text.innerHTML = "Player1 Won";

        setTimeout(() => {
            gameOver();
            throwBtn.style.display = ""; 
        }, 5000);
    }
    else if(NumGen==SecondDiceNumGen && NumGen!=FirstDiceNumGen){
        console.log("Player2 Won");
        play2.innerHTML = "You Won";
        setTimeout(() => {   
            throwBtn.style.display = "none"; 
        }, 1000);
        g_over_text.innerHTML = "Player2 Won";

        setTimeout(() => {
            gameOver();
            throwBtn.style.display = ""; 
        }, 5000);
    }
    else if(NumGen == FirstDiceNumGen && NumGen == SecondDiceNumGen){
        console.log("Draw");
        setTimeout(() => {   
            throwBtn.style.display = "none"; 
        }, 1000);
        play1.innerHTML = "Draw";
        play2.innerHTML = "Draw";
        throwBtn.style.display = "none"; 
        g_over_text.innerHTML = "Drwa";

        setTimeout(() => {
            gameOver();
            throwBtn.style.display = ""; 
        }, 5000);
    }
}

// gameOver Screen On
function gameOver(){
    // unhide game over screen
    gameOverScreen.classList.remove('hide');
    // hide game
    game.classList.add('hide');
}

// Exit button is clicked
function refreshPage(){
    window.location.reload();
}

// when Try again button clicked
// document.getElementById("btn1").addEventListener('click',function(){
//     // unhide game
//     game.classList.remove("hide")
//     // hide start screen
//     startscreen.classList.add("hide");
//     // hide game over screen
//     gameOverScreen.classList.add("hide");
// });

// when try Exit button clicked
document.getElementById("btn2").addEventListener('click',function(){
    // unhide start screen
    startscreen.classList.remove("hide");
    // hide game
    game.classList.add("hide")
    // hide game over screen
    gameOverScreen.classList.add("hide");
});

