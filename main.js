let age = Number(prompt("Введите свой возраст:"));

if (age > 0 && age <= 18) {
    alert("Вы еще молоды, Вам нужно учиться");
} else if (age > 18 && age <= 50) {
    alert("Вам нужно работать");
} else if (age > 50 && age <= 59) {
    alert("Вам скоро на пенсию");
} else if (age > 59 && age <= 100) {
    alert("Вы пенсионер");
} else {
    alert("Что-то пошло не так");
}

//Задача 2
time = Number(prompt("Введите время в часах:"));
let number;

switch (true) {
    case (time >= 0 && time <= 6):
        number = time + " часов ночи";
        break;
    case (time >= 7 && time <= 10):
        number = time + " часов утра";
        break;
    case (time === 12):
        number = "12 часов дня";
        break;
    case (time >= 11 && time <= 17):
        number = (time - 12) + " часов дня";
        break;
    case (time >= 18 && time <= 23):
        number = (time - 12) + " часов вечера";
        break;
    default:
        alert("Некорректное время.");
}

alert(number);

//Задача 3

let X = Number(prompt('Введите первое число'));
let Y = Number(prompt('Введите второе число'));
let Z = Number(prompt('Введите третье число'));

let line;

if ((X > Y && X < Z) || (X < Y && X > Z)) {
    line = X;
} else if ((Y > X && Y < Z) || (Y < X && Y > Z)) {
    line = Y;
} else {
    line = Z;
}

console.log("Среднее число: " + line);





