/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _task = __webpack_require__(1);

var _task2 = _interopRequireDefault(_task);

var _task3 = __webpack_require__(2);

var _task4 = _interopRequireDefault(_task3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _task2.default)();
(0, _task4.default)();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 1. ДЗ 1:
 * Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
 * Для каждой cookie в таблице, необходимо добавить кнопку "удалить", При нажатии на "удалить", на экран должен быть
 * выведен confirm с текстом "Удалить cookie с именем …?". Вместо … необходимо подставить имя удаляемой cookie.
 * Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.
 * */



Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    addCookies();

    var cookiesArray = document.cookie.split('; '),
        cookiesObject = {};

    for (var i = 0; i < cookiesArray.length; i++) {
        Object.defineProperty(cookiesObject, cookiesArray[i].split('=')[0], { value: cookiesArray[i].split('=')[1], enumerable: true });
    }

    var buttons = createCookieTable(cookiesObject);

    deleteCookie(buttons);
};

function addCookies() {
    document.cookie = 'firstname=eugene';
    document.cookie = 'lastname=stepanoff';
    document.cookie = 'sex=male';
    document.cookie = 'js=true';
    console.log(document.cookie);
}

function createCookieTable(cookiesObject) {
    var table = document.createElement('table'),
        tr = void 0,
        td = void 0,
        button = void 0;

    for (var cookieName in cookiesObject) {
        if (cookiesObject.hasOwnProperty(cookieName)) {
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

            addRow(table, tr);
        }
    }

    table.border = 1;
    table.cellPadding = 20;

    document.body.appendChild(table);

    return document.querySelectorAll('button');
}

function deleteCookie(buttons) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var button = _step.value;

            button.addEventListener('click', function (e) {
                var trTarget = this.parentNode.parentNode,
                    targetCookieName = trTarget.querySelectorAll('td')[0].innerText,
                    targetCookieValue = trTarget.querySelectorAll('td')[1].innerText;

                console.log('Delete: ', targetCookieName, targetCookieValue);

                if (confirm('Are you sure want to delete cookie "' + targetCookieName + '"?')) {
                    document.cookie = targetCookieName + '=' + targetCookieValue + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
                    deleteRow(trTarget);
                }
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function deleteRow(row) {
    row.remove();
}

function addRow(table, row) {
    table.appendChild(row);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    insertAddCookiesComponent();
    addCookie();
};

var _task = __webpack_require__(1);

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict'; /**
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


function insertAddCookiesComponent() {
    var doc = document,
        container = doc.createElement('div'),
        form = doc.createElement('form'),
        item = void 0,
        field = void 0,
        buttonAdd = doc.createElement('button'),
        fieldsCount = 3;

    buttonAdd.innerText = "Add cookie";
    buttonAdd.className = 'btn-add';

    for (var i = 0; i < fieldsCount; i++) {
        item = doc.createElement('div');
        field = doc.createElement('input');
        item.appendChild(field);
        container.appendChild(item);
    }

    form.appendChild(container);

    var innerDivs = container.querySelectorAll('div > div');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = innerDivs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var div = _step.value;

            div.classList.add('item');
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
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
    var doc = document,
        addBtn = document.querySelector('.btn-add');

    addBtn.addEventListener('click', function () {
        var cookieName = doc.querySelector('.name').value.trim(),
            cookieValue = doc.querySelector('.value').value.trim(),
            cookieExpires = doc.querySelector('.expires').value.trim(),
            date = new Date();

        date.setTime(date.getTime() + cookieExpires * 3600 * 1000 * 24);

        if (!cookieName || !cookieValue || !cookieExpires) {
            alert('Please fill old fields!');
            return false;
        }

        doc.cookie = cookieName + '=' + cookieValue + '; expires=' + date.toUTCString();
        console.log(cookieName + '=' + cookieValue + '; expires=' + date.toUTCString());
        doc.forms[0].reset();
        doc.querySelector('table').remove();
        doc.querySelector('form').remove();
        doc.querySelector('br').remove();
        (0, _task2.default)();
        insertAddCookiesComponent();
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map