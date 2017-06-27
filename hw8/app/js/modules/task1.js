/**
 * ##ДЗ 1: Создать модуль, который экспортирует функцию timer. Функция timer должна возвращать новый промис.
 * Функция timer принимает 1 аргумент - количество миллисекунд, через которые промис должен перейти в состояние
 * fulfilled. Пример использования: timer(3000).then(() => console.log('я вывелась через 3 секунды'))
 * */

'use strict';

export default function (timeout) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), timeout);
    })
}