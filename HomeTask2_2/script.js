"use strict";
class Purchase{
    constructor(name,count,isBought){
        this.name = name;
        this.count = count;
        this.isBought = isBought;
    }
}
// function purchCompare(){
//     purch1.isBought > purch2.isBought;
// }
class PurchaseList{
    constructor(PurchaseList = []){
        this.purchases = Array.from(PurchaseList);
    }
    // show(){
    //     for(let elem of this.purchases){
    //         document.body.innerHTML += elem.info();
    //     }
    // }
    add(){
        let flag = false;
        let name = document.getElementById("pname").value;
        let ncount =  document.getElementById("pcount").value;
        let nIsBougth = document.getElementById("pIsBougth").value;
        if(name != "" && ncount != "" && nIsBougth != ""){
            for(let elem of this.purchases){
                if(elem.name == name){
                    elem.count =  +elem.count + parseInt(ncount);
                    flag = true;
                    break;
                }
            }
            if(!flag){
                this.purchases.push(new Purchase(name,ncount,nIsBougth));
            }
            this.reflash();
        }
    }
    buy(name){
        for(let elem of this.purchases){
            if(elem.name == name && elem.isBought != "Куплен"){
                elem.isBought = "Куплен";
                this.reflash();
                break;
            }
        }
    }
    reflash(){
        let table = document.querySelectorAll("table")[1];
        // let trs = document.querySelectorAll("tr");
        // trs.innerHTML = null;
        table.innerHTML = null;
        for(let elem of this.purchases){
            table.innerHTML += `<tr><td>${elem.name}</td><td>${elem.count}</td><td>${elem.isBought}</td>`;
        }
    }
}
let purchList = new PurchaseList();
let buttonAdd = document.querySelectorAll("button")[0];
buttonAdd.onclick = () =>{
    purchList.add();
}
let buttonBuy = document.querySelectorAll("button")[1];
buttonBuy.onclick = () => {
    let n = prompt("Enter name of elem you want to buy");
    purchList.buy(n);
}
