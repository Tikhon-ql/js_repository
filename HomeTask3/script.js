"use strict";
let result = 1;
//////////////////////////////////////// 1 /////////////////////////////////////////////////
let mleft = prompt("Введите левую границу");
let mrigth = prompt("Введите правую границу");
if(mleft < mrigth){
    for(let i = mleft;i - 1<mrigth;i++)
    {
        result += parseInt(i);
    }
    alert(`Конечный результат: ${result}`);
}
else{
    alert("Невернвый диапазон");
}
//////////////////////////////////////// 2 /////////////////////////////////////////////////
let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
let gcd = (a,b) => {
    let ara = [];
    let arb = [];
    let ar = [];
    for(let i = 1;i - 1 < a;i++)
    {
        a % i==0?ara.push(i):null;
    }
    for(let i = 1;i - 1 < b;i++)
    {
        b % i==0?arb.push(i):null;
    }
    for(let i = 0;i< ara.length;i++)
    {
        for(let j = 0;j< arb.length;j++)
        {
            if(ara[i] == arb[j]){
                ar.push(ara[i]);
            }
        }
    }
    return Math.max.apply(null,ar);
}
alert(`НОД(${num1},${num2}) =  ${gcd(num1,num2)}`);
//////////////////////////////////////// 3 /////////////////////////////////////////////////
let num = prompt("Введите число");
let ar = [];
for(let i = 1;i - 1 < num;i++){
    num%i==0? ar.push(i):null;
}
alert(ar.toString());
//////////////////////////////////////// 4 /////////////////////////////////////////////////
let num3 = prompt("Введите число");
alert(`Количество цифр в чисел ${num3} = ${num3.length}`);
//////////////////////////////////////// 5 /////////////////////////////////////////////////
let mt0 = [];
let lt0 = [];
let zero = [];
let chetn = [];
let antichetn = [];
for(let i = 0;i<10;i++)
{
    let chisl = prompt(`Введите ${i+1} число`);
    chisl % 2 == 0 ? chetn.push(chisl):antichetn.push(chisl);
    if(chisl > 0){
        mt0.push(chisl);
    }
    else{
        if(chisl != 0){
            lt0.push(chisl);
        }
        else{
            zero.push(chisl);
        }
    }
}
alert(`Четных:${chetn.length}\nНечетных:${antichetn.length}\nПоложительных:${mt0.length}\nОтрицательных:${lt0.length}\nНулей:${zero.length}`);
//////////////////////////////////////// 6 /////////////////////////////////////////////////
let myflag = true;
while(myflag){
    try{
        let fir = parseInt(prompt("Введите первое число"));
        let sec = parseInt(prompt("Введите второе число"));
        let znak = prompt("Введите знак");
        switch(znak){
            case '+':
                result = (fir) + (sec);
                break;
            case '-':
                result = fir - sec;
                break;
            case '%':
                result = fir % sec;
                break;
            case '*':
                result = fir * sec;
                break;
            case '/':
                result = fir / sec;
                break;
            case '^':
                result = Math.pow(fir,sec);
                break;
            default:alert("Введенные данные некорректны");throw new Error();
        }
        alert(`${fir} ${znak} ${sec} = ${result}`);
    }
    catch(ex){
    }
    let choice = prompt("Хотите ещё раз? Введите что-небудь!");
    choice.length == 0 ? myflag = false:null;
}
//////////////////////////////////////// 7 /////////////////////////////////////////////////
let chislo = prompt("Введите число");
let sdfig = prompt("На сколько цифр его сдвинуть");
let sd = sdfig > chislo.length ? sdfig%chislo.length : sdfig;
result = chislo.substring(sd) + chislo.substring(0,sd);
alert(`Конечный результат: ${result}`);
//////////////////////////////////////// 8 /////////////////////////////////////////////////
let date = new Date();
let daysOfWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
let c = date.getDay();
while(prompt('',daysOfWeek[c])){
    c == 6 ? c = -1 :null;
    c++;
}
//////////////////////////////////////// 9 /////////////////////////////////////////////////
for(let i = 2; i<10; i++){
    for(let j = 1;j<11;j++){
        let r = i*j;
        document.body.innerHTML += `${i} * ${j} = ${r} <br>`;
    }
}
//////////////////////////////////////// 10 ////////////////////////////////////////////////
let cur = parseInt(prompt("Введите целое число от 0 до 100"));
let left = 0;
let rigth = 100;
let N = (left + rigth)/2;
let count = 0;
let flag = true;
while(flag){
    let ch = prompt(`Ваше число > ${parseInt(N)}, < ${parseInt(N)} или = ${parseInt(N)}?`);
    switch(ch[0]){
        case '>':
            left = N;
            N = (left + rigth)/2;
            count++;
            break;
        case '<':
            rigth = N;
            N = (left + rigth)/2;
            count++;
            break;
        case '=':
            if(parseInt(N) == cur){
                flag = false;
            }
            else{
                alert("Врать не хорошо!!!");
            }
            break;
        default:
            alert("Введенные данные некорректны");
    }
}
alert(`Ваше число: ${parseInt(N)}\nПонадобилось всего ${count} попыток`);
