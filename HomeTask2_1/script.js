"use strict";
class MyCar{
    constructor(manufacturer,model,bithyear,avgspeed){
        this.manufacturer = manufacturer;
        this.model = model;
        this.bithyear = bithyear;
        this.avgspeed = avgspeed;
    }
    info(){
        return `Производитель - ${this.manufacturer}\nМодель - ${this.model}\nГод выпуска - ${this.bithyear}\nСредняя скорость${this.avgspeed}`;
    }
    howMuckKilometrs(param){
        let count = parseInt(param /4);
        param-=count;
        return param * this.avgspeed;
    }
}
let car1 = new MyCar("BMW","легковая",2007,150);
alert(car1.info());
let hours = prompt("Введите количество часов");
alert(`S = ${car1.howMuckKilometrs(hours)}`);