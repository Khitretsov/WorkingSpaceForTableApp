import './style.css';
import './fileForImport';

let element = document.createElement('div');
element.innerHTML = 'Открой консоль, там сообщение';
document.body.appendChild(element);

let obj = {
    a: 'asd',
    b: 'sdf',
    c: 'dfg'
};

let g = [1, 2, 3, 4, 5, 6, 7, 8];

let { a, b, c } = obj;

console.log( g);
console.log( a, b, c);

function frfr() {    
    
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
        // console.log(arguments[i]);
    }

    console.log('__________', sum);
}

frfr( ...g);

class wewe {
    constructor( firstV, secondV) {
        this.firstV = firstV;
        this.secondV = secondV;
    }

    method() {
        return this.firstV * this.secondV;
    }
}

const blabla = new wewe(10,10);
console.log(blabla.method());