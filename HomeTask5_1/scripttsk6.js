class Billet{
    constructor(direction,date,place,prise){
        this.direction = direction;
        this.date = date;
        this.place = place;
        this.IsFree = false;
        this.prise = prise;
    }
    tougleFree(){
        this.IsFree = true;
    }
    toString(){
        return `${this.direction};${this.date};${this.place}`;
    }
}
let billetsOdessaLvov = [new Billet("odessa-lvov","25.05.2020",1,10),
    new Billet("odessa-lvov","25.05.2020",2,10),
    new Billet("odessa-lvov","25.05.2020",3,10),
    new Billet("odessa-lvov","25.05.2020",4,10),
    new Billet("odessa-lvov","25.05.2020",5,10),
    new Billet("odessa-lvov","25.05.2020",6,10),
    new Billet("odessa-lvov","25.05.2020",7,10),
    new Billet("odessa-lvov","25.05.2020",8,10),
    new Billet("odessa-lvov","25.05.2020",9,10),
    new Billet("odessa-lvov","25.05.2020",10,10),
    new Billet("odessa-lvov","25.05.2020",11,10),
    new Billet("odessa-lvov","25.05.2020",12,10),
    new Billet("odessa-lvov","25.05.2020",13,10),
    new Billet("odessa-lvov","25.05.2020",14,10),
    new Billet("odessa-lvov","25.05.2020",15,10),
    new Billet("odessa-lvov","25.05.2020",16,10),
    new Billet("odessa-lvov","25.05.2020",17,10),
    new Billet("odessa-lvov","25.05.2020",18,10),
    new Billet("odessa-lvov","25.05.2020",19,10),
    new Billet("odessa-lvov","25.05.2020",20,10),
    new Billet("odessa-lvov","25.05.2020",21,10),
    new Billet("odessa-lvov","25.05.2020",22,10),
    new Billet("odessa-lvov","25.05.2020",23,10),
    new Billet("odessa-lvov","25.05.2020",24,10),
    new Billet("odessa-lvov","25.05.2020",25,10),
    new Billet("odessa-lvov","25.05.2020",26,10),
    new Billet("odessa-lvov","25.05.2020",27,10),
    new Billet("odessa-lvov","25.05.2020",28,10)];
    let billetsMinskMoscow = [new Billet("minsk-moscow","30.05.2020",1,30),
    new Billet("minsk-moscow","30.05.2020",2,30),
    new Billet("minsk-moscow","30.05.2020",3,30),
    new Billet("minsk-moscow","30.05.2020",4,30),
    new Billet("minsk-moscow","30.05.2020",5,30),
    new Billet("minsk-moscow","30.05.2020",6,30),
    new Billet("minsk-moscow","30.05.2020",7,30),
    new Billet("minsk-moscow","30.05.2020",8,30),
    new Billet("minsk-moscow","30.05.2020",9,30),
    new Billet("minsk-moscow","30.05.2020",10,30),
    new Billet("minsk-moscow","30.05.2020",11,30),
    new Billet("minsk-moscow","30.05.2020",12,30),
    new Billet("minsk-moscow","30.05.2020",13,30),
    new Billet("minsk-moscow","30.05.2020",14,30),
    new Billet("minsk-moscow","30.05.2020",15,30),
    new Billet("minsk-moscow","30.05.2020",16,30),
    new Billet("minsk-moscow","30.05.2020",17,30),
    new Billet("minsk-moscow","30.05.2020",18,30),
    new Billet("minsk-moscow","30.05.2020",19,30),
    new Billet("minsk-moscow","30.05.2020",20,30),
    new Billet("minsk-moscow","30.05.2020",21,30),
    new Billet("minsk-moscow","30.05.2020",22,30),
    new Billet("minsk-moscow","30.05.2020",23,30),
    new Billet("minsk-moscow","30.05.2020",24,30),
    new Billet("minsk-moscow","30.05.2020",25,30),
    new Billet("minsk-moscow","30.05.2020",26,30),
    new Billet("minsk-moscow","30.05.2020",27,30),
    new Billet("minsk-moscow","30.05.2020",28,30)];
    let billetsGomelBrest = [new Billet("gomel-brest","01.06.2020",1,15),
        new Billet("gomel-brest","01.06.2020",2,15),
        new Billet("gomel-brest","01.06.2020",3,15),
        new Billet("gomel-brest","01.06.2020",4,15),
        new Billet("gomel-brest","01.06.2020",5,15),
        new Billet("gomel-brest","01.06.2020",6,15),
        new Billet("gomel-brest","01.06.2020",7,15),
        new Billet("gomel-brest","01.06.2020",8,15),
        new Billet("gomel-brest","01.06.2020",9,15),
        new Billet("gomel-brest","01.06.2020",10,15),
        new Billet("gomel-brest","01.06.2020",11,15),
        new Billet("gomel-brest","01.06.2020",12,15),
        new Billet("gomel-brest","01.06.2020",13,15),
        new Billet("gomel-brest","01.06.2020",14,15),
        new Billet("gomel-brest","01.06.2020",15,15),
        new Billet("gomel-brest","01.06.2020",16,15),
        new Billet("gomel-brest","01.06.2020",17,15),
        new Billet("gomel-brest","01.06.2020",18,15),
        new Billet("gomel-brest","01.06.2020",19,15),
        new Billet("gomel-brest","01.06.2020",20,15),
        new Billet("gomel-brest","01.06.2020",21,15),
        new Billet("gomel-brest","01.06.2020",22,15),
        new Billet("gomel-brest","01.06.2020",23,15),
        new Billet("gomel-brest","01.06.2020",24,15),
        new Billet("gomel-brest","01.06.2020",25,15),
        new Billet("gomel-brest","01.06.2020",26,15),
        new Billet("gomel-brest","01.06.2020",27,15),
        new Billet("gomel-brest","01.06.2020",28,15)];
    let billets = [billetsOdessaLvov,billetsMinskMoscow,billetsGomelBrest];
document.querySelector("#search").addEventListener("click",(event)=>{
    event.preventDefault();
    totalSum = 0;
    let direction = document.querySelector("#direction").value;
    let date = document.querySelector("#billetdate").value;
    let table = document.querySelector("#table2");
    // document.querySelector("#result").style.display = "none";
    if(date != "" && direction != ""){
        table.innerHTML = "";
        // document.querySelector("#result").innerHTML = "";
        let tr1 = document.createElement("tr");
        document.querySelector("#ok").style.display = "block";
        for(let i = 0;i<billets[direction].length;i++){
            if(billets[direction][i].date == date){
                if(14 == i){
                    tr1.innerHTML += "<br>";
                }
                if(!billets[direction][i].IsFree){
                    tr1.innerHTML += `<td><input type = "checkbox" name = "billet" id = "billet${i}" value = "${billets[direction][i].prise};${billets[direction][i].place}">${billets[direction][i].place}</input></td>`;
                }
                else{
                    tr1.innerHTML += `<td>B</td>`;
                }
            }
        }
        if(tr1.innerText == ""){
            document.querySelector("#ok").style.display = "none";
        }
        table.appendChild(tr1);
        console.dir(table);
    }
});
let totalSum = 0;
let choice = [];
document.addEventListener("change",(event)=>{
    if(event.target.name == "billet"){
        let s = event.target.value.split(';');
        totalSum += +s[0];
        // for(let elem of billets){
        //     if(elem.place == event.target.value){
        //         elem.tougleFree();
        //         console.dir(elem);
        //     }
        // }
        choice.push(+s[1] - 1);
    }
});
let already = [];
let forBook = [];
document.querySelector("#ok").addEventListener("click",function(event){
    let direction = document.querySelector("#direction").value;
    let date = document.querySelector("#billetdate").value;
    for(let elem of billets[direction]){
        if(elem.date == date){
            for(let i =0 ;i< choice.length;i++){
                billets[direction][choice[i]].tougleFree();
            }
        }
    }
    let bill = [];
    for(let elem of choice){
        bill.push(+elem + 1);
    }
    // let str = `Direction:${billets[direction][0].direction}<br>Date:${date}<br>Total sum:${totalSum}<br>Billets:${bill.toString()}`;
    // document.querySelector("#result").style.display = "block";
    // document.querySelector("#result").innerHTML = str;
    this.style.display = "none";
    document.querySelector("#book").style.display = "block";
    choice = [];
});

document.querySelector("#book").addEventListener("click",function(event){
    let direction = document.querySelector("#direction").value;
    let table = document.querySelector("#table3");
    for(let elem of billets[direction]){
        if(elem.IsFree){
            table.innerHTML += `<tr><td>${elem.direction}</td><td>${elem.date}</td><td>${elem.place}</td><tr>`;
        }
    }
});