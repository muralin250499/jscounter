
const addition=document.getElementById("add");
const subtraction=document.getElementById("sub");
const res=document.getElementById("resuLt");
function add1()
{
    let currentresult=parseInt(document.getElementById("resuLt").value); 
   if(currentresult<10)
   {
    currentresult=currentresult+1;
    res.value = currentresult;
    console.log(res.value);
   }
}
function sub1()
{
    let currentresult=parseInt(document.getElementById("resuLt").value); 
    if(currentresult>0)
    {
    currentresult=currentresult-1;
    res.value = currentresult;
    }
}

addition.addEventListener("click",add1);
subtraction.addEventListener("click",sub1);
