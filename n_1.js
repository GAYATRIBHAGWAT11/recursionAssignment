function descending(a,b){
    if(a<=b){
        console.log(b);
        return descending(a,b-1)
    }
}
descending(1,20)