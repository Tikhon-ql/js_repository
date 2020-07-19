class Check{
    constructor(name,count,price){
        this.name = name;
        this.count = count;
        this.price = price;
    }
    show(){
        let div = document.querySelector("#placeforshow");
        div.innerHTML += `Название товара: ${this.name}<br>Количество товара:${this.count}<br>Стоимость одной единицы товара<hr>`
    }
}
class CheckList{
    constructor(chkList = []){
        this.chkList = Array.from(chkList);
    }
    showAll(){
        for(let elem of this.chkList){
            elem.show();
        }
    }
    sum(){
        let sum = 0;
        for(let elem of this.chkList){
            sum += elem.count * elem.price;
        }
        return sum;
    }
    max(){
        let max = this.chkList[0].count * this.chkList[0].price;
        for(let elem of this.chkList){
            if((elem.count * elem.price) > max){
                max = elem.count * elem.price;
            }
        }
        return max;
    }
    avg(){
        return (this.sum() / this.chkList.length).toFixed(2);
    } 
}
let check1 = new Check("Молоко",10,15);
let check2 = new Check("Хлеб",5,10);
let check3 = new Check("Вода",18,7);
let chklst = new CheckList([check1,check2,check3]);
let btnShow = document.querySelectorAll("button")[0];
btnShow.onclick = () => {
    chklst.showAll();
}
let btnSum = document.querySelectorAll("button")[1];
btnSum.onclick = () => {
    document.getElementById("sum").value = chklst.sum();
}
let btnAvg = document.querySelectorAll("button")[2];
btnAvg.onclick = () => {
    document.getElementById("avg").value = chklst.avg();
}
let btnMax = document.querySelectorAll("button")[3];
btnMax.onclick = () => {
    document.getElementById("max").value = chklst.max();
}