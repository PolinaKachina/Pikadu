// console.log('Файл js подключен');  проверка, что файл подключен (см. браузер ф12 консоль)
let menuToggle = document.querySelector('#menu-toggle');//создание новой переменной, в которую кладем кнопку меню
//console.log(menuToggle);// проверка, что файл нашел кнопку menuToggle
let menu = document.querySelector('.sidebar');//создание новой переменной, в которую кладем меню

//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function(event) {
  event.preventDefault();//отменяет стандартный клик или стандартное поведение ссылки, т.е ссылка никуда теперь не ведет и ничего не случается (чтобы при клике на меню не возвращало вверх страницы)
  menu.classList.toggle('visible');//вешаем класс на меню, когда кликнули по кнопке меню
})
