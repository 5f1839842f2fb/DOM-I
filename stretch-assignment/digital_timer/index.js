let time = 0;
id = 0;
let digitText = document.querySelectorAll('.digit');
const start = () => {
    //startButton.disabled = true; //wtf
    const timerFunc = () => {
        digitText.forEach(element => element.style.color = 'black')
        let timeStr = String(time);
        let msTens = document.querySelector('#msTens').textContent = timeStr.charAt(timeStr.length-2);
        let msHundreds = document.querySelector('#msHundreds').textContent = timeStr.charAt(timeStr.length-3);
        let secondOnes = document.querySelector('#secondOnes').textContent = timeStr.charAt(timeStr.length-4);
        let secondTens = document.querySelector('#secondTens').textContent = timeStr.charAt(timeStr.length-5);
        time += 10;
        if (secondTens === "1") {
            window.clearInterval(timerID)
            digitText.forEach(element => element.style.color = 'red')
        }
    }
    return timerID = window.setInterval(timerFunc, 10);
}

const reset = (id) => { // could just refresh the page I guess
    time = 0;
    window.clearInterval(id)
    digitText.forEach(element => element.style.color = 'black')
    let msTens = document.querySelector('#msTens').textContent = '-';
        let msHundreds = document.querySelector('#msHundreds').textContent = '-';
        let secondOnes = document.querySelector('#secondOnes').textContent = '-';
        let secondTens = document.querySelector('#secondTens').textContent = '-';
}

let startButton = document.querySelector('#start');
startButton.onclick = function(){
    this.style.display = 'none';
    resetButton.style.display = 'inline';
    id = start();
};

let resetButton = document.querySelector('#reset');
resetButton.onclick = function(){
    this.style.display = 'none'
    startButton.style.display = 'inline';
    reset(id)
};