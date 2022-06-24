function palin(x,sum,y){
    // y=x;
    if(x>0){
        let r=x%10;
        sum=sum*10+r;
        x=Math.floor(x/10);
        return palin(x,sum,y);
    }
    console.log(sum);
    if(y==sum){
        return "palindrome";
    }
else{
    return " not palindrome";
}
}

console.log(palin(121,0,121));