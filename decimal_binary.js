function decimal_binary( n){
    while(n>0)
    {
        decimal_binary(n/2);
        console.log(n%2)
    }
}


console.log(decimal_binary(10))