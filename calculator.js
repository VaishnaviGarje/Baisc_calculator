let n1;
let n2;
const handleInput1=()=>{
     n1=parseInt(document.querySelector("#num1").value); 
    console.log("input 1 st no=",n1); 
}
const handleInput2=()=>{
     n2=parseInt(document.querySelector("#num2").value);
     
    console.log("input 2 st no=",n2);  
}

const performopr=((userChoice)=>{
 if(userChoice==="add"){
    addopr(n1,n2);
 }else if(userChoice==="sub"){
   subopr(n1,n2);
 }else if(userChoice==="mul"){
    mulopr(n1,n2);
 }else if(userChoice==="div"){
    divopr(n1,n2);
 }else{
    factopr(n1);
 }
});

const addopr=((n1,n2)=>{
    if(isNaN(n1)||isNaN(n2)){
     alert("wrong number entered");
    }else{
     let add=n1+n2;
    document.querySelector(".answer").innerText=`${add}`;
}
});

const subopr=((n1,n2)=>{
    if(isNaN(n1)||isNaN(n2)){
        alert("wrong number entered");
       }else{
    let sub=n1-n2;
    document.querySelector(".answer").innerText=`${sub}`;
   }});



const mulopr=((n1,n2)=>{
    if(isNaN(n1)||isNaN(n2)){
        alert("wrong number entered");
       }else{
    let mul=n1*n2;
    document.querySelector(".answer").innerText=`${mul}`;
   }});

   const divopr=((n1,n2)=>{
    if(isNaN(n1)||isNaN(n2)){
        alert("wrong number entered");
       }else{
    let div=n1/n2;
    document.querySelector(".answer").innerText=`${div}`;
   }});

   const factopr=((n1)=> {
    if(isNaN(n1)){
        alert("wrong number entered");  
        alert("enter number in number1 field for factorial");
       }else{
        let fact=1;
        
        for(let i=n1;i>=1;i--){
           fact=fact*i;
       }
       document.querySelector(".answer").innerText=`${fact}`;
   }});

let operations=document.querySelectorAll(".box");
operations.forEach((operation)=> {
    operation.addEventListener("click",()=>{
        let userchoice=operation.getAttribute("id");
        performopr(userchoice);
    });
});