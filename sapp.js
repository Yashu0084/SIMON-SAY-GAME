//Assigning needfull variables and values ::
let gameSeq = [];
let userSeq = [];
let btns = ["red" , "yellow" , "green" , "purple"];
let started = false;
let level = 0;
let h3 = document.querySelector('h3');

//When first keypress to start the game ::
document.addEventListener("keypress" , function () {
   if(started == false) {
    console.log("Game is started") ;
    started = true;
    levelup();
   }
});

//This flash is dedicated to the first flash when game started ::
function gameFlash(btn) {
    btn.classList.add("flash");//class for white flash.Stored in sstyle.css ::
    setTimeout( function () {
        btn.classList.remove("flash");
    } , 500);
}

//This flash is dedicated to the flash when user clicked on the game started box or same flash ::
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout( function () {
        btn.classList.remove("userflash");
    } , 500);
}

//Most important function of the game ::
function levelup () {
    userSeq=[];
    level++;
    h3.innerText = `Level ${level}`;
    let ranIdx = Math.floor(Math.random () * 3);
    let ranColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};

//Checking function for the game ::
function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]){
        if (userSeq.length==gameSeq.length){
            setTimeout( levelup , 1000);
        }
    }else{
        h3.innerHTML = `Game over! Your Score is <b>${level}</b> <br> Press any key to start again`;
        reset () ;
    }
}

//Button press function ::
function btnPress() {
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
}

//Loop for the .btn class buttons.
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

//Reset function to start the game again ::
function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

