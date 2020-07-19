"use strict";
class Drob{
    constructor(ch,zn){
        if(zn != 0){
            this.ch = ch;
            this.zn = zn;
        }  
        else{
            throw new Error();
        }    
    }
    sub(drob){
        let ch = (this.ch * drob.zn) - (this.zn * drob.ch);
        ch == 0? zn = 0:null;
        return new Drob(ch,this.zn * drob.zn);
    }

    info(){
        return `${this.ch}/${this.zn}`;
    }
    sum(drob){
        let ch = (this.ch * drob.zn) + (this.zn * drob.ch);
        ch == 0? zn = 0:null;
        return new Drob(ch,this.zn * drob.zn);
    }
    compos(drob){
        return new Drob(this.ch * drob.ch,this.zn * drob.zn);
    }
    div(drob){
        return new Drob(this.ch * drob.zn,this.zn * drob.ch);
    }
    reducing(){
        for(let i = 1;i  <= this.ch;i++){
            if(this.ch % i == 0 && this.zn % i == 0){
                this.ch /= i;
                this.zn /= i;
            }
        }
    }
}
let ch1 = prompt("Введите чеслитель первой дроби");
let zn1 = prompt("Введите знаменатель первой дроби");
let ch2 = prompt("Введите чеслитель второй дроби");
let zn2 = prompt("Введите знаменатель второй дроби");
let drob1 = new Drob(ch1,zn1);
let drob2 = new Drob(ch2,zn2);
let flag = true;
while(flag){
    let choice = prompt("Введите 1 если хотите + дроби\n   2 если хотите - дроби\n   3 если хотите * дроби\n   4 если хотите / дроби\n   5 если хотите сократить дробь\n   6 если хотите выйти");
    switch(choice){
        case '1':
        case '+':
            alert(`${drob1.info()} + ${drob2.info()} = ${drob1.sum(drob2).info()}`);
            break;
        case '2':
        case '-':
            alert(`${drob1.info()} - ${drob2.info()} = ${drob1.sub(drob2).info()}`);
            break;
        case '3':
        case '*':
            alert(`${drob1.info()} * ${drob2.info()} = ${drob1.compos(drob2).info()}`);
            break;
        case '4':
        case '/':
            alert(`${drob1.info()} / ${drob2.info()} = ${drob1.div(drob2).info()}`);
            break;
        case '5':
            let cho2 = prompt("1-ую или 2-ую?");
            if(cho2 == 1){
                drob1.reducing();
                alert(`Дробь №1 после сокращения = ${drob1.info()}`);
            }
            else{
                if(cho2 == 2){
                    drob2.reducing();
                    alert(`Дробь №2 после сокращения = ${drob2.info()}`);
                } 
            }
            break;
        case '6':
            flag = false;
            break;
        default:
            alert("Ошибка!!!");
    }
}