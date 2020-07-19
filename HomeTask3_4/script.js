let lis = document.querySelectorAll("a");
for(let elem of lis){
    let result = elem.text.match(/http(s)*:\/\//g);
    if(result != null){
        elem.style.textDecoration = "underline";
    }
}
// function creatTree(dir, shift) {
//     if (shift === undefined)
//         shift = 0;
 
//     let list = fs.readdirSync(dir),
//         name;
//     for (let item of list) {
 
//         if (fs.statSync(name = dir + "\\" + item).isDirectory()) {
//             console.log("\t".repeat(shift) + item + " [FOLDER]");
//             creatTree(name, shift + 1);
//         }
//         else
//             console.log("\t".repeat(shift) + item);
//     }
// }
document.querySelector("#main").addEventListener("click",(event)=>{
    if(event.target.tagName == "P"){
        let div = event.target;
        div.parentElement.children[1].style.display == "none" ? div.parentElement.children[1].style.display = "block" : div.parentElement.children[1].style.display = "none";
    }
});

let ind;
let count = 0;

document.querySelector("ol").addEventListener("click",(event)=>{
    event.preventDefault();
    let obj = event.target;
    console.dir(event);
    console.dir(obj);
    if(obj.tagName = "LI")
    {
        if(event.ctrlKey){
            obj.style.backgroundColor = "orange";
            count = 0;
        }
        else{
            if(event.shiftKey){
                let inx = 0;
                let list = document.getElementsByName("lli");
                for(let elem of list){
                    if(elem.style.backgroundColor == "orange"){
                        inx = elem.value;
                    }
                }
                if(obj.value > inx){
                    for(let i = inx;i<obj.value + 1;i++){
                        list[i].style.backgroundColor = "orange";
                    }
                }
                else{
                    for(let i = obj.value;i<inx + 1;i++){
                        list[i].style.backgroundColor = "orange";
                    }
                }
            }
            else{
                let list = document.getElementsByName("lli");
                for(let elem of list){
                    elem.style.backgroundColor = "white";
                }
                obj.style.backgroundColor = "orange";
                count = 0;
            }
        }
    }
});

document.body.addEventListener("keydown",(event)=>{
    let tex = document.querySelector("textarea");
    let div = document.querySelector("#task3");
    if(event.ctrlKey && (event.key == "e" || event.key == "E")){
        event.preventDefault();
        if(tex.style.display == "none"){
            tex.value = div.innerText;
            tex.style.display = "block";
            div.style.display = "none";
        }
    }
    else{
        if(event.ctrlKey && (event.key == "s" || event.key == "S")){
            event.preventDefault();
            if(div.style.display == "none"){
                div.innerText = tex.value;
                div.style.display = "block";
                tex.style.display = "none";
            }
        }
    }
});

document.querySelector("table").addEventListener("click",(event)=>{
    if(event.target.tagName == "TH"){
        let obj = event.target;
        let tds = document.querySelectorAll("td");
        let list = [];
        for(let elem of tds){
            if(elem.cellIndex == obj.cellIndex){
                list.push(elem.innerText);
            }
        }
        if(parseInt(list[0])){
            for(let i = 0;i<list.length;i++){
                list[i] = +list[i];
            }
            list.sort();
        }
        else{
            list.sort();
        }
        console.log(list);
        for(let i = 0,j = 0;i<tds.length;i++){
            if(tds[i].cellIndex == obj.cellIndex){
                tds[i].innerText = list[j];
                j++;
            }
        }
    }
});
let flag = false;
let obj;
document.addEventListener("mousedown",function(event){
    obj = event.target;
    let cord = obj.getBoundingClientRect();
    if(event.clientX > (cord.right - 10) && event.clientX < (cord.right + 10) && event.clientY > (cord.bottom - 10) && event.clientY < (cord.bottom + 10)){
        flag = true;
    }
});
document.addEventListener("mousemove",function(event){
    if(flag){
        console.dir(event);
        let div = document.querySelector("#task6");
        div.style.width = (event.clientX - div.offsetLeft)  + "px"; 
        div.style.height = (event.clientY - div.offsetTop)  + "px";
    }
});
document.addEventListener("mouseup",function(event){
    flag = false;
});