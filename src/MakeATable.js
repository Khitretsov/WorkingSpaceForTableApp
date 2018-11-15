import transformDataFunc from './transformDataFunc';
import sortAndPaginTableCreater from './sortAndPaginTableCreater';

export default function BicycleTableCreator(name, mapping, nameOfCol, amountOfRow) {

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

    //  Cлужебная ф-ция
    let transformData = transformDataFunc(data, map);

    this.changeContent = function(content) {
        transformData(content);

        let sortAndPaginTable = sortAndPaginTableCreater(data, nameOfCol, tableHead, table, amountOfRow);
        sortAndPaginTable();

    };
}