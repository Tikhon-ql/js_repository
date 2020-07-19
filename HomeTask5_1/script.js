
function setDate(str){
    let date = new Date();
    document.querySelector(str).innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}; ${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
}

setDate("#date")

let k = 0;

document.querySelector("#submit").addEventListener("click",function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mes = document.getElementById("message").value;
    if(name != "" && mes != ""){
        document.querySelector("#main").innerHTML += `<br><div class = "diiv" style = "display: flex;"><p style = "justify-content: start;">${name}</p><p id = "date${k}" style = "margin-left: 80%;"></p></div><div class = "diiv">${mes}</div>`;
    }
    setDate(`#date${k}`);
    k++;
});
class Question{
    constructor(question,answers,correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}
let qs = [new Question(`How many letters are there in the world "Hello"?`,`5,2`,"5"),new Question(`How many letters are there in the world "World"?`,"4,5","5"),new Question("How much will 2 + 2 * 2","6,8","6"),new Question("How much will 3 + 3 * 3","12,18","12")];
let rigth = 0;
let curr = 0;
let answ;
function task2(){
    document.querySelector("#but").style.display = "none";
    let div = document.querySelector("#task2");
    if(curr < qs.length){
        let strs = qs[curr].answers.split(',');
        div.innerHTML = `<div id = "tsk2" style = "margin-left:35%;"><p>${qs[curr].question}</p>
             <input id = "r1" type="radio" name = "radio" style = "font-size: large;" value = ${strs[0]}>${strs[0]}</input>
            <input id = "r2" type="radio" name = "radio" style = "font-size: large;"  value = ${strs[1]}>${strs[1]}</input>`;
        div.innerHTML += `<button id = "next" style = "margin-left:35%; width:10%;">Next</button></div>`;
        document.querySelector("#next").disabled = true;
        document.querySelector("#r1").addEventListener("click",function(){
            document.querySelector("#next").disabled = false;
            answ = this.value;
        });
        document.querySelector("#r2").addEventListener("click",function(){
            document.querySelector("#next").disabled = false;
            answ = this.value;
        });
        document.querySelector("#next").addEventListener("click",()=>{
            if(answ == qs[curr].correctAnswer){
                rigth++;
            }
            curr++;
            task2();
        });
    }
    else{  
        document.querySelector("#tsk2").innerHTML = `<p style = "font-size:20px;">Вы дали ${rigth} правильных ответов</p><button id = clear>Заново</button>`;
        document.querySelector("#clear").addEventListener("click",()=>{
            document.querySelector("#tsk2").innerHTML = "";
            document.querySelector("#but").style.display = "block";
            curr = 0;
            rigth = 0;
        });
        document.querySelector("#next").style.display = "none";
    }
}
document.querySelector("#but").addEventListener("click",task2);


document.querySelector("#showtext").addEventListener("click",function(){
    let textarea = document.querySelector("textarea");
    let str = textarea.value;
    document.querySelector("#fortext").innerHTML = "";
    document.querySelector("#restsk3").style.display = "block";
    let radio = "text-align:" + document.forms[1].place.value + ";";
    let checkboxes = document.querySelectorAll("[type=checkbox]");
    let s = "";
    for(let elem of checkboxes){
        if(elem.checked){
            switch(elem.value){
                case "bold":
                    s+= "font-weight:bold;";
                    break;
                case "underline":
                    s+= "text-decoration:underline;";
                    break;
                case "italic":
                    s+= "font-style:italic;";
                    break;
            }
        }
    }
    document.querySelector("#fortext").innerHTML = `<p style = "${s}${radio}">${str}</p>`;
});

let currentSum = 0;

document.querySelector("#but1").addEventListener("click",()=>{
    let book = document.getElementById("name1");
    document.getElementById("book").value = book.innerText;
    currentSum = document.querySelector("#price1").innerText;
});
document.querySelector("#but2").addEventListener("click",()=>{
    let book = document.getElementById("name2");
    document.getElementById("book").value = book.innerText;
    currentSum = document.querySelector("#price2").innerText;
});
document.querySelector("#but3").addEventListener("click",()=>{
    let book = document.getElementById("name3");
    document.getElementById("book").value = book.innerText;
    currentSum = document.querySelector("#price3").innerText;
});
document.querySelector("#but1").addEventListener("mouseenter",()=>{
    let book = document.getElementById("name1");
    let obj = document.querySelector("#book");
    obj.style.backgroundColor = "lavender";
    obj.value = book.innerText;
    currentSum = document.querySelector("#price1").innerText;
});
// document.querySelector("#but1").addEventListener("mouseout",()=>{
//     let obj = document.querySelector("#book");
//     obj.style.backgroundColor = "white";
//     obj.value = "";
// });
document.querySelector("#but2").addEventListener("mouseenter",()=>{
    let book = document.getElementById("name2");
    let obj = document.querySelector("#book");
    obj.style.backgroundColor = "lavender";
    obj.value = book.innerText;
    currentSum = document.querySelector("#price2").innerText;
});
// document.querySelector("#but2").addEventListener("mouseout",()=>{
//     let obj = document.querySelector("#book");
//     obj.style.backgroundColor = "white";
//     obj.value = "";
// });
document.querySelector("#but3").addEventListener("mouseenter",()=>{
    let book = document.getElementById("name3");
    let obj = document.querySelector("#book");
    obj.style.backgroundColor = "lavender";
    obj.value = book.innerText;
    currentSum = document.querySelector("#price3").innerText;
});
// document.querySelector("#but3").addEventListener("mouseout",()=>{
//     let obj = document.querySelector("#book");
//     obj.style.backgroundColor = "white";
//     obj.value = "";
// });
document.querySelector("#buy").addEventListener("click",()=>{
    let str = document.querySelector("#nname").value;
    str += ", thanks for the order!";
    let book = document.querySelector("#book");
    let adress = document.querySelector("#address");
    let date = document.querySelector("#date");
    // let d = new Date(date.value);
    // ${d.getDay()}:${d.getMonth()}:${d.getFullYear()} 
    if(book.value != "" && adress.value != "" && date.value != ""){
        str += `<br><br>Book "${book.value}" will be delivered on ${date.value} to ${adress.value}`;
        document.querySelector("#tsk4result").style.display = "block"; 
        let count = document.querySelector("#count").value;
        let sum = count * parseInt(currentSum);
        str += `<br>Sum: ${sum}$`;
        document.querySelector("#tsk4result").innerHTML = str;
    }
});

document.querySelector("#book").addEventListener("input",(event)=>{
    event.target.value = "";
});
class Lesson{
    constructor(name,topic){
        this.name = name;
        this.topic = topic;
    }
}
class Student{
    constructor(name){
        this.name = name;
        this.lessons = [new Lesson("lesson1","Learning JS & JQuery"),new Lesson("lesson2","Learning C# & WinFoms"),new Lesson("lesson3","Learning HTML & CSS")];
        this.isPresent = [false,false,false];
    }
    touglePresent(les){
        for(let i = 0;i < this.lessons.length;i++){
            if(this.lessons[i].name == les){
                this.isPresent[i] = !this.isPresent[i];
            }
        }
    }
    info(){
        return `${this.name} ${this.isPresent}`;
    }
}
class Group{
    constructor(name = "",students = []){
        this.name = name;
        this.students = Array.from(students);
        this.isSaved = [false,false,false];
    }
    tougleSave(les){
        for(let i = 0;i < this.students[0].lessons.length;i++){
            if(les == this.students[0].lessons[i].name){
                this.isSaved[i] = true;
                break;
            }
        }
    }
    getSave(les){
        for(let i = 0;i < this.students[0].lessons.length;i++){
            if(les == this.students[0].lessons[i].name){
                return this.isSaved[i];
            }
        }
        return false;
    }
}
let group1 = new Group("group1",[new Student("Student123"),new Student("Student721"),new Student("Student473")]);
let group2 = new Group("group2",[new Student("Student435"),new Student("Student486"),new Student("Student136")]);
let group3 = new Group("group3",[new Student("Student562"),new Student("Student453"),new Student("Student145")]);
let groups = [group1,group2,group3];
// let lesson1 = new Lesson("lesson1",group1);
// let lesson2 = new Lesson("lesson2",group2);
// let lesson3 = new Lesson("lesson3",group3);
// let lessons = [lesson1,lesson2,lesson3];
let currGroup = new Group();
// let currLes = new Lesson();
let table = document.querySelector("#table");
document.querySelector("#select").addEventListener("click",(event)=>{
    event.preventDefault();
    document.querySelector("table").style.display = "table";
    table.style.display = "table";
    let group = document.querySelector("#group").value;
    for(let elem of groups){
        if(elem.name == group){
            currGroup = elem;
            break;
        }
    }
    let les = document.querySelector("#lesson").value;
    table.innerHTML = "";
    if(currGroup.getSave(les)){
        for(let elem of currGroup.students){
            for(let i = 0;i<elem.lessons.length;i++){
                if(les == elem.lessons[i].name){
                    document.querySelector("#topic").innerText = elem.lessons[i].topic;
                    if(!elem.isPresent[i]){
                        table.innerHTML += `<tr><td name = "td">${elem.name}</td><td name = "td">no present</td></tr>`;
                    }
                    else{
                        table.innerHTML += `<tr><td name = "td">${elem.name}</td><td name = "td">present</td></tr>`;
                    }
                }
            }
        }
    }
    else{
        document.querySelector("#save").style.display = "block";
        makeTable(les);
    }
});

function makeTable(les){
    for(let elem of currGroup.students){
        for(let i = 0;i<elem.lessons.length;i++){
            if(les == elem.lessons[i].name){
                document.querySelector("#topic").innerText = elem.lessons[i].topic;
                if(!elem.isPresent[i]){
                    table.innerHTML += `<tr><td name = "td">${elem.name}</td><td name = "td"><input type="checkbox" name="" id="" value = "${elem.name}"></td></tr>`;
                }
                else{
                    table.innerHTML += `<tr><td name = "td">${elem.name}</td><td name = "td"><input type="checkbox" name="" id="" checked value = "${elem.name}"></td></tr>`;
                }
            }
        }
    }
}
document.addEventListener("change",function(event){
    let obj = event.target;
    if(obj.type = "checkbox"){
        let les = document.querySelector("#lesson").value;
        for(let elem of currGroup.students){
            if(elem.name == obj.value){
                elem.touglePresent(les);
                console.dir(elem);
            }
        }
    }
});
document.querySelector("#save").addEventListener("click",(event)=>{
    currGroup.tougleSave(document.querySelector("#lesson").value);
});

