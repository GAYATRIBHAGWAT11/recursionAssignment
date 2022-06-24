function smallestDigit(n) {
    var min = n % 10;
    // n = Math.floor(n / 10);
    if (n == 0) {
        return n;
    }
    // var rem=n%10
    if (min > n % 10) {
         
        n = Math.floor(n / 10)
        return smallestDigit(n)
    }
    return (min)
}
console.log(smallestDigit(123456))