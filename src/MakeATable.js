import transformDataFunc from './transformDataFunc';
import paginTableFunc from './paginTableCreater';

export default function BicycleTableCreator(name, mapping, nameOfCol, amountOfRow) {

    let table = null;
    let map = null;
    let tableHead = null;
    let data = {};
    let copiedData = {};

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
    let transformData = transformDataFunc(data, copiedData, map);

    //  Ф-ция отрисовки таблицы с пагинацией и сортировкой
    this.changeContent = function(content) {
        transformData(content);
        let orderOfSortAndCol = {
            order: 0,
            colName: ''
        }; 

        let paginTable = paginTableFunc(copiedData, tableHead, table, amountOfRow);
        paginTable();

        table.onclick = function sorting(e) {
            // console.dir(e.target);
            if (e.target.parentElement.parentElement.nodeName != 'THEAD') {
                return;
            } else {
                if (orderOfSortAndCol.colName != e.target.innerHTML) {
                    orderOfSortAndCol.order = 0;
                    orderOfSortAndCol.colName = e.target.innerHTML;
                }
            }
            let sortForColumn;  // Определение нажатого столбца
            for (let value of nameOfCol) {
                if (e.target.innerHTML == value[1]) {
                    sortForColumn = value[0];
                }
            }

            function sort(copiedData, count) {  // Ф-ция сортировки объекта данных
                switch (orderOfSortAndCol.order) {
                case 0:
                    orderOfSortAndCol.order = 1;
                    break;
                case 1:
                    orderOfSortAndCol.order = -1;
                    break;
                case -1:
                    orderOfSortAndCol.order = 0;
                    for (let key in copiedData) {
                        copiedData[key] = data[key].map(item => {
                            return item;
                        });
                    }
                    paginTable();
                    return;
                }

                function recursion(copiedData, count) {
                    if (count == undefined) count = 0;
                    
                    let arr = copiedData[sortForColumn];
                    let indexOfMaxElem = 0;

                    for (let i = 1; i < arr.length - count; i++) {
                        if (!isNaN(+arr[i])) {
                            +arr[i];
                            +arr[indexOfMaxElem];
                        }
                        switch (orderOfSortAndCol.order) {
                        case 1:
                            if (arr[i] > arr[indexOfMaxElem]) {  // > по возрастанию
                                indexOfMaxElem = i;
                            }
                            break;
                        case -1:
                            if (arr[i] < arr[indexOfMaxElem]) {  // < по убыванию
                                indexOfMaxElem = i;
                            }
                            break;
                        }
                    }

                    let buf = arr[arr.length - 1 - count];
                    arr[arr.length - 1 - count] = arr[indexOfMaxElem];
                    arr[indexOfMaxElem] = buf;

                    for (let key of nameOfCol.keys()) {
                        if (key == sortForColumn) continue;
                        let buf = copiedData[key][arr.length - 1 - count];
                        copiedData[key][arr.length - 1 - count] = copiedData[key][indexOfMaxElem];
                        copiedData[key][indexOfMaxElem] = buf;
                    }
                    if (count < arr.length - 1) {
                        count++;
                        recursion(copiedData, count);
                    }
                }
                recursion(copiedData, count);   
            }
            sort(copiedData);
            paginTable();
        };

    };

}