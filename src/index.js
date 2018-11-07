import './style.css';
import MakeAForm from './MakeAForm';
import BicycleTableCreator from './MakeATable';

function request(param) {
    let url = `https://api.hh.ru/vacancies?text=${param}`;
    fetch( url, 
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            // body: JSON.stringify(data)
        }
    ).then(function(response) {
        return response.json();
    }).then(function(myJson) {
        newTable.changeContent(myJson);
    });
}

let map = {items: [  // Структура данных (Путь к массиву с данными в приходящем ответе и массив ключей объектов-элементов массива)
    { 'snippet' : ['requirement', 'responsibility'] },
    { 'salary': ['currency', 'to', 'from', 'gross'] },
    'name',
    // 'apply_alternate_url',
]};

let nameOfCol = new Map([  // Порядок элементов имеет значение
    ['name', 'Название'],
    ['responsibility', 'Суть'],
    ['requirement', 'Требования'],
    ['from', 'От'],
    ['to', 'До'],
    ['currency', 'Валюта'],
    ['gross', 'До вычетов'],
]);

let form = new MakeAForm(request, 'Ключевое слово для поиска: ', 'Поиск произведён по слову: '); /* eslint-disable-line */
// new MakeAForm(request, 'Ключевое слово для поиска: ');

let newTable = new BicycleTableCreator('table', map, nameOfCol, 7);