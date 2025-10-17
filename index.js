let Home = 12
let Away = 5

let Reset = 0

let hScoreEl= document.getElementById("hScore-el")
hScoreEl.textContent = Home

let aScoreEl= document.getElementById("aScore-el")
aScoreEl.textContent = Away


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
function aOne(){
    Away +=1
    aScoreEl.textContent=Away
}

function aTwo(){
    Away +=2
   aScoreEl.textContent= Away
}

function aThree(){
    Away +=3
    aScoreEl.textContent=Away
}

//reset
function reset(){
   Home = 0;
   Away = 0;
   hScoreEl.textContent = Home
   aScoreEl.textContent = Away
}