"use strict";
function IsPerfect(a){
    let del = 0;
    for(let i = 0;i < a;i++){
        a % i == 0? del += i:null;
    }
    if(a == del){
        return true;
    }
    else{
        return false;
    }
}
function time(h = "00",m = "00",s = "00"){
    alert(`${h}:${m}:${s}`);
}
function fun4(s=0){

    let hour = parseInt(s / 3600);
    let minutes = parseInt((s%3600)/60);
    let seconds = s - (hour * 3600) - (minutes * 60);
    time(hour,minutes,seconds);
}
function fun3(h = 0,m = 0,s = 0){
    return h * 3600 + m * 60 + parseInt(s);
}
/////////////////////////////// 1 ///////////////////////////////////
function fun1(a,b){
    if(a != b){
        return parseInt(a) > parseInt(b)? 1:-1;
    }
    else{
        return 0;
    }
}
let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
if(fun1(num1,num2) == 1){
    alert(`${num1} > ${num2}`);
}
else{
    if(fun1(num1,num2) == -1){
        alert(`${num1} < ${num2}`);
    }
    else{
        alert(`${num1} = ${num2}`);
    }
}
/////////////////////////////// 2 ///////////////////////////////////
function factor(a){
  if(a!=1){
      a *= factor(a-1);
  }
  return a;
}
let fac = prompt("Введите число");
alert(`Факториал этого числа =  ${factor(fac)}`);
/////////////////////////////// 3 ///////////////////////////////////
function plant(a){
    let result = "";
    for(let i = 0;i<a.length;i++){
        result += a[i];
    }
    return result;
}
let str = prompt("Введите три числа(через пробел)");
let strs = str.split(' ');
if(strs.length >= 3){
    alert(plant(strs));
}
else{
    alert("Вы ввели неправильное количество цифр");
}
/////////////////////////////// 4 ///////////////////////////////////
function square(){
    if(arguments.length == 1){
        return arguments[0] * arguments[0];
    }
    else{
        return arguments[0] * arguments[1];
    }
}
alert(`Сторона квадрата = 10\nПлощадь = ${square(10)}\n\nШирина прямоугольника = 10\nДлинна прямоугольника = 5\nПлощадь = ${square(10,5)}` );
/////////////////////////////// 5 ///////////////////////////////////
let ch = parseInt(prompt("Введите число"));
if(IsPerfect(ch)){
    alert(`${ch} - совершенное`);
}
else{alert(`${ch} - несовершенное`);}
/////////////////////////////// 6 ///////////////////////////////////
let left = prompt("Введите левую граицу диапозона");
let rigth = prompt("Введите правую граицу диапозона");
function fun2(left,rigth){
    let perfect = [];
    for(let i = left; i-1 < rigth;i++){
        if(IsPerfect(i)){
            perfect.push(i);
        }
    }
    return perfect;
}
alert(fun2(left,rigth).toString());
/////////////////////////////// 7 ///////////////////////////////////
let hour = prompt("Введите количество часов");
if(hour <= 24){
    let minutes = prompt("Введите количество минут");
    if(minutes <= 60){
        let seconds = prompt("Введите количество секунд");
        if(seconds <= 60){
            minutes.length == 1?minutes = "0" + minutes.toString():null;
            seconds.length == 1?seconds = "0" + seconds.toString():null;
            time(hour,minutes,seconds);
        }
        else{
            alert("В минуте всего 60 секунд");
        }
    }
    else{
        alert("В часу всего 60 минут");
    }
}
else{
    alert("В сутках всего 24 часа");
}
/////////////////////////////// 8 ///////////////////////////////////
alert(`Часов: 5\nМинут:45\nСекунд:14\n\nВремя в секундах = ${fun3(5,45,14)}`);
/////////////////////////////// 9 ///////////////////////////////////
let sec = prompt("Введите время в секундах");
fun4(sec);
/////////////////////////////// 10 ///////////////////////////////////
function fun5(h1,m1,s1,h2,m2,s2){
    let seconds = Math.abs(fun3(h1,m1,s1) - fun3(h2,m2,s2));
    fun4(seconds);
}
let str1 = prompt("Введите первую дату(в формате чч:мм:сс)");
let str2 = prompt("Введите вторую дату(в формате чч:мм:сс)");
let date1 = str1.split(':');
let date2 = str2.split(':');
console.log(date1.toString());
console.log(date2.toString());
fun5(date1[0],date1[1],date1[2],date2[0],date2[1],date2[2]);