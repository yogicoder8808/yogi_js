//Create an array of numbers and write a function to find the sum of all numbers in the array.

var a=[1,2,3,4,5]
function sumOf(a)
{
    var sum=0
    for (i=0;i<a.length;i++)
    {
        sum +=a[i]   
    }
    return sum

}
    console.log(sumOf(a))
    