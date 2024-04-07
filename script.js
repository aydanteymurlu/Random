let input = document.querySelector('.guess');
let choose = document.querySelector('.choose');
let result = document.querySelector('.result');

let arr = ['cat', 'frog', 'elephant', 'tiger', 'bear', 'snake'];
let random = Math.floor(Math.random() * arr.length);
console.log(arr[random]);

choose.addEventListener('click',function(){
    let newInput = input.value.toLowerCase();
    
    if (arr[random] === newInput) {
        result.innerText = 'Duz tapdiniz';
    }
    else{
        result.innerText = 'Cavab sehvdir';
    }

    input.value = '';
})