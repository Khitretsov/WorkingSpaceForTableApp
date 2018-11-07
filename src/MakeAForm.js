
function MakeAForm(request, text_1, text_2) {
    (function() {  // Зачем я код ниже оборачивал в дополнительную ф-цию?
        let input = document.createElement('input');
        let button = document.createElement('button');
        let div = document.createElement('div');
        div.insertAdjacentHTML('afterbegin', '<span></span>');
        div.insertAdjacentText('afterbegin', text_2);

        button.innerHTML = 'Поиск';
        button.onclick = function() {
            request((input.value));
            div.lastChild.innerHTML = input.value;
        };
        document.body.append(input, button, div);
        input.insertAdjacentText('beforeBegin', text_1);
    }());    
}

export default MakeAForm;