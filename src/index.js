module.exports = function solveEquation(a,b,c) {
     var d=b*b-4*a*c; // дискриминант

    if ( d<0 )
        return []; // нет корней

    if ( d==0 )
        return [ -b/(2*a) ]; // один корень

    var x1=(-b+Math.sqrt(d))/(2*a);
    var x2=(-b-Math.sqrt(d))/(2*a);
    return [ x1, x2 ]; // два корня
}
var result=squareRoots(8,9,4);
console.log(result);