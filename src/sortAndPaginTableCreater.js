import paginTableCreater from './paginTableCreater';

export default function sortAndPaginTableCreater(data, nameOfCol, tableHead, table, amountOfRow) {
    
    let copiedData = {};
    for (let key in data) {
        copiedData[key] = data[key].map(item => {
            return item;
        });
    }

    let paginTable = paginTableCreater(copiedData, tableHead, table, amountOfRow);

    return function() {

        let orderOfSortAndCol = {
            order: 0,
            colName: ''
        }; 

        paginTable();

        table.onclick = function sorting(e) {
            if (e.target.parentElement.parentElement.nodeName != 'THEAD') {
                selectedColl();
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
                    selectedColl();
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

            function selectedColl() {  //  Ф-ция для подсветки выбранных для сортировки столбцов
                Array.prototype.forEach.call(document.getElementsByClassName('table')[0].tHead.firstChild.children, (item) => {
                    if (item.innerHTML == orderOfSortAndCol.colName) {
                        switch(orderOfSortAndCol.order) {
                        case 0:
                            item.classList.remove('selected');
                            break;
                        case -1:
                            item.classList.remove('selected');
                            item.classList.add('selected_2');
                            break;
                        default:
                            item.classList.add('selected');
                        }                        
                    }
                });
            }
            selectedColl();
        };
    };
}