import tableFunc from './tableFunc';
import transformDataFunc from './transformDataFunc';

export default function BicycleTableCreator(name, mapping, nameOfCol, pagination) {

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

    //  Две служебные ф-ции
    let createTable = tableFunc(data, tableHead, table);
    let transformData = transformDataFunc(data, map);

    //  Ф-ция отрисовки таблицы с пагинацией
    this.changeContent = function(content) {
        transformData(content);

        if (table.getElementsByTagName('caption')[0]) {
            table.removeChild(table.getElementsByTagName('caption')[0]);
        }

        let caption = document.createElement('caption');
        
        let lengthOfData = data[Object.keys(data)[0]].length;
        let maxPage = lengthOfData % pagination == 0 ? lengthOfData / pagination : Math.trunc(lengthOfData / pagination) + 1;
        
        for (let i = 0; i < maxPage; i++) {
            let span = document.createElement('span');
            span.innerHTML = i + 1;
            i == 0 ? span.classList.add('selected') : null;  // Хо-хо
            caption.appendChild(span);
        }
        
        for (let i = 0; i < 2; i++ ) {
            let span = document.createElement('span');
            if (i) {
                span.innerHTML = 'Следующая';
                span.setAttribute('name', 'next');
                maxPage == 1 || maxPage == 0 ? span.classList.add('arrow_disable') : null;
                caption.append(span);
            } else {
                span.innerHTML = 'Предидущая';
                span.setAttribute('name', 'previous');
                span.classList.add('arrow_disable');
                caption.prepend(span);
            }
        }

        caption.onclick = function(e) {  //  Проделегируем события
            if (caption.getElementsByClassName('selected').length == 0 || caption.children.length == 3) return;
            if (!isNaN(+e.target.innerHTML)) {
                caption.firstChild.classList.remove('arrow_disable');
                caption.lastChild.classList.remove('arrow_disable');
                caption.getElementsByClassName('selected')[0].classList.remove('selected');
                caption.children[+e.target.innerHTML].classList.add('selected');
                range.changePage = +e.target.innerHTML - 1;
            } else {
                if (e.target == caption.firstChild) {
                    if (range.currentPage == 0) return;
                    range.changePage = range.currentPage - 1;
                    caption.getElementsByClassName('selected')[0].classList.remove('selected');
                    caption.children[range.currentPage + 1].classList.add('selected');
                } else {
                    if (caption.getElementsByClassName('selected')[0].innerHTML == caption.children.length - 2) return;
                    range.changePage = range.currentPage + 1;
                    caption.getElementsByClassName('selected')[0].classList.remove('selected');
                    caption.children[range.currentPage + 1].classList.add('selected');
                }
            }
            if (range.currentPage == 0) {
                caption.firstChild.classList.add('arrow_disable');
            } else if (range.currentPage == caption.children.length - 3) {
                caption.lastChild.classList.add('arrow_disable');
            } else {
                caption.firstChild.classList.remove('arrow_disable');
                caption.lastChild.classList.remove('arrow_disable');
            }
            createTable(range);
        };

        table.append(caption);
       
        let range = {
            start: 0,
            end: pagination,
            currentPage: 0,
            set changePage(value) {
                // value = value < 0 ? 0 : value;
                this.start = value*pagination;
                this.end = value*pagination + pagination;
                this.currentPage = value;
            }
        };

        createTable(range);

        // console.log(table, table.tHead);
        table.tHead.onclick = function(e) {
            let sortForColumn;
            for (let value of nameOfCol) {
                if (e.target.innerHTML == value[1]) {
                    sortForColumn = value[0];
                }
            }

            function sort(data, count) {
                if (count == undefined) count = 0;
                let arr = data[sortForColumn];

                let indexOfMaxElem = 0;
                for (let i = 1; i < arr.length - count; i++) {
                    if (!isNaN(+arr[i])) {
                        +arr[i];
                        +arr[indexOfMaxElem];
                    }
                    if (arr[i] > arr[indexOfMaxElem]) {
                        indexOfMaxElem = i;
                    }
                }

                let buf = arr[arr.length - 1 - count];
                arr[arr.length - 1 - count] = arr[indexOfMaxElem];
                arr[indexOfMaxElem] = buf;

                for (let key of nameOfCol.keys()) {
                    if (key == sortForColumn) continue;
                    let buf = data[key][arr.length - 1 - count];
                    data[key][arr.length - 1 - count] = data[key][indexOfMaxElem];
                    data[key][indexOfMaxElem] = buf;
                }

                if (count < arr.length - 1) {
                    count++;
                    sort(data, count);
                } else {
                    console.log(data);
                }
            }
            console.log(data);
            
            sort(data);
        };

    };

}