let en = ["mon", "tue", "wen", "thu", "fri", "sat", "sun"];
let ua = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];
let ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let lang = prompt("Выберите язык:");
let num = prompt("Выберите день недели") - 1;
switch (lang) {
    case "en": alert(en[num]); break;
    case "ru": alert(ru[num]); break;
    case "ua": alert(ua[num]); break;
    default: alert("Введите язык правильно!");
}