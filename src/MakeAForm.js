
function MakeAForm(request, textBeforeInput, textUnderInput, textInButton) {
    (function() {  // Зачем я код ниже оборачивал в дополнительную ф-цию?
        let component = document.createElement('div');
        component.classList.add('form');

        let input = document.createElement('input');

        let button = document.createElement('button');
        button.innerHTML = textInButton;
        button.onclick = function() {
            request((input.value));
            div.lastChild.innerHTML = input.value;
        };
        
        let div = document.createElement('div');

        component.append(input, button, div);
        input.insertAdjacentText('beforeBegin', textBeforeInput);
        div.insertAdjacentHTML('afterbegin', '<span></span>');
        div.insertAdjacentText('afterbegin', textUnderInput);

        document.body.append(component);
    }());    
}

export default MakeAForm;