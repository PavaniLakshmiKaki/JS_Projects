var randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.getElementsByClassName('img1')[0].setAttribute('src', 'images/dice' + (randomNumber1) + '.png');

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.getElementsByClassName('img2')[0].setAttribute('src', 'images/dice' + (randomNumber2) + '.png');

var tit = document.getElementsByTagName('h1')[0];

if (randomNumber1 > randomNumber2) {
    tit.innerHTML = 'Player 1 wins';
}
else if (randomNumber2 > randomNumber1) {
    tit.innerHTML = 'Player 2 wins';
}
else {
    tit.innerHTML = 'Draw Match';
}