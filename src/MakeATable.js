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

    this.createTable = function() {
        table = document.createElement('div');
        table.classList.add(name);
        table.innerHTML = 'table is empty';
        document.body.appendChild(table);
    };

    this.changeContent = function(content) {
        // table.innerHTML = this.state.item = content;
        table.innerHTML = content;
    };

}