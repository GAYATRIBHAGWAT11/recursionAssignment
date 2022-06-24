
// let number=121;
// let rem;
// let sum=0
// let pallindrome=number;
// while(number>0){
//      rem=Math.floor(number%10)
//     sum=sum*10+rem;
//     number=Math.floor(number/10);
   
// }
// if(pallindrome==sum){
//     console.log("number is pallindrome")
// }else{
//     console.log("number is not pallindrom")
// }

function rev(n, temp)
{
     
    let temp = rev(n, temp);
     
    if (temp == n)
        document.write("yes" + "<br>");
    else
        document.write("no" + "<br>");
    // base case
    if (n == 0)
        return temp;
 
    // stores the reverse of a number
    temp = (temp * 10) + (n % 10);
 
    return rev(Math.floor(n / 10), temp);
    
}
rev(121, 0)
 