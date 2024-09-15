// let map = new Map();
// map.set('name',"krishna");
// map.set('age', 25);
// console.log(map.get('name'));
// console.log(map.has('city'));
// console.log(map.has('country'));

// console.log(map.delete('age'));

// let set = new Set();
//     console.log(set.size());

// let map = new Map();
// console.log(map);
//    map.set('name','krishna');
//    map.set('corse','UI');
//    console.log(map);
//    console.log(map.get('corse'));
//    map.set('fee', 20000);
//    console.log(map);
//    console.log(map.has('fee'));
//    console.log(map.size);
//    console.log(map.delete('name'));
//    console.log(map);
//    console.log(map.set('first Name','Krishna'));
//    console.log(map.entries());
//    map.clear();
//    console.log(map);

//    for(let m of map){
//      if(m ==='feee'){
//         map.delete('fee');
//      }
//    }

 //  console.log()

//    let set = new Set();
//    set.add('name','krishna');
//    set.add('fee','20000');
//    console.log(set);
   
//    for(let s of set){
//          if(s ==='fee'){
//             set.delete('fee');
//          }
//          console.log(s);
//    }


// let map = new Map();

//     map.set('name','John');
//     map.set('age', 30);
//     map.set(true,'Boolean Key');
//     map.set({city:'New York'}, 'Objects as Key');

//     console.log(map);



// let emp1 = {name:'krishna'}, emp2 ={name:'Venkat'}, emp3 = {name:'sai'};

// let emp4 = {name: 'Loki'};

// let userRoles = new Map();
// console.log(typeof(userRoles));

// userRoles.set(emp1,'Developr').set(emp2,'Developer').set(emp3,'Admin').set(emp4,'Accounting');
// console.log(userRoles);

// for(let user of userRoles){
//     for(let urs of user){
//         console.log(urs);
//     }
// }



// console.log('we need to use key as a values');
// let userRoles2 = new Map();
// userRoles2.set('krishna','Developer').set('Designer').set('sai','Accounting');
// for(let u of userRoles){
//     for(let z of u){
//         console.log(z);
//     }
// }
 

// console.log();
// console.log("---------------WeakMap Operations------------");

// let privateData = new WeakMap();

// class User {
//     constructor(name, age){
//         privateData.set(this, {age});
//         console.log(privateData)
//         this.name = name;

//     }
//     getAge(){
//         return privateData.get(this).age;
//     }
// }
// let user1 = new User('John',30);
// console.log(user1.name);
// console.log(user1.getAge());

// console.log(privateData.get(user1));

// let cache = new WeakMap();

// let calculateSize =(element) =>{
//       if(!cache.has(element)){
//         let size = {width:element.offsetWidth, height: element.offsetHeight };
//         cache.set(element, size);
//         console.log('calculating  size for', element);
//       }
//       return cache.get(element);
// }

// let div = document.createElement('div');
// div.style.width = '200px';
// div.style.height = '100px';

// document.body.appendChild(div);
// console.log(calculateSize(div))
// console.log(calculateSize(div));

// document.body.remove(div);


console.log("---------------WeakMap is Not Iterable_Proving and their Operations ------------");

let wn = new WeakMap();
let obj1 = {};
let obj2 = {};
wn.set(obj1,'privateData1');
wn.set(obj2,'privateData2');

// for(let [key, value] of wn){
//     console.log(key, value);// error:WeakMap Objects are Not Iterable
// }


console.log("---------------WeakMap is Not Accessed Primitive Types key as values ------------");
let error  = new WeakMap();
   error.set(1,'value1');



   



