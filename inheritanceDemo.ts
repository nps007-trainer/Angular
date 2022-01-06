/*class Student
{
    studentname:string
constructor(sn:string)
{
    this.studentname=sn;
}

display():void{
    console.log(this.studentname)
}
}

var std=new Student("Ismail");
std.display();
*/

class Animal
{
    nooflegs:number
    eat():void{
            console.log("Every annimal eats");
    }
}

class Herbivorous extends Animal
{
    foodhabits:string;
    constructor(fh:string,l:number)
    {
        super();
        this.foodhabits=fh;
        this.nooflegs=l;
    }

    display():void{
        console.log(this.foodhabits + " " + this.nooflegs)
    }
}

var animal1=new Herbivorous("eat plants",4);
animal1.display();