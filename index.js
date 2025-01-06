let preent1=document.querySelector("#present");
let count=0;
const dateInput = document.querySelector("#dd");
const output = document.querySelector("#det2");  
dateInput.addEventListener("input", function () {
    const date = dateInput.value;
    output.innerHTML = `${date}`;
    localStorage.setItem("date",JSON.stringify(date))
});
function details(){
    count++;
    localStorage.setItem("present",JSON.stringify(count));
    document.querySelector("#det").innerHTML=`${count}`;
    let display=localStorage.getItem("preran");
         
}
let absent=0;
function details1(){
   
    absent++;
    document.querySelector("#det1").innerHTML=`${absent}`;
    let display=localStorage.setItem("absent",JSON.stringify(absent));
    
}
function show(){
    if(count!=0)
    {
        document.querySelector("#dq").innerHTML=`preran was present on${localStorage.getItem("date")}`;
    }
    if(absent!=0)
    {
        document.querySelector("#pp").innerHTML=`preran was absent on${localStorage.getItem("date")}`;
    }
    let ll=new Date();
    document.querySelector("#aa").innerHTML=`time(hrs-min):${ll.getHours()}-${ll.getMinutes()}`;
}
function abc(){
    localStorage.clear();
    document.querySelector("#det2").innerHTML=" ";
    document.querySelector("#det1").innerHTML=" ";
    document.querySelector("#det").innerHTML=" ";
    document.querySelector("#pp").innerHTML=" ";
}
window.addEventListener("DOMContentLoaded",function(){
    console.log("page refreshed");
    document.querySelector("#det").innerHTML = localStorage.getItem("present") || 0;
    document.querySelector("#det1").innerHTML = localStorage.getItem("absent") || 0;
    document.querySelector("#det2").innerHTML = JSON.parse(localStorage.getItem("date")) || "";
    document.querySelector("#pp").innerHTML=`preran was absent on${localStorage.getItem("date")}`;
    document.querySelector("#aa").innerHTML=`time(hrs-min):${ll.getHours()}-${ll.getMinutes()}`;
})