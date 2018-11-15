export default function tableCreater(data, tableHead, table) {
        
    return function(range) {
        // console.log(range.currentPage);
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
    };
}