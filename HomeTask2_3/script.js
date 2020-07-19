"use strict";
////////////////1////////////////////
function countDigit(str = ""){
    let count = 0;
    for(let i = 0;i<str.length;i++){
        if(parseInt(str[i])){
            count++;
        }
    }
    return count;
}
function countW(str = ""){
    let count = 0;
    const letters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i = 0;i<str.length;i++){
       if(letters.indexOf(str[i]) != -1){
           count++;
       }
    }
    return count;
}
function stringStat(str = ""){
    let cd = countDigit(str);
    let cw = countW(str);
    let res1 = document.querySelector("#res1");
    res1.innerHTML += `<br>Количество цифр ${cd}<br>`;
    res1.innerHTML += `Количество букв ${cw}<br>`;
    res1.innerHTML += `Количество других символов ${str.length - cd - cw}<br>`;
}
let btnt1 = document.querySelector("#btntsk1");
btnt1.addEventListener("click",() => {
    let tsk1 = document.getElementById("tsk1").value;
    stringStat(tsk1);
});
////////////////2////////////////////

let btnt2 = document.querySelector("#btntsk2");
btnt2.addEventListener("click",() => {
    let tsk2 = document.getElementById("tsk2").value;
    let result;
    if(tsk2.length == 2){
        const z = ["один","два","три","четыре","пять","шесть","семь","восемь","девять","десять"];
        const d = ["одиннадцать","двенадцать","тринадцать","четырнадцать","пятнадцать","шестнадцать","семнадцать","восемнадцать","девятнадцать"];
        const dd = ["двадцать","тридцать","сорак","пятьдесят","шестьдесят","семьдесят","восемьдесят","девяносто"];
        if(tsk2[0] == '1'){
            result = d[--tsk2[1]];
        }
        else{
            result = dd[tsk2[0] - 2] + " " + z[--tsk2[1]];
        }
    }
    else{
        result = "Число не двузначное!";
    }
    let res2 = document.querySelector("#res2");
    res2.innerHTML += `<br>Результат: ${result}`;
});

////////////////3////////////////////

function fun3(str = ""){
    let strs = str.replace(new RegExp("[0-9]","g"), '_').split('');
    let result = "";
    for(let i = 0;i < strs.length;i++){
        if(strs[i] == strs[i].toUpperCase()){
            result += strs[i].replace(strs[i],strs[i].toLowerCase());
            //str[i] = str[i].toLowerCase();
        }
        else{
            result += strs[i].replace(strs[i],strs[i].toUpperCase());
            //str[i] = str[i].toUpperCase();
        }    
    }
    let res3 = document.querySelector("#res3");
    res3.innerHTML += `<br>Результат: ${result}`;
}
let btnt3 = document.getElementById("btntsk3");
btnt3.addEventListener("click",() =>{
    let inp = document.getElementById("tsk3").value;
    if(inp != ""){
        fun3(inp);
    }
})
////////////////4////////////////////


let btnt4 = document.querySelector("#btntsk4");
btnt4.addEventListener("click",() => {
    let tsk4 = document.getElementById("tsk4").value;
    let result;
    if(tsk4 != ""){
        let str = tsk4.split('-');
        let nstr = str[1].replace(str[1][0],str[1][0].toUpperCase());
        result = str[0] + nstr;
    }
    let res4 = document.querySelector("#res4");
    res4.innerHTML += `<br>Результат: ${result}`;
})

////////////////5////////////////////

let btnt5 = document.querySelector("#btntsk5");
btnt5.addEventListener("click",() => {
    let tsk5 = document.getElementById("tsk5").value;
    let result = "";
    if(tsk5 != ""){
        let str = tsk5.split(' ');
        for(let i = 0;i<str.length;i++){
            if(str[i] != "")result += str[i][0].toUpperCase();
        }
    }
    let res5 = document.querySelector("#res5");
    res5.innerHTML += `<br>Результат: ${result}`;
})


////////////////6////////////////////

let btnt6 = document.querySelector("#btntsk6");
btnt6.addEventListener("click",() => {
    let tsk6 = document.getElementById("tsk6").value;
    let result = "";
    if(tsk6 != ""){
        let str = tsk6.split(' ');
        for(let i = 0;i<str.length;i++){
            if(str[i] != "")result += str[i];
        }
    }
    let res6 = document.querySelector("#res6");
    res6.innerHTML += `<br>Результат: ${result}`;
})


////////////////7////////////////////

let btnt7 = document.querySelector("#btntsk7");
btnt7.addEventListener("click",() => {
    let tsk7r = document.getElementById("tsk7r").value;
    let tsk7l = document.getElementById("tsk7l").value;
    let select = document.getElementById("tsk7c");
    let tsk7c = select.options[select.selectedIndex].text;
    let result;
    if(tsk7r != "" && tsk7c != "" && tsk7l != ""){
        console.log(eval(`${tsk7l}${tsk7c}${tsk7r}`));
        result = eval(`${tsk7l}${tsk7c}${tsk7r}`);
    }
    let res7 = document.querySelector("#res7");
    res7.innerHTML= `${result}`;
})

////////////////8////////////////////

let btnt8 = document.querySelector("#btntsk8");
btnt8.addEventListener("click",() => {
    let tsk8 = document.getElementById("tsk8").value;
    let result = "";
    if(tsk8 != ""){
        let url = new URL(tsk8);
        console.dir(url);
        result += `Протокол: ${url.protocol}<br>Домен: ${url.host}<br>Путь: ${url.pathname}<br>`;
    }
    let res8 = document.querySelector("#res8");
    res8.innerHTML += `<br>Результат: ${result}`;
})


////////////////9////////////////////

let btnt9 = document.querySelector("#btntsk9");
btnt9.addEventListener("click",() => {
    let tsk9 = document.getElementById("tsk9").value;
    let razdel = document.getElementById("razdel").value;
    let result = "";
    if(tsk9 != "" && razdel != ""){
        let str = tsk9.split(razdel);
        result = `"${str[0]}"`;
        for(let i = 1;i<str.length;i++){
            result += `, "${str[i]}"`;
        }
    }
    let res9 = document.querySelector("#res9");
    res9.innerHTML += `<br>Результат: ${result}`;
})

////////////////10///////////////////

let btnt10 = document.querySelector("#btntsk10");
btnt10.addEventListener("click",() => {
    let tsk10 = document.getElementById("tsk10").value;
    let result = "";
    if(tsk10 != ""){
        tsk10 = tsk10.replace(/\"/g,'');
        tsk10 = tsk10.replace(/\“/g,'');
        tsk10 = tsk10.replace(/\”/g,'');
        tsk10 = tsk10.replace(/\(/g,'');
        tsk10 = tsk10.replace(/\)/g,'');
        let str1 = tsk10.split(',');
        let str2 = str1[0].replace(/\D+/g,"");
        let str3 = str1[0].replace(/%\d/g,";");
        let str4 = str3.split(';');
        result = "";
        for(let i = 0; i < str2.length;i++){
            result += str4[i] + str1[+str2[i]];
        }
    }
    let res10 = document.querySelector("#res10");
    res10.innerHTML += `<br>Результат: ${result}`;
})