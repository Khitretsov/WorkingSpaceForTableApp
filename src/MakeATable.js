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

    function transformData(content) {  // Вызываться должна только при получении ответа с сервера
        if (data[Object.keys(data)[0]].length != 0) {
            for (let key in data) {
                data[key] = [];
            }
        }
        let arrOfData = content[Object.keys(content)[0]];
        arrOfData.forEach((item) => {
            map[Object.keys(map)[0]].forEach((item2) => {
                if (typeof(item2) != 'object') {
                    data[item2].push(item.hasOwnProperty(item2) ? item[item2] : '---');
                } else {
                    let nameOfComplexProp = Object.keys(item2)[0];
                    item2[Object.keys(item2)[0]].forEach((item2) => {
                        data[item2].push(item[nameOfComplexProp] == null ? null : item[nameOfComplexProp].hasOwnProperty(item2) ? item[nameOfComplexProp][item2] : null);
                    });
                } 
            });            
        });
    }

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

    function createTable(range) {  
        
        console.log(range.currentPage);
        let thead = document.createElement('thead');
        let colums = document.createElement('tr');
        for (let prop of tableHead.values()) {
            let nameOfColumn = document.createElement('th');
            nameOfColumn.innerText = prop;
            colums.appendChild(nameOfColumn);
        }
        thead.appendChild(colums);
        table.childNodes[0].replaceWith(thead);

        let tbody = document.createElement('tbody');
        
        // for (let i = 0; i < data[Object.keys(data)[0]].length; i++) {
        for (let i = range.start; i < range.end; i++) {
            let row = document.createElement('tr');
            for (let key of tableHead.keys()) {
                let item = document.createElement('th');
                item.innerText = data[key][i] == undefined ? null : data[key][i];
                row.appendChild(item);
            }
            tbody.appendChild(row);
        }
        if (table.tBodies.length != 0) {
            table.tBodies[0].replaceWith(tbody);
        } else {
            table.appendChild(tbody);
        }
    }
}