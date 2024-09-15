   // class expression
    //   <!-- let Person = class{
    //    constructor(name){
    //        this.name = name;
    //    }
    //    get fullname(){
    //        return `${this.name}`;
    //    }
    //}
    //let std = new Person('krishna');
   // console.log(std); -->

    // static methods();
    class Vehicle{
        constructor(name, color, modal, prise){
            this.name = name;
            this.color= color;
            this.modal= modal;
            this.prise= prise;
        }
        get vehicleDetails(){
            return `${this.color} ${this.modal} ${this.prise}`
        }
        static brand(bandName){
            this.name ='volvo';
            return `This is a vehicle brand is ${this.name}`;
        }
    }
    const volvo = new Vehicle("volvo","red","2022", 1700000);
    console.log(Vehicle.brand("Mahindra"));
    console.log(volvo.vehicleDetails);
    console
