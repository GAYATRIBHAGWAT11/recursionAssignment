function factorialOfNumber(num,fact){
    if(num>0){
        fact=fact*num;
        return factorialOfNumber(num-1, fact)
    }else{
        return fact;
    }
}console.log(factorialOfNumber(8,1))