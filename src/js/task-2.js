'use strict' /* использование последней  версии  js  */;

const total = 100;
const message1 = 'Досвидания'; // проверка  на  отказ
const message2 = 'Некоректный ввод.';
const message3 = 'Заказ оформлен, с вами свяжетса менеджер.';
const message4 = 'На складе недостаточно товаров !';

let ordered = prompt(`"Введите количество едениц в заказе."`); //  ввод  символов
if (ordered === null) {
  alert(message1); // проверка  на  отказ
} else {
  ordered = Number(ordered); //  приобразование в числ
  if (ordered <= 0) {
    alert(message2);
  } else {
    if (Number.isNaN(ordered)) {
      alert(message2);
    } else {
      if (ordered <= total) {
        alert(message3);
      } else {
        alert(message4);
      }
    }
  }
}

