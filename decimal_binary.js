// in function andar return likhna hai aur bahar console likhna, aur agar andar console hua to bahar simply call karna hai. (this is not applicable in recursion)
// in recursion in function inside return outside console
function decimal_binary(n){
    if(n==0){
        return 0;
    }else{
        return (n%2)+10*decimal_binary(Math.floor(n/2));

    }
        
}
console.log(decimal_binary(7))