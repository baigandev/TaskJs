// const user = [{
//     name: "Arsen",
//     age: 20,
//     hobby: "sport",
//     job: "Front-End Developer",
//     car: true,
//     home: true,
//     address: {
//         city: "Bishkek"
//     },
//     "Knowledge of the language": ["English", "Rus", "Kyr"]
// }]
// console.log(user.map((el) => {
//     return el.name
// }))



// 1. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите длину ключей.

// const obj = {a: 1, b: 2, c: 3}
// console.log(Object.keys(obj).length)

// 2. Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите на экран элемент с
// ключом 'c' двумя способами: через квадратные скобки и как свойство объекта.
// const obj = {a: 1, b: 2, c: 3}
// console.log(obj.c)
// console.log(obj["c"])
// 3. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}; Выведите на экран зарплату Атая и Ширин.
// const obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// delete obj.Айжан
// console.log(obj)
// console.log(Object.values(obj))
// 4. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Измените зарплату Атая на 500.
// const obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Атай = '800'
// console.log(obj)
// 5. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: '200'}.
// Добавьте к объекту ключ Медет со значением 1500.
// const obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Медет = '1500'
// console.log(obj)
// 6. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите значение ключа salary в консоль.
// const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(obj.Атай.salary)
// 7. Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала
// недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.
// const days = {
//     1: "Понедельник",
//     2: "Вторник",
//     3: "Среда",
//     4: "Четверг",
//     5: "Пятница",
//     6: "Суббота",
//     7: "Воскресенье"
// }
// console.log(days["7"])
// 8. Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3.
// Выведите день недели, соответствующий значению переменной day.

// 9. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}. Получите все ключи объекта.
// const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.keys(obj))

//     10. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
//     Получите все значения объекта.
// const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.values(obj))
// 11. Создайте объект заработных плат obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}.
// Выведите все entries объекта.
// const obj = {Ширин: '1000', Айжан:'500', Атай: {salary: '500'}}
// console.log(Object.entries(obj))

//12. Создайте функцию, передайте в нее объект {name: 'Igor'}. Выведите 1, если длина ключа name нечетная, 0 если четная.
// const func = (a) => {
//     if ((a.name).length % 2 === 0){
//         return 1
//     }else {
//         return 0
//     }
// }
//  console.log(func({name: "Ig1or",age: 123}))
// 13. Создайте функцию, передайте в нее массив с объектами [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ] .
// Выведите все id в консоль через map.
// let fun = [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]
//  const fun1 = fun.map((el) => {
//     return Object.keys(el)
// },[])
// console.log(fun1)
// const task13 = (obj) => {
//      return obj.map((el) => {
//          return el.id
//      })
//  }
//  console.log(task13([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]))

// 14. Создайте функцию, передайте в нее объект {name: 'Igor'}. Добавьте новый ключ age со значением 25.
// Поменяйте значение name на Azat.
// function func (obj) {
//     obj.age = 25
//     obj.name = 'Azat'
//     return obj
// }
//
// console.log(func({name: 'Igor'}))

// let person = [
//     {
//         id:1,
//         name: "Janatan",
//         age: 25,
//         jop: "Web Developer",
//         car: false
//     },
//     {
//         id:2,
//         name: "Azamat",
//         age: 10,
//         jop: "Web Developer",
//         hobby: "sport"
//     },
//     {
//         id:3,
//         name: "Baigan",
//         age: 35,
//         jop: "Web Developer",
//         home: true
//     },
//     {
//         id:4,
//         name: "Marsel",
//         age: 27,
//         jop: "Web Developer",
//         home: true
//     },
//     {
//         id:5,
//         name: "Nurzada",
//         age: 18,
//         jop: "Web Developer",
//         hobby: "sport"
//     },
// ]
// console.log(person.map((el) => {
//     if (el.id === 5){
//         return el.jop = "Front_end developer"
//     }
//
// }))
// console.log(person.filter((el) => {
//     return el.age > 20
// }))


//Имеется массив объектов:

//     let user = [
//         {
//             name: "John",
//             age: 30
//         },
//         {
//             name: "Bob",
//             age: 21
//         },
//         {
//             name: "Anna",
//             age: 19
//         }
//     ]
// let person = user.map((el) => {
//     if (el.name == "Bob"){
//         return user[1]
//     }
// })
// console.log(person)
// Получите из этого массива объект, где name == "Bob" и сохраните это в какой-либо переменной.

//Дано число. Выведите в консоль первую цифру этого числа.
// let number = 8231241
// let num = String(number)
// console.log(num[0])

//Дано число. Выведите в консоль последнюю цифру этого числа.
// let number = 2944384076879
// let num = String(number)
// console.log(num.slice(-1))
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// let number = 8378957204
// let str = String(number)
// let one = str[0]
// let two = str.slice(-1)
// let num = Number(result)
//
// result = one + two
// console.log(num)

//Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
// let str = "kshfkchs8nrwjasd"
// console.log(str.slice(-2,-1))
//Найдите сумму всех целых чисел от 1 до 100.
// let counter = 0
// for (let i = 1; i < 100; i++) {
//     counter += i
//     console.log(counter)
//}
//Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
// let counter = 0
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0){
//         counter += i
//     }
//     console.log(counter)
//
// }
// Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
// let counter = 0
//  for (let i = 0; i < 100; i++) {
//      if (i % 2 !== 0){
//          counter += i
//      }
//      console.log(counter)
//
//  }
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// let arr = [12, 45,3,5,6]
// let arr1 = arr.map((el) => {
//     return el * el
// })
// //Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// let counter = 0
// for (let i = 0; i < arr1.length; i++) {
//     counter += arr1[i]
//     console.log(counter)
//
// }
// console.log

