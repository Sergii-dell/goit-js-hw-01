'use strict' /* использование последней  версии  js  */;

const credits = 23580;
const pricePerDroid = 3000;

const message1 = 'Досвидания !';
const message2 = 'Некоректный ввод.';
const message3 = 'Недостаточно средств на счету !';

let ordered = prompt(`"Введите количество дроидов для покупки."`); //  ввод  символов
let total =  credits - pricePerDroid * ordered;

if (ordered === null) {
  alert(message1); //  вывод  символов
} else {
  ordered = Number(ordered); //  приобразование в числ
  if (ordered <= 0) {
    alert(message2);
  } else {
    if (Number.isNaN(ordered)) {
      alert(message2);
    } else {
      if (pricePerDroid * ordered <= credits) {
        alert(`"Вы купили ${ordered} дроидов, на счету осталось ${total} кредитов."`);
      } else {
        alert(message3);
      }
    }
  }
}

