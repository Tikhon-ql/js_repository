class Style{
    constructor(name,value){
        this.name = name;
        this.value = value;
    }
}
let styles = [];
// styles.push(new Style("color","chocolate"));
// styles.push(new Style("text-align","centre"));
// styles.push(new Style("font-size","100px"));
function writeTextWithSyles(styles,str){
    let stls = "";
    for(let elem of styles){
        // console.log(elem.name + elem.value);
        stls += `${elem.name}:${elem.value};`;
    }
    document.write(`<p style = ${stls}>${str}</p>`);
}
// writetTextWithSyles(styles,"Hello world!!!");
let btn = document.querySelector("button");
btn.onclick = () => {
    let text = document.querySelectorAll("input")[0].value;
    let str = document.querySelectorAll("input")[1].value.split(';');
    if(text != ""){
        for(let elem of str){
            let s = elem.split(':');
            styles.push(new Style(s[0],s[1]));
        }
        writeTextWithSyles(styles,text);
    }
}