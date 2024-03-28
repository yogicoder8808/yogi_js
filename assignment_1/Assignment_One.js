//Define and initialize variables of different data types (string, number, boolean).

var a="Hi Team" 
let b=28
const c = true 

console.log(a)
console.log("My age is :"+b)
console.log("I like JavaScript:"+" "+c)




//Write a function to check if a given number is even or odd.

function d(number)
{
    if (number%2==0)
    {
        return "Even"
    }
    else
    {
        return "odd"
    }
}
console.log (d(2))
console.log (d(7))





//Create an array of numbers and write a function to find the sum of all numbers in the array.

var e=[1,2,3,4,5]
function sumOf(e)
{
    var sum=0
    for (i=0;i<e.length;i++)
    {
        sum +=e[i]   
    }
    return sum

}
    console.log(sumOf(e))



//Implement a loop to print numbers from 1 to 10.

for(i=1;i<=10;i++)
{
    console.log(i)
}





// Write a function to concatenate two strings.

function f(string1,string2)
{
    return string1+string2
}
console.log(f("Hello ","team"))

