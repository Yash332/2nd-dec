let sum = function (a){
    return function(b){
       let add=a+b;
       document.write(add);
       } ;
}
sum(63)(45);