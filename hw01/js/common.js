/*
    Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
    Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/
var tc = 28;
var tf = (9 / 5) * tc + 32;

alert(tc + " - градусов по цельсию, это " + tf + " - градусов по фаренгейту");

/*
    Объявить две переменные: admin и name. Записать в name строку "Василий";
    Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»)
*/

var admin, name;
name = "Василий";
admin = name;

alert(admin);

//Чему будет равно JS-выражение 1000 + "108";

var a, b, result;
a = 1000;
b = "108";

result = a + b;

alert(result);