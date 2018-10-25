import './style.css';
// import './fileForImport';

function BicycleTableCreator(name) {
    let table = document.createElement('div');
    table.innerHTML = 'kjkjkjkj';
    table.classList.add(name);
    document.body.appendChild(table);

    this.state = {};

    this.inState = function(name) {

        let state = this.state;
        let property = `buf_${name}`;
        state[property] = null;

        Object.defineProperty(this.state, name, {
            get: function() {
                return state[property];
            },
            set: function(value) {
                state[property] = value;
            }
        });

    };
}

let newTable = new BicycleTableCreator('table');


newTable.inState('item');

console.log(newTable.state.item);
newTable.state.item = '';
console.log(newTable.state.item);

let input = document.createElement('input');
input.setAttribute('value', newTable.state.item);
input.oninput = function change(e) {
    console.log('__|__');
    newTable.state.item = e.data;
    let newInput = document.createElement('input');
    newInput.setAttribute('value', newTable.state.item);
    newInput.oninput = function(e) {
        change(e);
    };
    input.replaceWith(newInput);
};

document.body.appendChild(input);


let div = document.createElement('div');
div.innerHTML = newTable.state.item;
document.body.appendChild(div);


// Поведение в строках ниже оказалось для меня большёй не ожиданностью
div.innerHTML = newTable.state.item = 'jjjjhjhhhjhjh';
setTimeout(function() {
    div.innerHTML = newTable.state.item = '3232323232323';
    console.log('3232323232323');
}, 3000);

// let table = document.createElement('div');

// let obj = {
//     data: 'Data is not avalible at this momment',
//     get createTableBlank() {
//         table.innerHTML = this.data;
//         document.body.appendChild(table);
//         return null;
//     },
//     set writeInATable(value) {
//         this.data = value;
//         table.innerHTML = this.data;
//         document.body.appendChild(table);
//     }
// };

// obj.createTableBlank;

// // const asincCode = 
// setTimeout(function() {
//     obj.writeInATable = 'ko-ko-ko';
// }, 3000);