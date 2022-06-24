function descending(a,b){
    if(a<=b){
        console.log(a);
        return descending(a+1,b)
    }
}
descending(1,20)