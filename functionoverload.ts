function greet(nm:string):void;

function greet(nm:string, x:number):void;
function greet(nm:string, x:number, y:number):void;


function greet(x:any, y?:any, z?:any):void{
    console.log(x);
    console.log(y);
    console.log(z);
}


greet("ismail");
greet('atharva',45);