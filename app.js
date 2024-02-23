const calc = document.getElementsByClassName('clear');
const res = document.getElementsByClassName('result')[0];
const numb = document.getElementsByTagName('button');
let result = '';

for (let i of numb) {
    if (i.innerHTML == 'Calculate') {
        i.addEventListener('click', function () {
            res.textContent = eval(result);
        })
    }
    else if (i.innerHTML == 'C') {
        i.addEventListener('click', function () {
            result = '';
            res.textContent = 0;
        })
    }
    else {
        i.addEventListener('click', function () {
            result += i.innerHTML;
            console.log(result);
        })
    }
};