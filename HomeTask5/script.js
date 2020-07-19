"use strict";
let result;
//////////////////// 1 ///////////////////////
function square(a,b){
    if(b == 0){
        return 1;
    }
    if(b != 0){
        a*=square(a,b-1);
    }
    return a;
}
let num1 = prompt("Введите число");
let step = prompt("Введите степень");
alert(`${num1}^${step} = ${square(num1,step)}`);
////////////////// 2 ///////////////////////
function nod(a,b) {
	if (b == 0)
		return Math.abs(a);
	return nod(b, a % b);
}
let a = prompt("Введите первое число");
let b = prompt("");
//////////////////// 3 ///////////////////////
// let a = prompt();
// let ar = Array.from(a);
//////////////////// 4 ///////////////////////
function fun4(a) {
    if (a < 2) {
        alert("Ошибка!Число меньше 2");
    }
    else 
        if (a=== 2) {
            result = true;
        }
    const limit = Math.sqrt(a);

    function IsPrime(x, b) {
        if (b > limit)
            return true;
        else {
            return x % b == 0 ? false : IsPrime(x, b+1);
        }
    }

    IsPrime(a, 2) ? result = "Простое число" : result = "Составное число";
    alert(result);
}
let number = prompt("Введите число");
fun4(number);
//////////////////// 5 ///////////////////////
function fun5(a) {
    let ar = [];
    function grc(x, b = 2) {
        if (x == 1)
            return;
        if (x % b == 0) {
            ar.push(b);
            grc(x / b, b);
        } 
        else {
            grc(x,b+1);
        }
    }
    grc(a);
    return ar;
}
let num = prompt("Введите число");
let arr = fun5(num);
let nresult = arr[0];
for(let i  = 1;i < arr.length;i++){
    nresult += " * " + arr[i];
}
alert(`${nresult} = ${num}`);

//////////////////// 6 ///////////////////////
function fib(i,a = i,c = 0){
    if(a <= 1){
        return a;
    }
    else{
        if(i == c){
            return a;
        }
        else{
           return a = fib(i,a-1,c+1) + fib(i,a-2,c+1);
        }
    }
}

let chisl = prompt("Введите индекс");
alert(`Число фибоначчи №${chisl} = ${fib(chisl)}`);