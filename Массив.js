// const arrName = ["Baigan", "Marsel", "Nurhan"]
// arrName.splice(1,2,"Daniel")
// console.log(arrName)

// 1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// const arr = ['a', 'b', 'c']
// arr.splice(3,0,"1","2","3")
// console.log(arr)
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1, 2, 3]
// arr.splice(3,0,4, 5,6)
// console.log(arr)
// 3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3]
// arr.splice(3,0,4, 5, 6)
// console.log(arr)
// 4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1, 2, 3]
// arr.splice(0,0,4,5,6)
// console.log(arr)
// 5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq']
// arr.splice(1,2)
// console.log(arr)
// 6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq']
// arr.splice(0,2)
// console.log(arr)
// 7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(3,2)
// console.log(arr)
// 8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(0,3)
// console.log(arr)
// 9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// const arr = [1, 2, 3, 4, 5]
// arr.splice(1,2)
// console.log(arr)
// 10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// const arr = [1, 2, 3, 4, 5]
// arr.splice(0,1)
// arr.pop()
// console.log(arr)
// 11  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// const arr = [1, 2, 3, 4, 5]
// arr.splice(3,0, 'a', 'b', 'c')
// console.log(arr)
// 12  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// const arr = [1, 2, 3, 4, 5]
//
// arr.splice(1,0,"a","b")
// arr.splice(6,0,'c')
// arr.push("e")
// console.log(arr)


// const number = [1,2,3,4,5,6,7,8,9]
// console.log(number.map((el) => {
//     if (el % 2 === 0) {
//         return "четный"
//     }else {
//         return "Нечетный"
//     }
// }))

// const arrName = ['Baigan',"Nurhan","marsel"]
// console.log(arrName.map((el) => {
//     return el.toUpperCase()
// }))

// const arrName = ['Baigan',"Nurhan","marsel"]
// let name = arrName.filter((el) => {
//     return el.includes("i")
// })
//
// console.log(name)

   // Вам дан массив: [315, 64, 75, 43, 65, 63].Найдите сумму каждого числа.
// let number = [315, 64, 75, 43, 65, 63]
// console.log(number.map((el) => {
//     return el + el
// }))
   // Вам дан массив: ['Аскар', 'Баяман', 'Калмамат']. Создайте функцию,
// которая выводит только те имена, где есть буква к и выведите в консоль.

// const name = ['Аскар', 'Баяман', 'Калмамат']
// console.log(name.filter((el) => {
//     return el.includes("к")
// }))
// let arr = ['Аскар', 'Баяман', 'Калмамат']
//  console.log(arr.filter((el) => {
//      return el.includes("м")
//  }))
   // Вам дан массив: [4, 54, 49]. Сделайте из него массив, состоящий из квадратов этих чисел.
// let number = [4, 54, 49]
// console.log(number.map((el) => {
//     return el * el
// }))
   // Вам дан массив [3134, 4, -143, -245, -214]. Оставьте в нем только отрицательные числа.
// let number = [3134, 4, -143, -245, -214]
// console.log(number.filter((el) => {
//     return el < 0
// }))
   // Вам дан массив [3, 51, 30, 54, 60]. Оставьте в нем только четные числа.
// let number = [3, 51, 30, 54, 60]
// console.log(number.filter((el) => {
//     return el % 2 === 0
// }))
   // Вам дан массив ['Бегимай', 'Баяман', 'Калмамат', Aida].
// Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const Name = ['Бегимай', 'Баяман', 'Калмамат', "Aida"]
// console.log(Name.filter((el)=> {
//     return el.length > 5
// }))


//1. Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму этих чисел.
// const num = [5,15,315,2,13,20,9]
// let num1 = num.reduce((acc, el) => {
//     console.log(acc,el)
//     return acc + el
//
// }, 0)
// console.log(num1)
//    Вам дан массив с числами [5,12,314,2,13,20,9]. Найдите сумму всех четных чисел.
// const number = (num) => {
//   return num.reduce((acc,el) => {
//       if (el % 2 ===0) {
//           return acc + el
//       }else {
//           return acc
//       }
//   }, 0)
// }
// console.log(number([5,12,314,2,13,20,9]))

//    Вам дан массив с числами [5,15,315,2,13,20,9]. Найдите сумму чисел, которые больше 10.
// let number = [5,15,315,2,13,20,9]
// let num = number.reduce((acc,el) => {
//     if (el > 10) {
//         return acc + el
//     }else {
//         return acc
//     }
//
// }, 0)
// console.log(num)
//Вам дан массив с числами [3,13,54,15,335, 39]. Найдите разность чисел, которые больше 10.
// let number = [3,13,54,15,335, 39]
// console.log(number.reduce((acc,el) => {
//     if (el > 10) {
//         return acc - el
//     }else{
//         return acc
//     }
// }, 0))
//Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Сложите все строки и выведите длину результата.
// let arrName = ['Аскар', 'Баяман', 'Калмамат']
// console.log(arrName.join("").length)
 //   Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат']. Выведите
// все строки в верхнем регистре, используя map.
// let arrName = ['Аскар', 'Баяман', 'Калмамат']
// console.log(arrName.map((el) => {
//     return el.toUpperCase()
// }))
//7. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат', 'Ben'].
// Выведите все вторые строки в верхнем регистре.
// let arrName = ['Аскар', 'Баяман', 'Калмамат', 'Ben']
// console.log(arrName.map((acc,idx) => {
//     if (idx % 2 !== 0) {
//         return acc.toUpperCase()
//     }else {
//         return acc
//     }
// }))
 //   Вам дан массив с строками ['асКар', 'бЯяман', 'калМмамат']. Используйте заглавные буквы в каждом массиве имен.
//     Пример: (["john", "JACOB", "jinGle, Heimer", "schmidt"])), => ["John", "Jacob", "Jingle, heimer", "Schmidt"]
// let arrName = ['асКар', 'бAяман', 'калМмамат']
// console.log(arrName.map((el) => {
//     return  el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase()
// }))