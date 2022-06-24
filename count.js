function elementsCount(number, count){
    if(number>0){
        count++;
        number=Math.floor(number/10);
        return elementsCount(number, count);
    }
    console.log(count)
}
elementsCount(3465786, 0)