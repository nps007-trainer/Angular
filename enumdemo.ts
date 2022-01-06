enum Days
{
    Sun=0,
    Mon,Tues,Fri
}
class EnumTest
{
    display()
    {
            var x:number=Days.Mon;
            var y:number=Days.Fri;
            console.log("Monday "+ x + "Friday "+y);
    }
}

let obj=new EnumTest();
obj.display();