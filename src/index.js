import './style.css';
// import './fileForImport';

let table = document.createElement('div');

let obj = {
    data: 'Data is not avalible at this momment',
    get createTableBlank() {
        table.innerHTML = this.data;
        document.body.appendChild(table);
        return null;
    },
    set writeInATable(value) {
        this.data = value;
        table.innerHTML = this.data;
        document.body.appendChild(table);
    }
};

obj.createTableBlank;

// const asincCode = 
setTimeout(function() {
    obj.writeInATable = 'ko-ko-ko';
}, 3000);