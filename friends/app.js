console.log("Hello World");

let btn1=document.querySelector("button");

let abc = document.querySelector("div");
btn1.onclick = function () {
    abc.classList.add("flash");
    btn1.classList.add("opa0");
}

let btn2=document.querySelector("#btn6");

btn2.onclick = function () {
    abc.classList.remove("flash");
    btn1.classList.remove("opa0");

}
