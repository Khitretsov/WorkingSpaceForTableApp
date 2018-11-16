import filterAndSortAndPaginTableCreater from './filterAndSortAndPaginTableCreater';

export default function BicycleTableCreator(name, mapping, nameOfCol, amountOfRow) {

    let arrForCheck = ['String', 'Object', 'Map', 'Number'];
    try {
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i].__proto__.constructor.name != arrForCheck[i]) {
                throw new Error(`Аргумент под номером ${i} имеет тип ${arguments[i].__proto__.constructor.name}, когда требуется тип ${arrForCheck[i]}`);
            }
        }
        if (arguments[3] < 1 || (arguments[3] - Math.trunc(arguments[3])) != 0) {
            throw new Error('Количество отображаемых в таблице строк должно быть целым числом, большим нуля');
        }  
    } catch(e) {
        console.error(e);
    }
    
    let table = null;
    let map = null;
    let tableHead = null;
    let data = {};

    (function() { // Наверно это сингхлтооон
        table = document.createElement('table');
        table.classList.add(name);
        table.innerHTML = 'table is empty';
        document.body.appendChild(table);
        map = mapping;
        tableHead = nameOfCol;

        let arr = map[Object.keys(map)[0]];
        for (let i = 0; i < arr.length; i++ ) {
            if (typeof(arr[i]) != 'object') {
                data[arr[i]] = [];
            } else {
                let subArr = arr[i][Object.keys(arr[i])];
                for (let j = 0; j < subArr.length; j++) {
                    data[subArr[j]] = [];
                }
            }
        }
    }());

    let filterAndSortAndPaginTable = filterAndSortAndPaginTableCreater(data, map, nameOfCol, tableHead, table, amountOfRow);

    this.changeContent = function(content, filter) {
        filterAndSortAndPaginTable(content, filter);
    };
}