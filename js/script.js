const b = document.getElementById("burger");
const c = document.getElementById("close");
const sm = document.getElementById("scroll-menu"); 
b.addEventListener("click",()=>{
    sm.classList.toggle("t-scroll-menu");
});

c.addEventListener("click",()=>{
    sm.classList.toggle("t-scroll-menu");
});