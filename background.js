console.log("Hey Melody")
var css = document.querySelector("h3");
var f_color = document.querySelector(".f_color");
var s_color = document.querySelector(".s_color");
var body = document.getElementById("gradient");

function Set_Gradient(){
    body.style.background = "linear-gradient(to right, "+ f_color.value +"," + s_color.value+")";
    css.textContent = body.style.background + ";" ;
}

f_color.addEventListener("input",Set_Gradient);
s_color.addEventListener("input",Set_Gradient);

