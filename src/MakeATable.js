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

        if (table.getElementsByTagName('tfoot')[0]) {
            table.removeChild(table.getElementsByTagName('tfoot')[0]);
        }

        let tfoot = document.createElement('tfoot');
        
        let lengthOfData = data[Object.keys(data)[0]].length;
        let maxPage = lengthOfData % pagination == 0 ? lengthOfData / pagination : Math.trunc(lengthOfData / pagination) + 1;
        
        for (let i = 0; i < maxPage; i++) {
            let span = document.createElement('span');
            span.innerHTML = i + 1;
            i == 0 ? span.classList.add('selected') : null;  // Хо-хо
            tfoot.appendChild(span);
        }
        
        for (let i = 0; i < 2; i++ ) {
            let span = document.createElement('span');
            if (i) {
                span.innerHTML = 'Следующая';
                span.setAttribute('name', 'next');
                maxPage == 1 ? span.classList.add('arrow_disable') : null;
                tfoot.append(span);
            } else {
                span.innerHTML = 'Предидущая';
                span.setAttribute('name', 'previous');
                span.classList.add('arrow_disable');
                tfoot.prepend(span);
            }
        }

        tfoot.onclick = function(e) {  //  Проделегируем события
            tfoot.firstChild.classList.remove('arrow_disable');
            tfoot.lastChild.classList.remove('arrow_disable');
            if (!isNaN(+e.target.innerHTML)) {
                tfoot.getElementsByClassName('selected')[0].classList.remove('selected');
                tfoot.children[+e.target.innerHTML].classList.add('selected');
                range.changePage = +e.target.innerHTML - 1;
            } else {
                tfoot.getElementsByClassName('selected')[0].classList.remove('selected');
                if (e.target == tfoot.firstChild) {
                    range.changePage = range.currentPage - 1;
                    tfoot.children[range.currentPage + 1].classList.add('selected');
                } else {
                    range.changePage = range.currentPage + 1;
                    tfoot.children[range.currentPage + 1].classList.add('selected');
                }
            }
            if (range.currentPage == 0) {
                tfoot.firstChild.classList.add('arrow_disable');
            } else if (range.currentPage == tfoot.children.length - 3) {
                tfoot.lastChild.classList.add('arrow_disable');
            } else {
                tfoot.firstChild.classList.remove('arrow_disable');
                tfoot.lastChild.classList.remove('arrow_disable');
            }
            createTable(range);
        };
        table.append(tfoot);

        let range = {
            start: 0,
            end: pagination,
            currentPage: 0,
            set changePage(value) {
                this.start = value*pagination;
                this.end = value*pagination + pagination;
                this.currentPage = value;
            }
        };

        createTable(range);
    };

}