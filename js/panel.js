var nav = document.createElement("nav");
var a1 = document.createElement("a"), a2 = document.createElement("a"), a3 = document.createElement("a"), a4 = document.createElement("a"), a5 = document.createElement("a");
a1.innerHTML = 'Главная';
a2.innerHTML = 'История';
a3.innerHTML = 'Каталог';
a4.innerHTML = 'Контакты';
a5.innerHTML = 'Корзина';
a1.href = 'index.html';
a2.href = 'history.html';
a3.href = 'Catalog.html';
a4.href = 'Contacts.html';
a5.href = 'chop.html';
nav.appendChild(a1);
nav.appendChild(a2);
nav.appendChild(a3);
nav.appendChild(a4);
nav.appendChild(a5);
document.body.appendChild(nav);