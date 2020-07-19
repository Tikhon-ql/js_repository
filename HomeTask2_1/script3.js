"use strict";
class Time{
    constructor(hour,minutes,seconds){
        if(seconds >= 60){
            minutes++;
            seconds %= 60;
        }
        if(minutes >= 60)
        {
            hour++;
            minutes %= 60;
        }
        hour >= 24 ? hour = hour % 24:null;
        this.hour = hour;
        this.minutes = minutes;
        this.seconds = seconds;
    }
    show(){
        return `${this.hour}:${this.minutes}:${this.seconds}`;
    }
    setTimeInSeconds(sec){
        this.hour = parseInt(this.hour) + parseInt(sec / 3600);
        this.minutes = parseInt(this.minutes) +  parseInt((sec % 3600) / 60);
        this.seconds =  +this.seconds  + +((sec % 3600)%60);
        if(this.seconds >= 60){
            this.minutes++;
            this.seconds %= 60;
        }
        if(this.minutes >= 60)
        {
            this.hour++;
            this.minutes %= 60;
        }
        this.hour >= 24 ? this.hour = this.hour % 24:null;
    }
    setTimeInMinutes(minutes){
        this.setTimeInSeconds(minutes * 60);
    }
    setTimeInHours(hours){
        this.setTimeInSeconds(hours * 3600);
    }
}
let h = prompt("Введите количество часов");
let m = prompt("Введите количество минут");
let s = prompt("Введите количество секунд");
let time = new Time(h,m,s);
alert(time.show());
let sec = prompt("Введите количество секунд для добавления");
time.setTimeInSeconds(sec);
alert(time.show());
let min = prompt("Введите количество минут для добавления");
time.setTimeInMinutes(min);
alert(time.show());
let hour = prompt("Введите количество часов для добавления");
time.setTimeInHours(hour);
alert(time.show());

