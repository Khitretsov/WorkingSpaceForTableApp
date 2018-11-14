import tableFunc from './tableCreater';

export default function paginTableFunc(copiedData, tableHead, table, amountOfRow) {  // Переименовать copiedData в data 
    let createTable = tableFunc(copiedData, tableHead, table);

    return function() {
        if (table.getElementsByTagName('caption')[0]) {
            table.removeChild(table.getElementsByTagName('caption')[0]);
        }
    
        let caption = document.createElement('caption');
        
        let lengthOfData = copiedData[Object.keys(copiedData)[0]].length;
        let maxPage = lengthOfData % amountOfRow == 0 ? lengthOfData / amountOfRow : Math.trunc(lengthOfData / amountOfRow) + 1;
        
        for (let i = 0; i < maxPage; i++) {
            let span = document.createElement('span');
            span.innerHTML = i + 1;
            i == 0 ? span.classList.add('selected') : null;  // Хо-хо
            caption.appendChild(span);
        }
        
        for (let i = 0; i < 2; i++ ) {
            let span = document.createElement('span');
            if (i) {
                span.innerHTML = 'Следующая';
                span.setAttribute('name', 'next');
                maxPage == 1 || maxPage == 0 ? span.classList.add('arrow_disable') : null;
                caption.append(span);
            } else {
                span.innerHTML = 'Предидущая';
                span.setAttribute('name', 'previous');
                span.classList.add('arrow_disable');
                caption.prepend(span);
            }
        }
    
        caption.onclick = function(e) {  //  Проделегируем события
            if (caption.getElementsByClassName('selected').length == 0 || caption.children.length == 3) return;
            if (!isNaN(+e.target.innerHTML)) {
                caption.firstChild.classList.remove('arrow_disable');
                caption.lastChild.classList.remove('arrow_disable');
                caption.getElementsByClassName('selected')[0].classList.remove('selected');
                caption.children[+e.target.innerHTML].classList.add('selected');
                range.changePage = +e.target.innerHTML - 1;
            } else {
                if (e.target == caption.firstChild) {
                    if (range.currentPage == 0) return;
                    range.changePage = range.currentPage - 1;
                    caption.getElementsByClassName('selected')[0].classList.remove('selected');
                    caption.children[range.currentPage + 1].classList.add('selected');
                } else {
                    if (caption.getElementsByClassName('selected')[0].innerHTML == caption.children.length - 2) return;
                    range.changePage = range.currentPage + 1;
                    caption.getElementsByClassName('selected')[0].classList.remove('selected');
                    caption.children[range.currentPage + 1].classList.add('selected');
                }
            }
            if (range.currentPage == 0) {
                caption.firstChild.classList.add('arrow_disable');
            } else if (range.currentPage == caption.children.length - 3) {
                caption.lastChild.classList.add('arrow_disable');
            } else {
                caption.firstChild.classList.remove('arrow_disable');
                caption.lastChild.classList.remove('arrow_disable');
            }
            createTable(range);
        };
    
        table.append(caption);
       
        let range = {
            start: 0,
            end: amountOfRow,
            currentPage: 0,
            set changePage(value) {
                // value = value < 0 ? 0 : value;
                this.start = value*amountOfRow;
                this.end = value*amountOfRow + amountOfRow;
                this.currentPage = value;
            }
        };

        createTable(range);
    };
}