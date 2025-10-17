let Home = 12
let Guest = 5

let Reset = 0

let hScoreEl= document.getElementById("hScore-el")
hScoreEl.textContent = Home

let gScoreEl= document.getElementById("gScore-el")
gScoreEl.textContent = Guest


//For Home score
function hOne(){
    Home +=1
    hScoreEl.textContent=Home
}

function hTwo(){
    Home +=2
    hScoreEl.textContent=Home
}

function hThree(){
    Home +=3
    hScoreEl.textContent=Home
}

//For guest score
function gOne(){
    Guest+=1
    gScoreEl.textContent=Guest
}

function gTwo(){
    Guest+=2
   gScoreEl.textContent= Guest
}

function gThree(){
    Guest +=3
    gScoreEl.textContent=Guest
}

//reset
function reset(){
   Home = 0;
   Guest = 0;
   hScoreEl.textContent = Home
   gScoreEl.textContent = Guest
}