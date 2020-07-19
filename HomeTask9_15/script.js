class MouvieService{
    async getMovie(mouvieId){
        let xhr = new XMLHttpRequest();
        xhr.open("GET",`hhttp://www.omdbapi.com/?i=${mouvieId}&apikey=43e7b83f`);
        xhr.onload = ()=>{
            let res = JSON.parse(xhr.responseText);
            let flag = JSON.parse(details.Response.toLowerCase());
            if(flag){
                return res;
            }
        }
        await xhr.send();
        return null;
    }
    async search(title,type,page){
        gif.style.display = "block";
        let xhr = new XMLHttpRequest();
        xhr.open("GET",`http://www.omdbapi.com/?s=${title}&apikey=43e7b83f&type=${type}&page=${page}`);
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                gif.style.display = "none";
            };
        }
        xhr.onload = ()=>{  
            let result = JSON.parse(xhr.responseText);
            let flag = JSON.parse(result.Response.toLowerCase());
            if(flag){
                sleep(3000);
                currentResult = result;
                currPage = 1;
                fillShowDiv();
                console.dir(currentResult);
            }
            else{
                alert(type + " not found!"); 
            }
        };
         await xhr.send();
    }
}

function fillShowDiv(){
    let showDiv = document.querySelector("#show");
    document.querySelector("#left").style.display = "block";
    document.querySelector("#rigth").style.display = "block";
    // slider.children[0].disabled = true;
    // slider.children[0].style.backgroundColor = "#EEE8AA";
    showDiv.children = [];
    while (showDiv.firstChild){
        showDiv.removeChild(showDiv.firstChild);
    }
    document.querySelector("#slider").style.display = "block";
    showDiv.style.display = "flex";
    let first = document.createElement("div");
    if(currentResult.Search[indexOfLast - 2].Poster == "N/A"){
        currentResult.Search[indexOfLast - 2].Poster = "notfound.jpg";
    }
    if(currentResult.Search[indexOfLast - 1].Poster == "N/A"){
        currentResult.Search[indexOfLast - 1].Poster = "notfound.jpg";
    }
    if(currentResult.Search[indexOfLast].Poster == "N/A"){
        currentResult.Search[indexOfLast].Poster = "notfound.jpg";
    }
    first.innerHTML = `<div  style = "justify-content: start;width: 85%;margin:2% 1% 2% 10%;display: flex; height: 90%; background-color: darkgoldenrod;">
                        <div id = "img1" style = "justify-content: start; width: 220px; height: 80%; margin: 5% 2% 5%% 2%;">
                            <img src="${currentResult.Search[indexOfLast - 2].Poster}" alt="" style = "width: 100%; height: 100%;">
                        </div>
                        <div style="justify-content: end; margin-left:3%;font-family:Roboto; font-size:15px;">
                            <p id = "type1">${currentResult.Search[indexOfLast - 2].Type}</p>
                            <p id = "title1" style = "width:100px">${currentResult.Search[indexOfLast - 2].Title}</p>
                            <p id = "year1">${currentResult.Search[indexOfLast - 2].Year}</p>
                            <button id = "details"  value = "${currentResult.Search[indexOfLast - 2].imdbID}">Details</button>
                        </div>
                    </div>`;
    let second = document.createElement("div");
    second.innerHTML = `<div style = "justify-content: start;width: 85%;margin:2% 1% 2% 1%;display: flex; height: 90%; background-color: darkgoldenrod;">
                        <div id = "img1" style = "justify-content: start; width: 220px; height: 80%; margin: 5% 2% 5%% 2%;">
                            <img src="${currentResult.Search[indexOfLast - 1].Poster}" alt="" style = "width: 100%; height: 100%;">
                        </div>
        <div style="justify-content: end;margin-left:3%;font-family:Roboto; font-size:15px;">
            <p id = "type1">${currentResult.Search[indexOfLast - 1].Type}</p>
            <p id = "title1">${currentResult.Search[indexOfLast - 1].Title}</p>
            <p id = "year1">${currentResult.Search[indexOfLast - 1].Year}</p>
            <button id = "details"  value = "${currentResult.Search[indexOfLast - 1].imdbID}">Details</button>
        </div>
    </div>`;    
    let third = document.createElement("div");
    third.innerHTML = ` <div style = "justify-content: start;width: 85%;margin:2% 1% 2% 1%;display: flex; height: 90%; background-color: darkgoldenrod;">
                        <div id = "img1" style = "justify-content: start; width: 220px; height: 80%; margin: 5% 2% 5%% 2%;">
                            <img src="${currentResult.Search[indexOfLast ].Poster}" alt="" style = "width: 100%; height: 100%;">
                        </div>
            <div style="justify-content: end;margin-left:3%;font-family:Roboto; font-size:15px;">
                <p id = "type1">${currentResult.Search[indexOfLast].Type}</p>
                <p id = "title1">${currentResult.Search[indexOfLast].Title}</p>
                <p id = "year1">${currentResult.Search[indexOfLast].Year}</p>
                <button id = "details"  value = "${currentResult.Search[indexOfLast].imdbID}">Details</button>
            </div>
        </div>`;
    showDiv.appendChild(first);
    showDiv.appendChild(second);
    showDiv.appendChild(third);
}

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
} 

let mouvieService = new MouvieService();

let currentResult = [];
let flag = false;
let indexOfLast = 2;
let currDetails;
let currPage = 1;
let lastOfSlider = 6;

let gif = document.querySelector("#gif");
gif.src = "gif.gif"

 document.querySelector("#search").addEventListener("click",function(event){
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let type = document.querySelector("#type").value;
    mouvieService.search(title,type,currPage);
});
document.querySelector("#back").addEventListener("click",()=>{
   
    document.querySelector("#main").style.display = "block";
    document.querySelector("#showDetails").style.display = "none";
    document.querySelector("#show").style.display = "flex";
    document.querySelector("#left").style.display = "block";
    document.querySelector("#rigth").style.display = "block";
    document.querySelector("#slider").style.display = "block";
});
document.querySelector("#slider").addEventListener("click",function(event){
    if(parseInt(event.target.value)){
        indexOfLast = 2;
        hide();
        document.querySelector("#rigth").disabled = false;
        document.querySelector("#rigth").style.backgroundColor = "#BDB76B";
        document.querySelector("#left").disabled = true;
        document.querySelector("#left").style.backgroundColor = "#EEE8AA";
        currPage = event.target.textContent;
        document.querySelector("#search").click();
    }
    else{
      
        let slider = document.querySelector("#slider");
        switch(event.target.getAttribute("data-user")){
            case "rigth":
                if(slider.children[0].disabled){
                    slider.children[0].disabled = false;
                    slider.children[0].style.backgroundColor = "#BDB76B";
                }
                if(+lastOfSlider < Math.ceil(currentResult.totalResults/10)){
                    for(let i = 1;i < slider.children.length - 1;i++){
                        slider.children[i].textContent = +slider.children[i].textContent + 1;
                    }
                    lastOfSlider = slider.children[slider.children.length-2].textContent;
                }
                break;
            case "left":
                if(slider.children[7].disabled){
                    slider.children[7].disabled = false;
                    slider.children[7].style.backgroundColor = "#BDB76B";
                }
                if(lastOfSlider - 6 > 0){
                    for(let i = 1;i < slider.children.length - 1;i++){
                        slider.children[i].textContent = +slider.children[i].textContent - 1;
                    }
                    lastOfSlider = slider.children[slider.children.length-2].textContent;
                }
                break;
        }
        if(lastOfSlider == 6){
            slider.children[0].disabled = true;
            slider.children[0].style.backgroundColor = "#EEE8AA";
        }
        if(lastOfSlider == Math.ceil(currentResult.totalResults/10)){
            slider.children[7].disabled = true;
            slider.children[7].style.backgroundColor = "#EEE8AA";
        }
    }
});
document.querySelector("#rigth").addEventListener("click",function(){
    if(indexOfLast != currentResult.Search.length - 2){
        if(document.querySelector("#left").disabled){
            document.querySelector("#left").disabled = false;
            document.querySelector("#left").style.backgroundColor = "#BDB76B";
        }
        indexOfLast++;
        fillShowDiv();
    }
    else{
        indexOfLast++;
        fillShowDiv();
        this.disabled = true;
        this.style.backgroundColor = "#EEE8AA";
    }
});
document.querySelector("#left").addEventListener("click",function(){
    if(indexOfLast != 3){
        if(document.querySelector("#rigth").disabled){
            document.querySelector("#rigth").disabled = false;
            document.querySelector("#rigth").style.backgroundColor = "#BDB76B";
        }
        indexOfLast--;
        fillShowDiv();
    }
    else{
        indexOfLast--;
        fillShowDiv();
        this.disabled = true;
        this.style.backgroundColor = "#EEE8AA";
    }
});
document.addEventListener("click",function(event){
    if(event.target.textContent == "Details"){
        let xhr = new XMLHttpRequest();
        hide();
        gif.style.display = "block";
        xhr.open("GET",`http://www.omdbapi.com/?i=${event.target.value}&apikey=43e7b83f`);
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                gif.style.display = "none";
            };
        }
        xhr.onload = ()=>{
        let details = JSON.parse(xhr.responseText);
        let flag = JSON.parse(details.Response.toLowerCase());
        if(flag){
            sleep(2000);
            currDetails = details;
            console.dir(currDetails);
            document.querySelector("#main").style.display = "none";
            let showDetails = document.querySelector("#showDetails");
            showDetails.style.display = "flex";
            if(currDetails.Poster == "N/A"){
                currDetails.Poster = "notfound.jpg";
             }
            document.querySelector("#imgDet").src = currDetails.Poster;
            document.querySelector("#titleDet").value = currDetails.Title;
            document.querySelector("#release").value = currDetails.Released;
            document.querySelector("#country").value = currDetails.Country;
            document.querySelector("#genre").value = currDetails.Genre;
            document.querySelector("#director").value = currDetails.Director;
            document.querySelector("#writer").value = currDetails.Writer;
            document.querySelector("#actors").value = currDetails.Actors;
            document.querySelector("#awards").value = currDetails.Awards;
        }
    };
    xhr.send();
    }
});

function hide(){
    document.querySelector("#show").style.display = "none";
    document.querySelector("#left").style.display = "none";
    document.querySelector("#rigth").style.display = "none";
    document.querySelector("#slider").style.display = "none";
}