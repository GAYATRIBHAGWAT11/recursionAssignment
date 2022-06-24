function printOdd(a,b){
    if(a==b){
        if(a%b==0){
            console.log(a)
        }
        return;
    }else if (a>b){
        return;
    }else{
        if(a%2!==0){
            console.log(a);
            printOdd(a+2,b)
        }
    }
}
printOdd(7,20)