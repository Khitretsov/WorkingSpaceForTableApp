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

    this.changeContent = function(content, filter) {
        if (!data[Object.keys(data)[0]].length && content == null) {  //  Прекращение выполнения, если фильтрация запускается при отсутствии данных
            return;
        }
        let copiedData = {};
        if (filter == undefined) {
            console.log('___ if ___', filter);
            transformData(content);
            for (let key in data) {
                copiedData[key] = data[key].map(item => {
                    return item;
                });
            }
        } else {
            for (let key in data) {
                copiedData[key] = [];
            }
            for (let i = 0; i < data[Object.keys(data)[0]].length; i++) {
                
                
                let isRowAppropriate = false; 
                for (let key in data) {
                    if (data[key][i] != null) {
                        if (data[key][i].indexOf(filter) > -1) isRowAppropriate = true;
                        break;
                    }
                    console.log(isRowAppropriate);
                }

                if (isRowAppropriate) {
                    for (let key in data) {
                        console.log(i);
                        copiedData[key].push(data[key][i]);
                    }
                }
            }
        }

        let sortAndPaginTable = sortAndPaginTableCreater(copiedData, nameOfCol, tableHead, table, amountOfRow);
        sortAndPaginTable();

    };
}