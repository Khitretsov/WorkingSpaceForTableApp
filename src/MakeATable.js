export default function BicycleTableCreator(name) {

    let table = null;
    let map = null;
    let tableHead = null;
    let data = {};

    this.createTable = function(mapping, nameOfCol) {
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
    };

    function transformData(content) {
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
        
        for (let i = 0; i < data[Object.keys(data)[0]].length; i++) {
            let row = document.createElement('tr');
            for (let key of tableHead.keys()) {
                let item = document.createElement('th');
                item.innerText = data[key][i];
                row.appendChild(item);
            }
            tbody.appendChild(row);
        }

        table.appendChild(tbody);
    };
}