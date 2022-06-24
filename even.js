function printEven(a,b){
    if(a==b){
        if(a%b==0){
            console.log(a)
        }
        return;
    }else if (a>b){
        return;
    }else{
        if(a%2==0){
            console.log(a);
            printEven(a+2,b)
        }else{
            printEven(a+1,b)
        }
    }
}
printEven(7,20)