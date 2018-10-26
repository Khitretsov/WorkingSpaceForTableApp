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
        newTable.changeContent(JSON.stringify(myJson));
        // console.log(JSON.stringify(myJson));
    });
}

let form = new MakeAForm(request);
form.createForm('Ключевое слово для поиска: '); // Создать форму для ввода параметра поиска
form.setFetch(request); // Передать ф-цию запроса к серверу

let newTable = new BicycleTableCreator('table');
newTable.createTable();