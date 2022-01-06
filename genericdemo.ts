class GenericDemo<T>
{
    add<T> (num1:T, num2):T
    {
        return num1+num2;
    }
}

let objN=new GenericDemo();
let sum=objN.add<number>(10,20);
console.log(sum);

let sumS=objN.add<string>("Nandini", " S");
console.log(sumS);


