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