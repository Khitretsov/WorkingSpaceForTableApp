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
            //  Надо переделать эту ф-цию
            if (maxPage == 1) return;
            if (!e.target.hasAttribute('name')) {
                range.changePage = +e.target.innerHTML - 1;
                createTable(range);
                tfoot.getElementsByClassName('selected')[0].classList.remove('selected');
                e.target.classList.add('selected');
                if (e.target.innerHTML == 1) {
                    tfoot.firstChild.classList.contains('arrow_disable') ? null : tfoot.firstChild.classList.add('arrow_disable');
                    tfoot.lastChild.classList.remove('arrow_disable');
                } else if (e.target.innerHTML == maxPage) {
                    tfoot.lastChild.classList.contains('arrow_disable') ? null : tfoot.lastChild.classList.add('arrow_disable');
                    tfoot.firstChild.classList.remove('arrow_disable');
                } else {
                    tfoot.firstChild.classList.remove('arrow_disable');
                    tfoot.lastChild.classList.remove('arrow_disable');
                }
            } else if (e.target == tfoot.firstChild) {
                if (e.target.classList.contains('arrow_disable')) return;
                tfoot.getElementsByClassName('selected')[0].classList.remove('selected');
                tfoot.lastChild.classList.contains('arrow_disable') ? tfoot.lastChild.classList.remove('arrow_disable') : null;
                range.changePage = range.currentPage - 1;
                tfoot.children[range.currentPage + 1].classList.add('selected');
                if (range.currentPage == 0) e.target.classList.add('arrow_disable');
                createTable(range);
            } else if (e.target == tfoot.lastChild) {
                if (e.target.classList.contains('arrow_disable')) return;
                tfoot.getElementsByClassName('selected')[0].classList.remove('selected');
                tfoot.firstChild.classList.contains('arrow_disable') ? tfoot.firstChild.classList.remove('arrow_disable') : null;
                range.changePage = range.currentPage + 1;
                tfoot.children[range.currentPage + 1].classList.add('selected');
                if (range.currentPage + 1 == maxPage) e.target.classList.add('arrow_disable');
                createTable(range);
            }
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