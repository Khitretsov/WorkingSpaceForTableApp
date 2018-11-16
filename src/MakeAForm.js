
function MakeAForm(request, textBeforeInput, textUnderInput, textInButton) {
    
    let div = document.createElement('div');
    let input = document.createElement('input');

    (function() {
        let component = document.createElement('div');
        component.classList.add('form');

        let button = document.createElement('button');
        button.innerHTML = textInButton;
        button.onclick = function() {
            request((input.value));
            div.lastChild.innerHTML = input.value;
            input.value = '';
        };
        
        component.append(input, button, div);
        input.insertAdjacentText('beforeBegin', textBeforeInput);
        div.insertAdjacentHTML('afterbegin', '<span></span>');
        div.insertAdjacentText('afterbegin', textUnderInput);

        document.body.append(component);
    }());    

    this.clearFields = function(inInput, inBottom) {
        inInput ? input.value = '' : null;
        inBottom ? div.lastChild.innerHTML = '' : null; 
    };
}

export default MakeAForm;