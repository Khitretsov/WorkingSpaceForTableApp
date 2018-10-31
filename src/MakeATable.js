export default function BicycleTableCreator(name) {
    let table = null;

    // this.state = {};
    // this.inState = function(name) {
    //     let state = this.state;
    //     let property = `buf_${name}`;
    //     state[property] = null;
    //     Object.defineProperty(this.state, name, {
    //         get: function() {
    //             return state[property];
    //         },
    //         set: function(value) {
    //             state[property] = value;
    //         }
    //     });
    // };

    let map = null;

    this.createTable = function(listOfColumns) {
        table = document.createElement('table');
        table.classList.add(name);
        table.innerHTML = 'table is empty';
        document.body.appendChild(table);
        map = listOfColumns;
    };

    this.changeContent = function(content) {
        // table.innerHTML = this.state.item = content;
        let pathToData = null;
        for (let key in map) {
            pathToData = key;
        }
        let topRow = document.createElement('tr');
        for (let i = 0; i < map[pathToData].length; i++) {
            let nameOfColumn = document.createElement('th');
            nameOfColumn.innerText = map[pathToData][i];
            nameOfColumn.classList.add('tableHead');
            topRow.appendChild(nameOfColumn);
        }

        table.childNodes[0].replaceWith(topRow);

        for (let i = 0; i < content[pathToData].length; i++) {
            console.log(content[pathToData][i]);   
            let row = document.createElement('tr');
            for (let j = 0; j < map[pathToData].length; j++) {
                let item = document.createElement('th');
                item.innerText = content[pathToData][i][map[pathToData][j]];
                row.appendChild(item);
            }
            table.appendChild(row);
        }
    };

    this.changeContent_2 = function(content) {
        let topRow = document.createElement('tr');
        function fillATable(map, content) {
            let pathToData = null;
            for (let key in map) {
                pathToData = key;
            }
            for (let i = 0; i < map[pathToData].length; i++) {
                if (typeof(map[pathToData][i]) === 'object' ) {  // Возможно нужна проверка на null
                    // Это рекурсия. Она действует только для заполения шапки таблицы. 
                    // (По другому не вышло, по причине структуры данных. 
                    // Надо убрать эту рекурсию)
                    fillATable(map[pathToData][i], content[pathToData][i]);
                    console.log(map[pathToData][i], content[pathToData][i]);
                } else {
                    let nameOfColumn = document.createElement('th');
                    nameOfColumn.innerText = map[pathToData][i];
                    nameOfColumn.classList.add('tableHead');
                    topRow.appendChild(nameOfColumn);
                }
            }

            table.childNodes[0].replaceWith(topRow);

            if (content[pathToData] === null || content[pathToData].length === undefined) {
                return;
            } else {   
                for (let i = 0; i < content[pathToData].length; i++) {
                    let row = document.createElement('tr');
                    for (let j = 0; j < map[pathToData].length; j++) {
                        if (typeof(map[pathToData][j]) === 'object') {  // Вытаскивание данных их вложенных объектов
                            for (let key in map[pathToData][j]) {
                                map[pathToData][j][key].forEach((itemOfArr) => {
                                    let item = document.createElement('th');
                                    if (content[pathToData][i][key] !== null) {
                                        item.innerText = content[pathToData][i][key][itemOfArr] == null ? '  ---  ' : content[pathToData][i][key][itemOfArr];
                                    } else {
                                        item.innerText = '  ---  ';
                                    }
                                    row.appendChild(item);
                                });
                            }
                        } else {
                            let item = document.createElement('th');
                            item.innerText = content[pathToData][i][map[pathToData][j]];
                            row.appendChild(item);
                        }                     
                    }
                    table.appendChild(row);
                }
            }  
        // }(map);  // Линтер не даёт выпендриваться
        }
        fillATable(map, content);
    };
}