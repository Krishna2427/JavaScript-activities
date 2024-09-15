const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const arrat3 = array1.concat(array2);
console.log(arrat3);

// concating  three or more arrays;

const number = [1,2,3,4];
const num    = [5,6,7,8];
const num2   = [9,10,11,12];
const number2 = number.concat(num,num2);
console.log(number2);

// Array.prototype.copyWithin();
const  arr = ['a','b','c','d'];
console.log(arr.copyWithin(0,3,4));

const arr2 = [1,2,3,4];
console.log(arr2.copyWithin(1,2));

// Array.prototype.every()
const isBoolean = (currentValue) => currentValue < 40;
const arr_Every = [20,40,50,80];
console.log(arr_Every.every(isBoolean));


const isLessThan40 = (currentValue) =>currentValue > 40;
const arr1 = [21,30,10];
console.log(arr1.every(isLessThan40));

const arr4 = [10,20,30,40,50];
console.log(arr4.every(isLessThan40));

// Array.prototype.filter();

const numbers = [1,2,3,4,5,6,7,8,9,10];
const even_numbers = numbers.filter(numbers => numbers % 2 ==0);
console.log(even_numbers);

// finding 4 chars string

const str = ["krishna", "kittaya","kittu","ramu"];
const chars_4 = str.filter(str => str.length < 4 || str.length < 5);
console.log(chars_4);


// Array.prototype.filter();

const arr9 = [1,2[3,[4,5],[6,7]]];
const plattern = arr9.flat(arr9);
console.log(plattern);


const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const completelyFlattened = deeplyNestedArray.flat(Infinity);
console.log(completelyFlattened);

// Array.prototype.flatMap();

 const for_each = ['a','b','c'];
 for_each.forEach(element => console.log(for_each));

 const colors = ["red","yellow","blue"];
 colors[5] = "purple";
 colors.forEach((item, index) =>{
      console.log(`${item},${index}`); const ratings = [4,5,7,3];

 });

 const ratings = [4,5,7,3];
 let sum = 0;
 const sumFunction = async(a,b)=> a + b;

 ratings.forEach(async(rating)=>{
      sum = await sumFunction(sum, rating);
 });
 console.log(sum);

 /// converting for loop to forEach

 const items = ["item1","item2","item3","item4","item5"];
 const copyItems = [];

//  for(let i = 0; i < items.length;i++){
//      copyItems.push(items[i]);
//  }
//  console.log(copyItems);

 items.forEach((item)=>{
    copyItems.push(item);
 })
 console.log(copyItems);

 const logArrayElements = (element, index)=>{
    console.log(`a[${index}]=${element}`);
 };
 [1,2,3,4].forEach(logArrayElements);




 class Counter {
    constructor(){
         this.sum = 0;
         this.count = 0;
    }
    add(array11){
        array11.forEach(function countEntry(entry){
            this.sum += entry;
            ++this.count;
        }, this);
    }
 }

 const obj = new Counter();
 obj.add([2,5,9]);
 console.log(obj.count);
 console.log(obj.sum);

 class Counter2{
    constructor(){
        this.sum = 0;
        this.count = 0;
    }
    add(array){
        array.forEach((entry,index)=>{
            this.sum += entry;
            ++this.count;
        });
    }
 }

 const obj2 = new Counter2();
       obj2.add([2,3,4,5]);
console.log(obj2.sum);
console.log(obj2.count);


