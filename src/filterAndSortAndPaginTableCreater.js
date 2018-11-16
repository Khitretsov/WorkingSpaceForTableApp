import transformDataFunc from './transformDataFunc';
import sortAndPaginTableCreater from './sortAndPaginTableCreater';

export default function filterAndSortAndPaginTableCreater(data, map, nameOfCol, tableHead, table, amountOfRow) {
    
    let transformData = transformDataFunc(data, map);

    return function(content, filter) {
        if (!data[Object.keys(data)[0]].length && content == null) {  //  Прекращение выполнения, если фильтрация запускается при отсутствии данных
            return;
        }
        let copiedData = {};
        if (filter == undefined) {
            transformData(content);
            for (let key in data) {
                copiedData[key] = data[key].map(item => {
                    return item;
                });
            }
        } else {
            for (let key in data) {
                copiedData[key] = [];
            }
            for (let i = 0; i < data[Object.keys(data)[0]].length; i++) {   
                let isRowAppropriate = false; 
                for (let key in data) {
    
                    if (data[key][i] != null) {
                        data[key][i] = data[key][i] + '';  // Для перевода в строки чисел и логических значений
                        let regExp = new RegExp(filter, 'i');
                        if (data[key][i].search(regExp) > -1) {
                            isRowAppropriate = true;
                            break;
                        }
                    }
                }
                if (isRowAppropriate) {
                    for (let key in data) {
                        copiedData[key].push(data[key][i]);
                    }
                }
            }
        }
        let sortAndPaginTable = sortAndPaginTableCreater(copiedData, nameOfCol, tableHead, table, amountOfRow);
        sortAndPaginTable();
    };
}