

function power(base, exp){
    if(exp==0){
        return1;
    }else{
        let result=base;
        result=result * power(base, exp-1)
        return result;
    }
}
power(2,2)