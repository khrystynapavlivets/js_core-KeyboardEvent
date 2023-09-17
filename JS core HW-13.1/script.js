/*
Завдання 1. 

Необхідно реалізувати наступний функціонал як на відео backgrounds, а саме:

при кліку на текст колір появляється блок з кольорами
при кліку на текст зображення появляється блок з зображеннями
при кліку на самі блоки з кольорами змінюється колі фону
при кліку на самі блоки з зображеннями змінюється зображення фону
послідовність чи я задаю колір фону а потім зображення або навпаки не має значення
------------------------------------------------------------------------------------------
*/

const sel = selector => document.querySelector(selector);
const colorText = sel('.colorText');
const imageText = sel('.imageText');
const colorBlock = sel('#colorBlock');
const imageBlock = sel('#imageBlock');
const container = sel('.container');
const body = document.body.style;




colorText.addEventListener('click', function () {
    colorBlock.style.display = 'table';
    sel('table').classList.add('container');
    imageBlock.style.display = 'none';
    body.backgroundImage = 'none';
    sel('.container').addEventListener('click', function () {
        if (event.target.classList.contains('color')) {
            sel('#imageBlock').classList.remove('image');
            body.backgroundColor = event.target.style.backgroundColor;
            body.backgroundImage = 'none';
        }
    })
})

imageText.addEventListener('click', function () {
    imageBlock.style.display = 'table';
    imageBlock.classList.add('container');
    colorBlock.style.display = 'none';
    body.backgroundColor = 'none';
    sel('.container').addEventListener('click', function () {
        if (event.target.classList.contains('image')) {
            body.backgroundImage = event.target.style.backgroundImage;
            body.backgroundColor = 'none';
        }
    })
})




















// colorText.addEventListener('click', function () {
//     colorBlock.style.display = 'table';
//     sel('table').classList.add('container');
//     imageBlock.style.display = 'none';
//     sel('.container').addEventListener('click', function () {
//         if (event.target.classList.contains('color')) {
//             sel('#imageBlock').classList.remove('image');
//             body.backgroundColor = event.target.style.backgroundColor;
//             body.backgroundImage = '';
//         }
//     })
// })

// imageText.addEventListener('click', function () {
//     imageBlock.style.display = 'table';
//     imageBlock.classList.add('block');
//     colorBlock.style.display = 'none';
//     sel('.block').addEventListener('click', function () {
//         if (event.target.classList.contains('image')) {
//             body.backgroundImage = event.target.style.backgroundImage;
//             body.backgroundColor = '';
//         }
//     })
// })





