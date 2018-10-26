
function MakeAForm() {
    let funcForFetch = null;
    this.createForm = function(text) {
        let input = document.createElement('input');
        let button = document.createElement('button');
        button.innerHTML = 'Поиск';
        let onClick = this.getData;
        button.onclick = function() {
            onClick(input.value);
        };
        document.body.append(input, button);
        input.insertAdjacentText('beforeBegin', text);
    };

    this.setFetch = function(request) {
        funcForFetch = request; 
    };
    this.getData = function(param) {
        funcForFetch(param);
    };

    
}

export default MakeAForm;


// let input = document.createElement('input');
// input.setAttribute('value', newTable.state.item);
// input.oninput = function change(e) {
//     console.log('__|__');
//     newTable.state.item = e.data;
//     let newInput = document.createElement('input');
//     newInput.setAttribute('value', newTable.state.item);
//     newInput.oninput = function(e) {
//         change(e);
//     };
//     input.replaceWith(newInput);
// };

// document.body.appendChild(input);