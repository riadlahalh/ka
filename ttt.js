

var textarea =document.getElementById("text");
var result=document.getElementById("result");
var select=document.getElementById("select");
textarea.addEventListener("input",()=>{
    rr();
});
select.addEventListener("change",()=>{
    rr();
});
function rr()  {
    if (select.value=="decode") {
        result.value= window.atob(textarea.value) ;
    }else{
        result.value=window.btoa(textarea.value) ;
    }
} 