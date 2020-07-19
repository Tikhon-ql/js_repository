"use strict"
 let result;
 function IsBissextile(an)
{
    if((an% 4 == 0 && an % 100 != 0) || (an % 400 == 0)){
        result = an + "г. - високосный ";
        return true;
    }
    return false;
}
//////////////////////// 1 /////////////////////////////////
let age = prompt("Введите ваш возраст");
if(age <= 12){
    result = "Ребенок";
}
else{
    if(age > 12 && age <=18){
        result = "Подросток";
    }
    else{
        if(age <= 60){
            result = "Взрослый";
        }
        else{
            result = "Пенсионер";
        }
    }
}
alert(result);
//////////////////////// 2 /////////////////////////////////
let number = prompt("Введите число от 0 до 9");
result = "";
switch(number){
    case '0':
        result = ")";
        break;
    case '1':
        result = "!";
        break;
    case '2':
        result = "@";
        break;
    case '3':
        result = "#";
        break;
    case '4':
        result = "$";
        break;
    case '5':
        result = "%";
        break;
    case '6':
        result = "^";
        break;
    case '7':
        result = "&";
        break;
    case '8':
        result = "*";
        break;
    case '9':
        result = "(";
        break;
    default:
        result = "Пусто";
}
console.log(result);
alert(result);
//////////////////////// 3 /////////////////////////////////
let array = prompt("Введите трёхзначное число");
result = "Все цифры различны";
for(let i = 0;i < 3;i++)
{
    for(let j = 0;j < 3;j++)
    {
        if(i!=j)
        {
            if(array[i] == array[j])
                result = "Число имеет одинаковые цифры(" + array[i] + "," + array[i] + ")";
        }
    }  
}
alert(result);
//////////////////////// 4 /////////////////////////////////
let an = prompt("Введите год");
result =  an + "г. - не високосный ";
IsBissextile(an);
alert(result);
//////////////////////// 5 /////////////////////////////////
let palindr = prompt("Введите пятизначное число");
result = "Данное число не является палидромом";
let count = 0;
for(let i = 0; i < 5;i++)
 {
     if(palindr[i] == palindr[4-i])
     {
        count++;
     }
}
if(count == 5){
    result = "Данное число является палидромом";
}
alert(result);
//////////////////////// 6 /////////////////////////////////
let usd = prompt("Введите количество денег в USD",100);
let choice = prompt("Введите валюту, в которую хотите перевести(EUR,UAN,AZN)","EUR");
switch(choice){
    case "EUR":
        result = "USD:" + usd + "\nEUR:" + (usd * 0.91);
        break;
    case "UAN":
        result ="USD:" + usd + "\nUAN:" + (usd * 27.2);
        break;
    case "AZN":
        result ="USD:" + usd + "\nAZN:" + (usd * 1.7);
        break;
    default:result = "Неизвестная валюта";
}
alert(result);
//////////////////////// 7 /////////////////////////////////
let sum = prompt("Введите сумму покупки");
let discount = 0;
if(sum >= 200 && sum <= 300){
    discount = 0.03;
}
else{
    if(sum > 300 && sum <= 500){
        discount = 0.05;
    }
    else{
        if(sum > 500){
            discount = 0.07;
        }
    }
}
result = "Сумма покупки: " + sum + "\nИтоговая сумма: " + ((sum - (sum * discount)).toFixed(2));
alert(result);
//////////////////////// 8 /////////////////////////////////
let P = prompt("Введите периметр квадрата",10);
let C = prompt("Введите длинну окружности",10);
let S = (P/4) * (P/4);
let So = Math.round(2 * Math.PI * (C/(2*Math.PI))*(C/(2*Math.PI)));
//P = 20;
//C = 12.56;
if(S == So){
    alert("Может");
}
else{
    alert("Не может");
}
//////////////////////// 9 /////////////////////////////////
let first = prompt("2 + 2 * 2 = ?");
let second = prompt("Сколько баллов прибавляется за каждый правильный ответ?");
let third= prompt("Сколько сейчас времени(в секундах)?");
let balls = 0
if(first = 6){
    balls += 2;
}
if(second == 2){
    balls += 2;
}
let d = new Date();
let seconds = d.getHours() * 3600 + d.getMinutes() * 60;
if(third == seconds){
    balls += 2;
}
alert("Ваши баллы: " + balls);
//////////////////////// 10 ////////////////////////////////
 let year = prompt("Введите год");
 let month = prompt("Введите месяц");
 let day = prompt("Введите день");
 try
 {
    if(month >= 1 && month <= 12 && day >= 1)
    {
        if((month % 2 == 1 && month <= 7) || (month % 2 == 0 && month >= 8) ){
            if(day >= 32){
                throw new Error("Слишком большое число дней");
            }
            day++;
            if(day == 32)
            {
                day = 1;
                month++;
            }
            if(month == 13)
            {
                month = 1;
                year++;
            }   
        }
        else{
            day++;
            if(month == 2){
                if(IsBissextile(year)){
                    if(day >= 31){
                        throw new Error("Недопустимое значение даты");
                    }             
                    if(day == 30)
                    {
                        day = 1;
                        month++;
                    }
                }
                else{
                    if(day >= 30){
                        throw new Error("Недопустимое значение даты");
                    }
                if(day == 29){
                    day = 1;
                    month++;
                }
                }
            }
            else{
                if(day >= 32)
                {
                    throw new Error("Недопустимое значение даты");
                }
                if(day == 31){
                    day = 1;
                    month++;
                }
                if(month == 13){
                    month = 1;
                    year++;
                }
            }
        }
       
    }
    else{
        throw new Error("Недопустимое значение даты")
    }
    alert(day + "." + month+ "." + year);
 }
 catch(ex)
 {
    alert(ex);
 }
