'use strict' /* использование последней  версии  js  */;

let total = 0;
let message = 'Введите сумму.';
let ordered;

do {
  ordered = prompt(message); //  ввод  символов
  if (isNaN(ordered)){
    alert('не число');
  } else {
   total += Number(ordered);
  }
  } while(ordered !== null);

  alert(`сумма ${total}`);
