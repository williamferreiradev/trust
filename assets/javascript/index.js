const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".list");
const links = document.querySelectorAll(".list a");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
});

links.forEach(links => {
    links.addEventListener("click", () =>{
        hamburger.classList.remove('active');
        navBar.classList.remove('active');
    })
})