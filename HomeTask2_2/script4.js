class Auditor{
    constructor(name,count,facname){
        this.name = name;
        count > 20 ? count = count % 20 : null;
        count < 10 ? count = 10 : null;
        this.count = count;   
        this.facname = facname;
    }
    show(){
        document.body.innerHTML += `Номер аудитории: ${this.name}<br>Количество мест: ${this.count}<br>Название факультета: ${this.facname}<br>`;
    }
}
class AuditorList{
    constructor(list = []){
        this.list = Array.from(list);
    }
    show(){
        for(let elem of this.list){
            elem.show();
        }
    }
    showForFac(facname){
        for(let elem of this.list){
            elem.facname == facname ? elem.show() : null;
        }
    }
    showForGroup(group){
        for(let elem of this.list){
            elem.facname == group.facname && elem.count > group.count ? elem.show() : null;
        }
    }
    sortByCount(){
        this.list.sort((a,b) => {
           return a.count - b.count;
        })
    }
    sortByName(){
        this.list.sort((a,b) => {
            return a.name - b.name;
         })
    }
}
let a1 = new Auditor("1",13,"Гриффиндор");
let a2 = new Auditor("3",25,"Пуффендуй");
let a3 = new Auditor("4",14,"Когтевран");
let a4 = new Auditor("2",9,"Слизерин");
let auds = new AuditorList([a1,a2,a3,a4]);
document.body.innerHTML += `Show()<br><hr><br>`;
auds.show();
auds.sortByName();
document.body.innerHTML += `<br><hr>Show() after sort  by name<br><hr><br>`;
auds.show();
auds.sortByCount();
document.body.innerHTML += `<br><hr>Show() after sort  by count<br><hr><br>`;
auds.show();

document.body.innerHTML += `<br><hr>ShowForGroup()<br><hr><br>`;

let group = {
    name:"5",
    facname:"Гриффиндор",
    count:11
};
auds.showForGroup(group);

document.body.innerHTML += `<br><hr>ShowForFac()<br><hr><br>`;

auds.showForFac("Когтевран");
