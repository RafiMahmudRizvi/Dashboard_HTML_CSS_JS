const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");
const themeToggler = document.querySelector("#theme_toggler");

//SHOW SIDEBAR
menuBtn.addEventListener("click",()=>{
    sideMenu.style.display = 'block'
})
//HIDE SIDEBAR
closeBtn.addEventListener("click",()=>{
    sideMenu.style.display = 'none'
})
//CHANGE THEME
themeToggler.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme-vars")
    themeToggler.querySelector("span:nth-child(1").classList.toggle('active')
    themeToggler.querySelector("span:nth-child(2").classList.toggle('active')
})