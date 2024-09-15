
//    var txt = '';
//    var numbers =[56,5,6,7,10];
//     numbers.forEach(element,()=>{
//            txt = txt + element;
//     })

// let fruits = ['apple', 'banana','mango'];
//     fruits.forEach(function(fruit, index){
//         console.log(index +".."+ fruit);
//     });

// var txt = "";
// var numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);
// function myFunction(value, index, array) {
// txt = txt +" "+ value;
// console.log(txt);
// }

// let txt = " ";
// let numbers = [1,2,3,4,5,6,7];
// numbers.forEach(myFunction);
// function myFunction(value){
//     txt = txt + value;
//     console.log(txt);
// }

// map() method
//     let arraay = [40,50,30,60,20];
//     let arr = arraay.map(myFunction);
//     console.log(arr);

//    let myFunction = (elements, index)=>{
//      return elements * 2
//     }
//    let arr = arraay.map(myFunction);
//    console.log(arr);

//    let numbers1 = [20,40,60,80];
//    let numbers2 = numbers1.map(myFunction1);
//    console.log(numbers2);
//    let myFunction1 =(values, index) =>{
//        return values * 2;       
//    }

// let numbers3 = [45, 20, 8, 10];
// let numbers4 = numbers3.map(myFunction02);
// console.log(numbers4);
// function myFunction02(values, index) {
//     return values - 1;
// }


// Array.filter
// let myFunction03 = (values, index, array) => {
//     return values > 18
// }
// let number5 = [10, 30, 30, 60, 20, 19];
// let numbers6 = number5.filter(myFunction03);
// console.log(numbers6)

// finding even numbers

// let myFunction05 = (values,index, array)=>{
//     return values / 2 == 0;
// }                                                 // this method not working.
// let num = [10,22,21,9,7,8];
// let evenNumbers = num.filter(myFunction05);
// console.log(evenNumbers);

// let num = [2, 5, 7.9, 11, 21]

// let myFunction05 = num.filter((number) => {
//     return number % 2 == 0;
// });
// console.log(myFunction05);

// let numbers = [1, 2, 3, 4, 5, 6];

// let evenNumbers = numbers.filter(function (number) {
//     return number % 2 === 0;
// });

// console.log(evenNumbers);
// // objects with filters;
// let users =[ {
//     name:'krishna', active:true,
// },
// {
//     name:'Bob', active:false,
// },
// {
//     name:'Venkat', active:true,
// }
// ]
// let activeUser = users.filter(user =>{
//         return user.active;
// });
// console.log(activeUser);

// reduce() method

// let myFunction6 = (total, value)=>{
//     return total + value;
// }
// let values = [1,2,3,4,5];
// let sum =values.reduce(myFunction6);
// console.log(sum); 

// multiflying by using  reduce() method

// let mult_values = [1,2,3,4,5,6,7];
// let multple_Total = mult_values.reduce(elements =>{
//      return elements * 2;
// })
// console.log(multple_Total);

// let sales = [
//     {
//         product:'laptop', amount:1500
//     },
//     {
//         product:'phones', amount:1500
//     },
//     {
//         product:'tablets', amount:1500
//     },
//     {
//         product:'laptop', amount:1500
//     },
    
// ]
// let totalPrice = sales.reduce((acc, sale)=>  {
//     return acc + sale.amount,0;
// });
// console.log(totalPrice);


// reduceRight() Method;
// --------------------

// let num = [1,2,3,4,5,6,7,8,9];

// let myFunction = (total,values, index, array)=>{
//     return total + values;
// }
// let total_Values = num.reduceRight(myFunction);
// console.log(total_Values);

// reversing by using reduceRight() method;

//let str = "krishna";

let num = [10,20,30,40];
let reverse = num.reduceRight((numbers, spits)=> numbersspits)

console.log(reverse);





