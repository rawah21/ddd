

var nav = document.querySelector(".hamb");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

nav.addEventListener("click",function(){
    this.classList.toggle("click");
    navList.classList.toggle("open");
})


    
var days = ["sunday" , "monday","tuesday","wednesday","thursday","friday","saturday"];
var day = new Date();
var wditdy = days[day.getDay()]
var hour = day.getHours();
var min = day.getMinutes();
var sec = day.getSeconds();

document.getElementById("dam").innerHTML = wditdy+" "+ hour+":"+min;

function dark() {
    document.querySelector(".hero").classList.toggle("dark");
    
}