"use strict";var name='"Генератор защитного поля"',price=1e3;alert("'Выбран ".concat(name,", цена за штуку ").concat(price," кредитов'")),price=2e3,alert("'Выбран ".concat(name,", цена за штуку ").concat(price," кредитов'"));var total=100,message1="Досвидания",message2="Некоректный ввод.",message3="Заказ оформлен, с вами свяжетса менеджер.",message4="На складе недостаточно товаров !";null===(ordered=prompt('"Введите количество едениц в заказе."'))?alert(message1):(ordered=Number(ordered))<=0?alert(message2):Number.isNaN(ordered)?alert(message2):ordered<=total?alert(message3):alert(message4);var ADMIN_PASSWORD="jqueryismyjam",password=prompt("Введите пароль.");message=null===password?"Отменено пользователем !":password===ADMIN_PASSWORD?"Добро пожаловать !":"Доступ запрещен, неверный пароль !",alert(message);var credits=23580,pricePerDroid=3e3;message1="Досвидания !",message2="Некоректный ввод.",message3="Недостаточно средств на счету !",total=credits-pricePerDroid*(ordered=prompt('"Введите количество дроидов для покупки."'));null===ordered?alert(message1):(ordered=Number(ordered))<=0?alert(message2):Number.isNaN(ordered)?alert(message2):pricePerDroid*ordered<=credits?alert('"Вы купили '.concat(ordered," дроидов, на счету осталось ").concat(total,' кредитов."')):alert(message3);var countriesA="Китай",deliveryA=100,countriesB="Чили",deliveryB=250,countriesC="Австралия",deliveryC=170,countriesD="Индия",deliveryD=80,countriesF="Ямайка",deliveryF=120;if(null===(ordered=prompt('"Напишите страну, в которую нужно доставить товар."')))message="Досвидания";else if(0===Number(ordered))message="Вы незделали выбор !";else switch(ordered=ordered.toLowerCase()){case countriesA.toLowerCase():message='"Доставка в '.concat(countriesA," будет стоить ").concat(deliveryA,' кредитов."');break;case countriesB.toLowerCase():message='"Доставка в '.concat(countriesB," будет стоить ").concat(deliveryB,' кредитов."');break;case countriesC.toLowerCase():message='"Доставка в '.concat(countriesC," будет стоить ").concat(deliveryC,' кредитов."');break;case countriesD.toLowerCase():message='"Доставка в '.concat(countriesD," будет стоить ").concat(deliveryD,' кредитов."');break;case countriesF.toLowerCase():message='"Доставка в '.concat(countriesF," будет стоить ").concat(deliveryF,' кредитов."');break;default:message="В вашей стране доставка недоступна."}alert(message);total=0;for(var ordered,message="Введите сумму.";ordered=prompt(message),isNaN(ordered)?alert("не число"):total+=Number(ordered),null!==ordered;);alert("сумма ".concat(total));