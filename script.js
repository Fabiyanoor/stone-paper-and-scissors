let userscore=0;
let compscore=0;
let drawscore=0;

const choices=document.querySelectorAll(".choice");
const msgpara=document.querySelector("#msg");
const userpoints=document.querySelector("#user-sc");
const comppoints=document.querySelector("#comp-sc");
const drawpoints=document.querySelector("#draw-sc");
const resetbtn=document.querySelector("#reset");
//FUNCTION TO GET COMPUTER CHOICE
//we can not generate string but we can generate numbers from 0-2 using math.random()*3
//to get rid of the other point vaues uer wirte math.floor(math.random()*3)
const compchoice=()=>{
    const  options=["stone","paper","scissors"];
    const  randidx =Math.floor(Math.random()*3);
    return options[randidx];
};
//TO RESET GAME
const resetgame =()=>{
    userscore=0;
    drawscore=0;
    compscore=0;
    drawpoints.innerText="0";
    comppoints.innerText="0";
    userpoints.innerText="0";
    msgpara.innerText="Play your move";
    msgpara.style.backgroundColor="#34435E";
    msgpara.style.color="white";
}
//TO SHOW THE WINNER
const showwinner=(userwin,userchoice,computerchoice)=>{
    if(userwin){
        userscore++;
        userpoints.innerText=userscore;
        // console.log("you win!");
        msgpara.innerText=`You won! your ${userchoice} beats ${computerchoice}`;
        msgpara.style.backgroundColor="#60E087";
        msgpara.style.color="black";
    }
    else{
        compscore++;
        comppoints.innerText=compscore;
        // console.log("you lose!");
        msgpara.innerText=`You lost! ${computerchoice} beats  your ${userchoice}`;
        msgpara.style.backgroundColor="#BB6564";
        msgpara.style.color="black";

    }
};


resetbtn.addEventListener("click",resetgame);


//TO HANDLE DRAW CONDITION
const drawgame=()=>{
    drawscore++;
    drawpoints.innerText=drawscore;
    // console.log("Game was draw.");
    msgpara.innerText="Game was draw";
    msgpara.style.backgroundColor="#34435E";
    msgpara.style.color="white";
}
const playGame=(userchoice)=>{ 
    // console.log("choice was clicked",userchoice);
    const computerchoice=compchoice();
    // console.log("computer choice=",computerchoice);
    if(userchoice===computerchoice){
        drawgame();
    }
    //to decide winner
    else{
        let userwin=true;
        if(userchoice==="stone"){
            //scissors,paper
            if(computerchoice==="paper")
            {userwin=false;}
            else
            {  userwin=true}   
        }
        if(userchoice==="paper"){
            //scissors,stone
            if(computerchoice==="scissors")
            {userwin=false;}
            else
            {  userwin=true}  
        }
        if(userchoice==="scissors"){
            //scissors,paper
            if(computerchoice==="stone")
            {userwin=false;}
            else
            {  userwin=true}  
}
        showwinner( userwin,userchoice,computerchoice);
    }
};

//TO GET THE CHOICE OF USER
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
        // console.log("choice was clicked",userchoice);
    });
});
