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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _task2.default)();

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

            table.appendChild(tr);
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
                var targetCookieName = this.parentNode.parentNode.querySelectorAll('td')[0].innerText,
                    targetCookieValue = this.parentNode.parentNode.querySelectorAll('td')[1].innerText;

                console.log('Delete: ', targetCookieName, targetCookieValue);

                if (confirm('Are you sure want to delete cookie "' + targetCookieName + '"?')) {
                    document.cookie = targetCookieName + '=' + targetCookieValue + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map