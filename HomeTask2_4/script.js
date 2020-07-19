"use strict";
class Ellipse{
    constructor(radius = 0){
        this.radius = radius;
    }
    getRadius(){
        return this.radius;
    }
    setRadius(r){
        this.radius = r;
    }
    getDiameter(){
        return this.radius * 2;
    }
    S(){
        return (this.radius * this.radius * Math.PI).toFixed(2);
    }
    C(){
        return (this.radius * 2 * Math.PI).toFixed(2);
    }
}
let el = new Ellipse();
document.querySelector("#first").addEventListener("click",(event)=>{
    event.preventDefault();
    let inp = document.getElementById("radius").value;
    el.setRadius(inp);
    document.getElementById("R").innerHTML = el.getRadius();
    document.getElementById("D").innerHTML = el.getDiameter();
    document.getElementById("S").innerHTML = el.S();
    document.getElementById("C").innerHTML = el.C();
})

class HtmlElement{
    constructor(tagname = "",isSelfClosing = true,text = "",attributes = "",another = "",styles = "",htmls = []){
        this.tagname = tagname;
        this.isSelfClosing = isSelfClosing;
        this.text = text;
        this.attributes = attributes;
        this.another = another;
        this.styles = styles;
        this.htmls = Array.from(htmls);
    }
    setAttribute(att){
        this.attributes = att;
    }
    setStyles(stl){
        this.styles = stl;
    }
    addHtmlInBack(html){
        this.htmls.push(html);
    }
    addHtmlInForward(html){
        this.htmls.unshift(html);
    }
    getHtml(){
        let result = "";
        if(this.isSelfClosing){
            result += `<${this.tagname} ${this.another} style = "${this.styles}" class = "${this.attributes}">`;
            if(this.htmls != null){
                for(let elem of this.htmls){
                    result += elem.getHtml();
                }
            }
            result += this.text;
            result += `</${this.tagname}>`;
        }
        else{
            result += `<${this.tagname} style = "${this.styles} class = ${this.attributes}"/>`;
        }
        return result;
    }
}

let h3 = new HtmlElement("h3",true,"What is Lorem Ipsum?");
let img = new HtmlElement("img",true,"","",`src = "photo.jpg" alt = "Lorem Ipsum"`,"width:100%;");
let a = new HtmlElement("a",true,"More...","",`href = "#" target = "_blank`);
let p1 = new HtmlElement("p",true,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione esse tenetur enim distinctio. Nostrum totam, voluptates molestiae quod sed harum sapiente id perferendis perspiciatis hic repellendus magni veniam vero necessitatibus distinctio ad iure iste tenetur dolore quam ut. Ratione, consequatur in maiores placeat quis omnis blanditiis laudantium praesentium vitae.","","text-align: justify;",[a]);
let firstdiv = new HtmlElement("div",true,"","","","width:300px;margin: 10px;",[h3,img,p1]);
let secondsdiv = new HtmlElement("div",true,"","","","width:300px;margin: 10px;",[h3,img,p1]);
let maindiv = new HtmlElement("div",true,"","",`id = "wraper"`,"display:flex;",[firstdiv,secondsdiv]);
document.write(maindiv.getHtml());

class CssClass{
    constructor(name,styles = []){
        this.name = name;
        this.styles = Array.from(styles);
    }
    setStyle(stl){
        this.styles.push(stl);
    }
    removeStyle(i){
        this.styles.splice(i,1);
    }
    getCss(){
        let result = "";
        result = "." + this.name + "{";
        for(let elem of this.styles){
            result += elem;
        }
        result += "}";
        return result;
    }
}
let css1 = new CssClass("wrap",["display:flex;"]);
let css2 = new CssClass("block",["width:300px;margin:10px;"]);
let css3 = new CssClass("img",["width:100%;"]);
let css4 = new CssClass("text",["text-align:justify;"]);
let divthird = document.querySelector("#third");
divthird.innerHTML = css1.getCss();

class HtmlBlock{
    constructor(styles = [],html){
        this.styles = Array.from(styles);
        this.html = html;
    }
    getCode(){
        let result = `<style>`;
        for(let elem of this.styles){
            result += elem.getCss();
        }
        result += `</style>`;
        result += this.html.getHtml();
        return result;
    }
}
let h32 = new HtmlElement("h3",true,"What is Lorem Ipsum?");
let img2 = new HtmlElement("img",true,"","img",`src = "photo.jpg" alt = "Lorem Ipsum"`);
let a2 = new HtmlElement("a",true,"More...","",`href = "#" target = "_blank`);
let p12 = new HtmlElement("p",true,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione esse tenetur enim distinctio. Nostrum totam, voluptates molestiae quod sed harum sapiente id perferendis perspiciatis hic repellendus magni veniam vero necessitatibus distinctio ad iure iste tenetur dolore quam ut. Ratione, consequatur in maiores placeat quis omnis blanditiis laudantium praesentium vitae.","text","",[a2]);
let firstdiv2 = new HtmlElement("div",true,"","block","","",[h32,img2,p12]);
let secondsdiv2 = new HtmlElement("div",true,"","block","","",[h32,img2,p12]);
let maindiv2 = new HtmlElement("div",true,"","wrap",`id = "wraper"`,"",[firstdiv2,secondsdiv2]);
let main = new HtmlBlock([css1,css2,css3,css4],maindiv2);
document.write(main.getCode());