let btn=document.createElement("button");
btn.innerText="Dark Mode";
let bdy=document.querySelector("body");
bdy.prepend(btn);
btn.setAttribute("id","darkmode");
let mode="light";
btn.addEventListener("click",()=>{
        if(mode==="light"){
            btn.style.color="black";
            bdy.style.backgroundColor="grey";
            mode="dark";
        }
        else
        {
            btn.style.color="white";
            bdy.style.backgroundColor;
            mode="light";
        }
})
