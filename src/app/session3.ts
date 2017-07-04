
//defining the parent class, its member and member functions
export class animal {

    name:string;
    

    constructor(name:string){

        this.name=name;
    }

    move(distance:number){

        console.log(`${this.name} moved ${distance} KM per hour`)

    }

    makesound(sound:string){

        console.log(`${this.name} makes ${sound} sound`)

    }
}

//defining the first child class and its member and member fucntions
export class dog extends animal {

    constructor(name:string) {
        super(name);
    }

    move(distance:number){

        console.log("moving fast")
        super.move(distance);
    
    }

    makesound(sound:string) {

        super.makesound(sound);
    }
}

//defining the second child class and its member and member fucntions
export class cat extends animal {

    constructor(name:string) {
        super(name);
    }

    move(distance:number){

        console.log("moving fast and agile")
        super.move(distance);
    
    }

    makesound(sound:string) {

        super.makesound(sound);
    }
}