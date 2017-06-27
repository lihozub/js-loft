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

var _task5 = __webpack_require__(3);

var _task6 = _interopRequireDefault(_task5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Task 1 */
var timeout = 2000;
(0, _task2.default)(timeout).then(function () {
    return console.log('Resolved after ' + timeout / 1000 + ' sec');
});

/** Task 2 */
// cities().then(
//     (successResponse) => document.body.appendChild(successResponse),
//     (errorResponse) => console.log(errorResponse)
// );

/** Task 3 */
var doc = document;

var input = doc.createElement('input');
input.id = 'search';
input.type = 'text';
doc.body.appendChild(input);

doc.querySelector('#search').addEventListener('keyup', function () {
    if (doc.querySelector('ul')) {
        doc.querySelector('ul').remove();
    }
    (0, _task6.default)(input.value).then(function (successResponse) {
        return document.body.appendChild(successResponse);
    }, function (errorResponse) {
        return console.log(errorResponse);
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * ##ДЗ 1: Создать модуль, который экспортирует функцию timer. Функция timer должна возвращать новый промис.
 * Функция timer принимает 1 аргумент - количество миллисекунд, через которые промис должен перейти в состояние
 * fulfilled. Пример использования: timer(3000).then(() => console.log('я вывелась через 3 секунды'))
 * */



Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (timeout) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            return resolve();
        }, timeout);
    });
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * ##ДЗ 2: Загрузить города при помощи AJAX из https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * (сервер поддерживает AJAX CORS) Отсортировать города по алфавиту и вывести на странице. Использование промисов
 * обязательно. Запрещено использование любых библиотек (включая jQuery) и фреймворков.
 * */



Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {

    var xhr = new XMLHttpRequest(),
        url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

    return new Promise(function (resolve, reject) {
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                resolve(citiesCreateHTMLList(citiesSort(xhr.response)));
            } else {
                reject(xhr.statusText);
            }
        });
        xhr.addEventListener('error', function () {
            reject(xhr.statusText);
        });
        xhr.send();
    });
};

function citiesSort(objCities) {
    var citiesArray = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = objCities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var city = _step.value;

            citiesArray.push(city.name);
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

    return citiesArray.sort();
}

function citiesCreateHTMLList(cities) {
    var doc = document;

    var ul = doc.createElement('ul'),
        li = void 0;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = cities[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var city = _step2.value;

            li = doc.createElement('li');
            li.innerText = city;
            ul.appendChild(li);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return ul;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * ##ДЗ 3 (со звездочкой): Создать страничку с текстовым полем. После загрузки странички, загрузить список городов при
 * помощи AJAX. При вводе текста в тестовое поле, выводить под текстовым полем список тех городов, в названиях которых
 * есть введенный текст. Использование промисов обязательно. Запрещено использование любых библиотек (включая jQuery) и
 * фреймворков.
 * */



Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (searchString) {

    var xhr = new XMLHttpRequest(),
        url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

    return new Promise(function (resolve, reject) {
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', function () {
            if (xhr.status === 200) {
                resolve(citiesCreateHTMLList(citiesSort(xhr.response), searchString));
            } else {
                reject(xhr.statusText);
            }
        });
        xhr.addEventListener('error', function () {
            reject(xhr.statusText);
        });
        xhr.send();
    });
};

function citiesSort(objCities) {
    var citiesArray = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = objCities[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var city = _step.value;

            citiesArray.push(city.name);
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

    return citiesArray.sort();
}

function citiesCreateHTMLList(cities, searchString) {
    var doc = document;

    var isValid = true,
        re = void 0;

    try {
        new RegExp(searchString, 'i');
    } catch (e) {
        isValid = false;
    }

    if (isValid) {
        re = new RegExp(searchString, 'i');
    }

    var ul = doc.createElement('ul'),
        li = void 0;

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = cities[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var city = _step2.value;

            if (city.match(re) && isValid) {
                li = doc.createElement('li');
                li.innerText = city;
                ul.appendChild(li);
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return ul;
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map