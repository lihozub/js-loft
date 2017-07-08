/**
 * ##ДЗ 3 (со звездочкой): Создать страничку с текстовым полем. После загрузки странички, загрузить список городов при
 * помощи AJAX. При вводе текста в тестовое поле, выводить под текстовым полем список тех городов, в названиях которых
 * есть введенный текст. Использование промисов обязательно. Запрещено использование любых библиотек (включая jQuery) и
 * фреймворков.
 * */

'use strict';

export default function (searchString) {

    const   xhr = new XMLHttpRequest(),
        url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

    return new Promise((resolve, reject) => {
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if(xhr.status === 200) {
                resolve(citiesCreateHTMLList(citiesSort(xhr.response), searchString));
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

function citiesCreateHTMLList(cities, searchString) {
    const   doc = document;

    let isValid = true,
        re;

    try {
        new RegExp(searchString, 'i');
    } catch(e) {
        isValid = false;
    }

    if(isValid) {
        re = new RegExp(searchString, 'i');
    }

    let ul = doc.createElement('ul'),
        li;

    for(let city of cities) {
        if(city.match(re) && isValid) {
            li = doc.createElement('li');
            li.innerText = city;
            ul.appendChild(li);
        }
    }

    return ul;
}