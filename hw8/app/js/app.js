import timer from './modules/task1';
import cities from './modules/task2';
import citiesSearch from './modules/task3';

/** Task 1 */
const timeout = 2000;
timer(timeout).then(() => console.log(`Resolved after ${timeout / 1000} sec`));

/** Task 2 */
// cities().then(
//     (successResponse) => document.body.appendChild(successResponse),
//     (errorResponse) => console.log(errorResponse)
// );

/** Task 3 */
const doc = document;

let input = doc.createElement('input');
input.id = 'search';
input.type = 'text';
doc.body.appendChild(input);

doc.querySelector('#search').addEventListener('keyup', () => {
    if(doc.querySelector('ul')) {
        doc.querySelector('ul').remove();
    }
    citiesSearch(input.value).then(
        (successResponse) => document.body.appendChild(successResponse),
        (errorResponse) => console.log(errorResponse)
    );
});