function smallestDigit(n){
    let min=Math.floor(n%10);
    n=n/10;
    while(n>0){
        if(min<n%10){
            min=Math.floor(n%10)
            n=n/10
            return smallestDigit(n)

        }
       console.log(min);
    }
    

}
smallestDigit(154870)