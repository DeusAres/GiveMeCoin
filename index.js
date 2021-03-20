let counter = document.querySelector('.counter-display');
let increment = document.querySelector('.counter-plus');
let coin = document.querySelector('.coin')
let audio = new Audio('coin.ogg')
let count = 0

increment.addEventListener("click",()=>{
    count++;
    counter.innerHTML = count;
    audio.play();
    coin.className = 'coin-jump';
    setTimeout(() => coin.className = 'coin', 400);
});

