
let rem;
function elements(number){
    while(number>0){
         rem=Math.floor(number%10);
         console.log(rem);
        return elements(number/10);
       
    }
}
console.log(elements(6745))