/*
Завдання 2.

Необхідно реалізувати наступний функціонал як на відео keyboard, а саме:

потрібно створити вигляд клавіатури за допомогою html та css
за допомогою js та події клавіатури(keyboard event) необхідно добавляти текст
 який ми вводимо
 а також підсвічути клавіші які натискаємо
мова клавіатури тільки одна – англійська
клавіша tab – має робити табуляцію
клавіша caps lock – має робити текст в верхньому регістрі
клавіша enter – має переносити текст на новий рядок
клавіша backspace – має видаляти текст по одній букві
клавіші shift – мають робити текст у верхньому регістрі при утриманні даної клавіші
------------------------------------------------------------------------------------------
*/
window.addEventListener('keydown', function (event) {
        const keyCode = event.keyCode;
        const keyElement = document.querySelector(`.key[data-keyCode="${keyCode}"]`);

        if (keyElement) {
                keyElement.style.backgroundColor = 'dimgrey';
                keyElement.style.color = '#fff';
        }
});

window.addEventListener('keyup', function (event) {
        const keyCode = event.keyCode;
        const keyElement = document.querySelector(`.key[data-keyCode="${keyCode}"]`);

        if (keyElement) {
                keyElement.style.backgroundColor = 'white';
                keyElement.style.color = '#000';
        }
});

window.addEventListener('keydown', function (event) {
        console.log('Key Code:', event.keyCode);
});






