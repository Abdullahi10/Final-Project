const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let counterElement = document.getElementById("countdown");
let timer = 1;
let time = timer * 60;

const countDown = () => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let hexCode = "#";

    // seconds = seconds < 10 ? '0' + seconds : seconds;
    if (seconds < 10) {
        seconds = '0' + seconds;
    } else{
        seconds = seconds;
    }   
    counterElement.innerHTML = `${minutes}:${seconds}`
    if (time === 0) {
        time = timer * 60;

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