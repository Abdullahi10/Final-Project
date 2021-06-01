const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let counterElement = document.getElementById("countdown");
let startingTime = 3;
let time = startingTime;

const countDown = () => {

    let hexCode = "#";
    counterElement.innerHTML = time
    if (time === 0) {
        time = startingTime;
        for (let i = 0; i < 6; i++) {
            hexCode += hex[generateHexCode()]            
        }       
    } else{
        time--;
    }
    document.body.style.backgroundColor = hexCode;
}

setInterval(countDown, 1000); 

function generateHexCode() {
    return Math.floor(Math.random() * hex.length)
}