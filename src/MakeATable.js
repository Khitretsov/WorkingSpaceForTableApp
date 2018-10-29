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
        // console.log(typeof(content));
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
}