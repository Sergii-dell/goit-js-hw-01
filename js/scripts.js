"use strict";var name='"Генератор защитного поля"',price=1e3,input=prompt("'Выбран ".concat(name,", цена за штуку ").concat(price," кредитов'"));input=Number(input),alert("'Выбран ".concat(name,", цена за штуку ").concat(input+price," кредитов'"));var total=100;message=null===(ordered=prompt('"Введите количество едениц в заказе."'))?"Досвидания":(ordered=Number(ordered))<=0?"Некоректный ввод.":Number.isNaN(ordered)?"Некоректный ввод.":ordered<=total?"Заказ оформлен, с вами свяжетса менеджер.":"На складе недостаточно товаров !",alert(message);var ADMIN_PASSWORD="jqueryismyjam",password=prompt("Введите пароль.");message=null===password?"Отменено пользователем !":password===ADMIN_PASSWORD?"Добро пожаловать !":"Доступ запрещен, неверный пароль !",alert(message);var credits=23580,pricePerDroid=3e3;message=null===(ordered=prompt('"Введите количество дроидов для покупки."'))?"Досвидания !":(ordered=Number(ordered))<=0?"Некоректный ввод.":Number.isNaN(ordered)?"Некоректный ввод.":pricePerDroid*ordered<=credits?'"Вы купили '.concat(ordered," дроидов, на счету осталось ").concat(credits-pricePerDroid*ordered,' кредитов."'):"Недостаточно средств на счету !",alert(message);var message,ordered,countriesA="Китай",deliveryA=100,countriesB="Чили",deliveryB=250,countriesC="Австралия",deliveryC=170,countriesD="Индия",deliveryD=80,countriesF="Ямайка",deliveryF=120;if(null===(ordered=prompt('"Напишите страну, в которую нужно доставить товар."')))message="Досвидания";else if(0===Number(ordered))message="Вы незделали выбор !";else switch(ordered=ordered.toLowerCase()){case countriesA.toLowerCase():message='"Доставка в '.concat(countriesA," будет стоить ").concat(deliveryA,' кредитов."');break;case countriesB.toLowerCase():message='"Доставка в '.concat(countriesB," будет стоить ").concat(deliveryB,' кредитов."');break;case countriesC.toLowerCase():message='"Доставка в '.concat(countriesC," будет стоить ").concat(deliveryC,' кредитов."');break;case countriesD.toLowerCase():message='"Доставка в '.concat(countriesD," будет стоить ").concat(deliveryD,' кредитов."');break;case countriesF.toLowerCase():message='"Доставка в '.concat(countriesF," будет стоить ").concat(deliveryF,' кредитов."');break;default:message="В вашей стране доставка недоступна."}alert(message);