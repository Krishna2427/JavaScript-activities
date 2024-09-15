// class DateFormatter extends Date {
//     getDateFormattedDate(){
//      const months = [
//             'jan',
//             'feb',
//             'mar',
//             'apri',
//             'may',
//             'june',
//             'july',
//             'aug',
//             'sep',
//             'oct',
//             'nov',
//             'dec'
//         ];
//         return  `${this.getDate()}-${this.getMonth()}-${this.getFullYear()}`;
//     }
// }
// console.log(new DateFormatter(`august 31,2024 23:15:30`).getDateFormattedDate());

// function OldStlyClass(){
//     this.property = 1;
// }
// OldStlyClass.prototype.someMethod = function(){};

// class ChildClass extends OldStlyClass{}

// class MOdernClass {
//     someProperty = 1;
//     someMethod(){}
// }

// class SomeClass extends class{
//     constructor(){
//         console.log('base Class');
//     }
//     constructor(){
//         super();
//         console.log('derived class');
//     }
// }


//  new SomeClass();

// class ParentClass {
//     constructor(){
//         return 1;
//     }
// }

// console.log(new ParentClass);

// class ChildClass extends ParentClass{
//     constructor(){
//         super();
//         return 1;
//     }
// }
// console.log(new ChildClass);
 class Animal {
        speak() {
            console.log(`${this.name} makes a noise`);
        }
 };

 class Dog{
     constructor(name){
        this.name = name;

     }
 }

 Object.getPrototypeOf(Dog.prototype, Animal);

 const d = new Dog("puppy");

 d.speak();