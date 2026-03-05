const menu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav-links");

if(menu){
  menu.addEventListener("click",()=>{
    nav.classList.toggle("active");
  });
}

const faq = document.querySelectorAll(".faq-question");

faq.forEach(item=>{
  item.addEventListener("click",()=>{
    item.nextElementSibling.classList.toggle("active");
  });
});