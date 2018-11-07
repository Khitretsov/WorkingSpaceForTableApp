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

        let tfoot = document.createElement('tfoot');
        table.append(tfoot);

        let lengthOfData = data[Object.keys(data)[0]].length;

        let maxPage = lengthOfData % pagination == 0 ? lengthOfData / pagination : Math.trunc(lengthOfData / pagination) + 1;
        
        for (let i = 0; i < maxPage; i++) {
            let span = document.createElement('span');
            span.innerHTML = i + 1;
            span.onclick = function(e) {
                console.log(e.target.innerHTML);
                range.changePage = +e.target.innerHTML - 1;
                createTable(range);
            };
            tfoot.appendChild(span);
        }

        let range = {
            start: 0,
            end: pagination,
            set changePage(value) {
                this.start = value*pagination;
                this.end = value*pagination + pagination;
            }
        };

        createTable(range);
    };

    function createTable(range) {  // Не должна быть внешним методом. Служебная ф-ция для пагинации и сортировки
        // transformData(content);  // Эта ф-ция не должна здесь вызываться. 
        console.log(range);
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