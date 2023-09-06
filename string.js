// 1. Вам дана переменная str, присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной в консоль.
// let str = 'Привет, Мир!'
// console.log(str)
// 2. Вам даны переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения
// строк выведите в консоль фразу 'Привет, Мир!'.

// let  str1='Привет,'
// let str2='Мир!'
// console.log(str1 + str2)

// 3. Вам дана переменная name, присвойте ей ваше имя. Выведите в консоль фразу 'Привет, *Имя*!'.
// let name = ' Baigan!'
// console.log("Привет," + name)

// 4. Вам дана переменная age , присвойте ей ваш возраст. Выведите в консоль 'Мне *Возраст* лет!'.
// let age = 19
// console.log(`Мне  ${age} лет!`)

// 5. Вам даны четыре переменные.
//     Первая - для хранения количества дней. Присвойте ей значение "365".
//     Вторая - для хранения названия нашей планеты "Земля".
//     Третья - для хранения примерного количества жителей нашей планеты. Присвойте ей значение "7 млрд.".
//     Четвертая - для хранения слова "Солнце".
//     Далее, используя текст и переменные, нужно вывести в консоль такой абзац:
//     "В нашем году 365 дней. Днём у нас светит Солнце. Население планеты Земля составляет примерно 7 млрд. человек."
// let days = "365"
// let world = "Земля"
// let people = "7 млрд."
// let sunny = "Солнце"
//
// console.log(`В нашем году ${days} дней. Днём у нас светит ${sunny}.
// Население планеты ${world} составляет примерно ${people} человек.`)









//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

//     let str = 'Каждый охотник желает знать';
// function stringToarray(str) {
//   return str.trim().split(" ")
//
//
// };
//
// let arr = stringToarray(str);
//
// console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']



//Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// let str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {
//     if ((str.constructor === String) && (str.length > 0)) {
//         return str.slice(0,length)
//     }
//
// };
//
// console.log(delete_characters(str, 7)); // Каждый



//Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет
// тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// let str = "HTML JavaScript PHP";
//
// function insert_dash(str) {
//  return str.split(" ").join("-").toUpperCase()
// }
//
// console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'



//Напишите функцию, которая принимает строку в качестве аргумента и преобразует
// регистр первого символа строки из нижнего регистра в верхний.

// let str = "string not starting with capital";
//
// function cursive_letter(str) {
//
//     return str[0].toUpperCase() + str.slice(1);
//
// // Ваш код
//
// }
//
// console.log(cursive_letter(str)); // "String not starting with capital"



// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// let str = "каждый охотник желает знать";
//
// function capitalize (str) {
//     const arr = str.split(' ');
//     const newArr = [];
//     arr.forEach((item) => {
//         const word = item[0].toUpperCase() + item.slice(1);
//         newArr.push(word);
//     })
//     const newString = newArr.join(' ');
//     return newString;
// }
//
// console.log(capitalize(str))// "Каждый Охотник Желает Знать"






// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

function remove_char(str) {
    const str1 = str.length.remove
return str
};

console.log(remove_char(str)); // "every hunter wishes to know"



