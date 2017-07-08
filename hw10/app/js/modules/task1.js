/**
 * 1. ДЗ 1:
 * Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
 * Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть
 * выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie.
 * Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.
 * */

'use strict';

export default function () {
    addCookies();

    let cookiesArray = document.cookie.split('; '),
        cookiesObject = {};

    for(let i = 0; i < cookiesArray.length; i++) {
        Object.defineProperty(cookiesObject, cookiesArray[i].split('=')[0], {value: cookiesArray[i].split('=')[1], enumerable: true});
    }

    let buttons = createCookieTable(cookiesObject);

    deleteCookie(buttons);
}

function addCookies() {
    document.cookie = 'firstname=eugene';
    document.cookie = 'lastname=stepanoff';
    document.cookie = 'sex=male';
    document.cookie = 'js=true';
    console.log(document.cookie);
}

function createCookieTable(cookiesObject) {
    let table = document.createElement('table'),
        tr, td, button;

    for(let cookieName in cookiesObject) {
        if(cookiesObject.hasOwnProperty(cookieName)) {
            tr = document.createElement('tr');
            td = document.createElement('td');

            td.appendChild(document.createTextNode(cookieName));
            tr.appendChild(td);

            td = document.createElement('td');

            td.appendChild(document.createTextNode(cookiesObject[cookieName]));
            tr.appendChild(td);

            td = document.createElement('td');
            button = document.createElement('button');
            button.innerText = 'Delete';
            td.appendChild(button);
            tr.appendChild(td);

            table.appendChild(tr);
        }
    }

    table.border = 1;
    table.cellPadding = 20;

    document.body.appendChild(table);

    return document.querySelectorAll('button');
}

function deleteCookie(buttons) {
    for(let button of buttons) {
        button.addEventListener('click', function (e) {
            let targetCookieName = this.parentNode.parentNode.querySelectorAll('td')[0].innerText,
                targetCookieValue = this.parentNode.parentNode.querySelectorAll('td')[1].innerText;

            console.log('Delete: ', targetCookieName, targetCookieValue);

            if(confirm(`Are you sure want to delete cookie "${targetCookieName}"?`)) {
                document.cookie = `${targetCookieName}=${targetCookieValue}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            }
        });
    }
}