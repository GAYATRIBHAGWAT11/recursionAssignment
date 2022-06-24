// let a=0;
// let b=1;
let c;
function fibbonacci(n,a,b){
   if(n>0){    
       console.log(a)
       c=a+b;
        a=b;
        b=c;   
       return fibbonacci(n-1,a,b);  
   } 
   return c;
  
}
console.log(fibbonacci(8,0,1));
