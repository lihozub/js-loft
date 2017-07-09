/**
 * ДЗ 2:
 К страничке из предыдущего задания необходимо добавить форму с текстовыми полями и кнопкой "добавить".
 Список текстовых полей:
 - имя
 - значение
 - срок годности (количество дней)

 После нажатия на кнопку "добавить" должна быть создана (и добавлена в таблицу) новая cookie с указанными параметрами.
 Обратите внимание, что в поле "срок годности" указывается количество дней (начиная с текущего), на протяжении которых
 будет доступна cookie.

 После добавление cookie, значения текстовых полей формы должны быть очищены.
 Если какое-то из полей формы не заполнено, то, при нажатии на кнопку "добавить", cookie не должна быть создана, а на
 экран должен быть выведен alert с предупреждением "Заполните все поля формы".
 Так же заметьте, что при работе с формой и таблицей, не должно быть перезагрузок страницы
 * */
import cookieGenerator from './task1';

'use strict';

export default function () {
    insertAddCookiesComponent();
    addCookie();
}

function insertAddCookiesComponent() {
    let doc = document,
        container = doc.createElement('div'),
        form = doc.createElement('form'),
        item, field,
        buttonAdd = doc.createElement('button'),
        fieldsCount = 3;

    buttonAdd.innerText = "Add cookie";
    buttonAdd.className = 'btn-add';

    for(let i = 0; i < fieldsCount; i++) {
        item = doc.createElement('div');
        field = doc.createElement('input');
        item.appendChild(field);
        container.appendChild(item);
    }

    form.appendChild(container);

    let innerDivs = container.querySelectorAll('div > div');

    for(let div of innerDivs) {
        div.classList.add('item');
    }

    container.querySelector('.item:nth-of-type(1) input').className = 'name';
    container.querySelector('.item:nth-of-type(2) input').className = 'value';
    container.querySelector('.item:nth-of-type(3) input').className = 'expires';

    container.querySelector('.name').type = 'text';
    container.querySelector('.value').type = 'text';
    container.querySelector('.expires').type = 'number';
    buttonAdd.type = 'button';

    container.appendChild(buttonAdd);
    doc.body.appendChild(doc.createElement('br'));
    doc.body.appendChild(form);
}

function addCookie() {
    let doc = document,
        addBtn = document.querySelector('.btn-add');

    addBtn.addEventListener('click', function () {
        let cookieName = doc.querySelector('.name').value.trim(),
            cookieValue = doc.querySelector('.value').value.trim(),
            cookieExpires = doc.querySelector('.expires').value.trim(),
            date = new Date();

        date.setTime(date.getTime() + (cookieExpires * 3600 * 1000 * 24));

        if(!cookieName || !cookieValue || !cookieExpires) {
            alert('Please fill old fields!');
            return false;
        }

        doc.cookie = `${cookieName}=${cookieValue}; expires=${date.toUTCString()}`;
        console.log(`${cookieName}=${cookieValue}; expires=${date.toUTCString()}`);
        doc.forms[0].reset();
        doc.querySelector('table').remove();
        doc.querySelector('form').remove();
        doc.querySelector('br').remove();
        cookieGenerator();
        insertAddCookiesComponent();
    })
}