// let shX = 0;
// let flag = false;
// document.querySelector("#square").addEventListener("mousedown",function(event){
//     let style = getComputedStyle(this);
//     shX = parseInt(style.left) - event.pageX;
//     flag = true;
// });
// let coords1 = document.querySelector("#line").getBoundingClientRect();
// let k = 0;
// document.addEventListener("mousemove",function(event){
//     let obj = event.target;
//     let coords2 = obj.getBoundingClientRect();
//     if(flag && /*obj == document.querySelector("#square") && */coords2.left > coords1.left - k && coords2.right < coords1.right + k){
//         // console.dir(coords1);
//         // console.dir(coords2);
//         obj.style.left = event.pageX + shX + "px";
//         k == 5 ? k = 0 : null;
//     }
//     k == 0 ? k = 5 : null;
// });
// document.addEventListener("mouseup",function(event){
//    flag = false;
// });



let images = ["images/js.jpg","images/css.jpg","images/html.jpg"];

let current = 1;
let img = document.querySelector("#forImage");
document.querySelector("#rigth").addEventListener("click",function(){
    if(current + 1 < images.length){
        document.querySelector("#left").disabled = false;
        current++;
        img.src = images[current];
        if(current + 1 >= images.length){
            this.disabled = true;
        }
    }
});
document.querySelector("#left").addEventListener("click",function(){
    if(current - 1 >= 0){
        document.querySelector("#rigth").disabled = false;
        current--;
        img.src = images[current];
        if(current - 1 < 0){
            this.disabled = true;
        }
    }
});

document.querySelector("#div1").addEventListener("click",function(){
    if(this.style.height == "30px"){
        this.style.height = "80px";
        document.querySelector("#p1").style.display = "block";
        closeDiv("#div2","#p2");
        closeDiv("#div3","#p3");
        closeDiv("#div4","#p4");
    }
    else{
        closeDiv("#div1","#p1");
    }
});
document.querySelector("#div2").addEventListener("click",function(){
    if(this.style.height == "30px"){
        this.style.height = "110px";
        document.querySelector("#p2").style.display = "block";
        closeDiv("#div1","#p1");
        closeDiv("#div3","#p3");
        closeDiv("#div4","#p4");
    }
    else{
        closeDiv("#div2","#p2");
    }
});
document.querySelector("#div3").addEventListener("click",function(){
    if(this.style.height == "30px"){
        this.style.height = "80px";
        document.querySelector("#p3").style.display = "block";
        closeDiv("#div1","#p1");
        closeDiv("#div2","#p2");
        closeDiv("#div4","#p4");
    }
    else{
        closeDiv("#div3","#p3");
    }
});
document.querySelector("#div4").addEventListener("click",function(){
    if(this.style.height == "30px"){
        this.style.height = "80px";
        document.querySelector("#p4").style.display = "block";
        closeDiv("#div1","#p1");
        closeDiv("#div2","#p2");
        closeDiv("#div3","#p3");
    }
    else{
        closeDiv("#div4","#p4");
    }
});

function closeDiv(div,p){
    document.querySelector(div).style.height = "30px";
    document.querySelector(p).style.display = "none";
}
let count = 0;
let arrnews = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, tenetur quis alias explicabo fugiat optio reprehenderit, maiores veniam, corrupti mollitia sapiente deleniti omnis iure aspernatur nulla incidunt libero consectetur dolorum similique quod facere aperiam? Iure illum fuga, animi eveniet officia saepe. Magni tenetur animi suscipit dicta officiis beatae totam sint quaerat? Maiores molestias obcaecati, cumque mollitia suscipit velit dolor cum animi dolores, corporis magnam veritatis? Laudantium necessitatibus officiis neque rerum veniam. Deleniti sequi esse magni eum, quibusdam exercitationem veniam corporis, saepe asperiores, ipsum id ab. Doloribus accusantium, dolor tempore, id fugit distinctio omnis delectus itaque, quaerat eius incidunt amet quas animi libero cum corrupti officia. Cupiditate nemo ea repellendus soluta natus. Consectetur maiores, officia commodi labore veritatis debitis eligendi eius asperiores architecto deleniti ipsam atque odit exercitationem nemo quasi. Error, assumenda a! Corporis minus enim vitae explicabo praesentium a cumque qui sint, culpa sunt rem tempora nisi earum! Deleniti.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, tenetur quis alias explicabo fugiat optio reprehenderit, maiores veniam, corrupti mollitia sapiente deleniti omnis iure aspernatur nulla incidunt libero consectetur dolorum similique quod facere aperiam? Iure illum fuga, animi eveniet officia saepe. Magni tenetur animi suscipit dicta officiis beatae totam sint quaerat? Maiores molestias obcaecati, cumque mollitia suscipit velit dolor cum animi dolores, corporis magnam veritatis? Laudantium necessitatibus officiis neque rerum veniam. Deleniti sequi esse magni eum, quibusdam exercitationem veniam corporis, saepe asperiores, ipsum id ab. Doloribus accusantium, dolor tempore, id fugit distinctio omnis delectus itaque, quaerat eius incidunt amet quas animi libero cum corrupti officia. Cupiditate nemo ea repellendus soluta natus. Consectetur maiores, officia commodi labore veritatis debitis eligendi eius asperiores architecto deleniti ipsam atque odit exercitationem nemo quasi. Error, assumenda a! Corporis minus enim vitae explicabo praesentium a cumque qui sint, culpa sunt rem tempora nisi earum! Deleniti.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio, tenetur quis alias explicabo fugiat optio reprehenderit, maiores veniam, corrupti mollitia sapiente deleniti omnis iure aspernatur nulla incidunt libero consectetur dolorum similique quod facere aperiam? Iure illum fuga, animi eveniet officia saepe. Magni tenetur animi suscipit dicta officiis beatae totam sint quaerat? Maiores molestias obcaecati, cumque mollitia suscipit velit dolor cum animi dolores, corporis magnam veritatis? Laudantium necessitatibus officiis neque rerum veniam. Deleniti sequi esse magni eum, quibusdam exercitationem veniam corporis, saepe asperiores, ipsum id ab. Doloribus accusantium, dolor tempore, id fugit distinctio omnis delectus itaque, quaerat eius incidunt amet quas animi libero cum corrupti officia. Cupiditate nemo ea repellendus soluta natus. Consectetur maiores, officia commodi labore veritatis debitis eligendi eius asperiores architecto deleniti ipsam atque odit exercitationem nemo quasi. Error, assumenda a! Corporis minus enim vitae explicabo praesentium a cumque qui sint, culpa sunt rem tempora nisi earum! Deleniti."];
document.querySelector("#news").addEventListener("scroll",function(){
    if (this.scrollTop == (this.scrollHeight - this.clientHeight)){
        console.dir(this);
        this.innerText += arrnews[count];
        count++;
    }
});

document.querySelector("#submit").addEventListener("click",(event)=>{
    event.preventDefault();
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    if(month != "" && year != ""){
        let date = new Date();
        date.setFullYear(year);
        date.setMonth(month);
        let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        document.querySelector("#label").innerText = months[month - 1] + ", " + year;
        let table = document.querySelector("table");
        table.style.display = "table";
        let tds = document.querySelectorAll("td");
        let day = 1;
        for(let i = date.getDay();i<tds.length;i++){
            tds[i].innerText = day; 
            day++;
        }
    }
});