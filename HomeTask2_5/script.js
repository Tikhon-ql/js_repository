function IsBissextile(an)
{
    if((an% 4 == 0 && an % 100 != 0) || (an % 400 == 0)){
        result = an + "г. - високосный ";
        return true;
    }
    return false;
}
class Marker{
    constructor(color,percentOfink){
        this.color = color;
        this.percentOfink = percentOfink;
    }
    show(str){
        let result = "";
        let div = document.querySelectorAll("div")[1];
        for(let elem of str){
            if(this.percentOfink > 0){
                if(elem != " "){
                    result += elem;
                    this.percentOfink = +this.percentOfink + (-0.5);
                }
                else{
                    result += " ";
                }
            }
        }
        div.innerHTML += `<p style="color:${this.color}">${result}</p>`;
        return result;
    }
}
class RefuelMarker extends Marker{
    constructor(color,percentOfink){
        super(color,percentOfink);
    }
    fill(per){
        this.percentOfink += per;
    }
}
let marker = new RefuelMarker("green",+100);
let btn1 = document.querySelectorAll("button")[0];
btn1.onclick = ()=>{
  
    let input = document.getElementById("inputfirst").value;
    marker.show(input);
}
let btn2 = document.querySelectorAll("button")[1];
btn2.onclick = ()=>{
    let per = prompt("Введите количество прокентов на которое вы хотите пополнить маркер");
    marker.fill(+per);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


class ExtendedDate extends Date{
    constructor(year,month,day){
        super(year,month,day);
    }
    showLikeWord(){
        let numOfDay = this.getDay();
        let numOfMounth = this.getMonth();
        let months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
        let days = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];
        let div = document.querySelector("#second");
        div.innerHTML += `${days[numOfDay - 3]} ${months[numOfMounth - 1]}`;
    }
    WhatIsDate(date){
        if(date.getMonth() > this.getMonth()){
            return true;
        }
        else{
            if(date.getMonth() == this.getMonth()){
                if(date.getDay() > this.getDay()){
                    return false;
                }
                else{
                    return false;
                }
            }
            else{
                return true;
            }
        }
    }
    IfBissextile(){
        let year = this.getFullYear();
        if((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)){
            return true;
        }
        else{
            return false;
        }
    }
    NextDay(){
        let year = this.getFullYear();
        let month = this.getMonth();
        let day = this.getDate();
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
        return new Date(year,month,day);
    }
}
let div2 = document.querySelector("#second");
let date = new ExtendedDate("2020","02","28");
date.showLikeWord();
if(date.IfBissextile()){
    div2.innerHTML += `<br>Год високосный`;
}
else{
    div2.innerHTML += `<br>Год не високосный`;
}
let da = new Date("2020","02","28");
if(date.WhatIsDate(da)){
    div2.innerHTML += `<br>Дата ${da.getDate()}.${da.getMonth()}.${da.getFullYear()} - будущая`;
}
else{
    div2.innerHTML += `<br>Дата ${da.getDate()}.${da.getMonth()}.${da.getFullYear()} - прошедшая`;
}
let dat = date.NextDay();
div2.innerHTML += `<br>Следующая дата: ${dat.getDate()}.${dat.getMonth()}.${dat.getFullYear()}`;



class Employee{
    constructor(name,surname,place,position){
        this.name = name;
        this.surname = surname;
        this.place = place;
        this.position = position;
    }
}
let arr = [new Employee("Иван","Иванов","Банк","Главбух"),new Employee("Петр","Петров","Банк","Финансовый аналитик"),
new Employee("Андрей","Андреев","Банк","Банкир"),new Employee("Сидр","Сидоров","Банк","Аудитор"),new Employee("Сергей","Сергеев","Банк","Консультант")];
class EmpTable{
    constructor(arr = []){
        this.employes = Array.from(arr);
    }
    getHtml(){
        let table = document.querySelector("table");
        table.innerHTML = "<tr><th>Имя</th><th>Фамилия</th><th>Место работы</th><th>Должность</th></tr>";
        for(let elem of this.employes){
            table.innerHTML += `<tr><td>${elem.name}</td><td>${elem.surname}</td><td>${elem.place}</td><td>${elem.position}</td></tr>`;
        }
    }
}
let empTbl = new EmpTable(arr);
let btn3 = document.querySelector("#tableshow");
btn3.onclick = () => {
    empTbl.getHtml();
}

class StyledEmpTable extends EmpTable{
    constructor(arr,styles){
        super(arr);
        this.styles = styles;
    }
    getStyles(){
        return `style = "${this.styles}"`;
    }
    getHtml(){
        let table = document.querySelectorAll("table")[1];
        table.style = this.styles;
        table.innerHTML = `<tr><th>Имя</th><th>Фамилия</th><th>Место работы</th><th>Должность</th></tr>`;
        for(let elem of this.employes){
            table.innerHTML += `<tr><td>${elem.name}</td><td>${elem.surname}</td><td>${elem.place}</td><td>${elem.position}</td></tr>`;
        }
    }
    setStyles(str){
        this.styles = str;
    }
}
let styemptabl = new StyledEmpTable(arr,"");
let btn4 = document.querySelector("#tableshowwithstyles");
btn4.onclick = () => {
    let input = document.getElementById("styles").value;
    styemptabl.setStyles(input);
    styemptabl.getHtml();
}