const body = document.querySelector("body");

const IMG_NUMBER = 5; 

/*function   handleImgLoad() {
    console.log("finished loading"); 
} if images are from API */

function paintImage(imgNumber) {
    const image = new Image(); 
    image.src = `./img/${imgNumber + 1}.jpg`; 
    image.classList.add("bgImage"); 
    body.appendChild(image); 
    //image.addEventListener("loadend", handleImgLoad); if images are from API 
}

// Math.floor()  Math.ceil() 
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER); 
    return number; 
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);  
}

init(); 