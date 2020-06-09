"use strict";

let lang = prompt('Введите "ru" или "en"');

if (lang === "ru") {
    console.log(`Понедельник,
Вторник,
Среда,
четверг, Пятница,
Суббота,
Воскресенье`);
} else if (lang === "en") {
    console.log(`Monday,
Tuesday,
Wednesday,
Thursday,
Friday,
Saturday,
Sunday`);
}

switch(lang) {
    case "ru":
        console.log(`Понедельник,
        Вторник,
        Среда,
        четверг, Пятница,
        Суббота,
        Воскресенье`);
        break;

    case "en":
        console.log(`Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday`);
        break;
    default:
        console.log("Мы на таком не говорим"); 
}

let map = new Map([
    ["ru", "Понедельник, Вторник, Среда, четверг, Пятница, Суббота, Воскресенье"],
    ["en", "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
]);

alert(map.get(lang));


let namePerson = prompt("Имя?");
namePerson === "Артем" ? console.log("директор") 
: (namePerson === "Максим" ? console.log("преподаватель")
: console.log('студент'));