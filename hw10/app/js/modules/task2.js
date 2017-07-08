/**
 * ##ДЗ 2: Загрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * (сервер поддерживает AJAX CORS) Отсортировать города по алфавиту и вывести на странице. Использование промисов
 * обязательно. Запрещено использование любых библиотек (включая jQuery) и фреймворков.
 * */

'use strict';

export default function () {

    const   xhr = new XMLHttpRequest(),
            url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

    return new Promise((resolve, reject) => {
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if(xhr.status === 200) {
                resolve(citiesCreateHTMLList(citiesSort(xhr.response)));
            } else {
                reject(xhr.statusText);
            }
        });
        xhr.addEventListener('error', () => {
            reject(xhr.statusText);
        });
        xhr.send();
    })
}

function citiesSort(objCities) {
    let citiesArray = [];
    for(let city of objCities) {
        citiesArray.push(city.name);
    }

    return citiesArray.sort();
}

function citiesCreateHTMLList(cities) {
    const   doc = document;

    let     ul = doc.createElement('ul'),
            li;

    for(let city of cities) {
        li = doc.createElement('li');
        li.innerText = city;
        ul.appendChild(li);
    }

    return ul;
}