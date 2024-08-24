const sideMenu = document.querySelector(".side-menu");
const menuLine1 = document.querySelector(".line1");
const menuLine2 = document.querySelector(".line2");
const menuLine3 = document.querySelector(".line3");
const sideBar = document.querySelector(".fa-xmark")


sideMenu.addEventListener("click", () => {
    console.log("click");
    menuLine1.classList.add("deg45");
    menuLine2.classList.add("hide-line");
    menuLine3.classList.add("deg175");
    
}
)

sideBar.addEventListener("click", () => {
    
    menuLine1.classList.remove("deg45");
    menuLine2.classList.remove("hide-line");
    menuLine3.classList.remove("deg175");

})




function backgroundModeChange(toggleId) {
    const backgroundController1 = document.getElementById("toggle1");
    const backgroundController2 = document.getElementById("toggle2");
    const backgroundMode = document.querySelector("body");
    const selectBackgroundMode1 = document.querySelector("label[for='toggle1'] .select-background-mode");
    const selectBackgroundMode2 = document.querySelector("label[for='toggle2'] .select-background-mode");

    // Check which toggle was clicked
    if (toggleId === 'toggle1') {
        if (backgroundController1.checked) {
            backgroundMode.classList.add("dark-mode");
            backgroundMode.classList.remove("light-mode");
            selectBackgroundMode1.classList.add("select-dark-mode");
            selectBackgroundMode2.classList.add("select-dark-mode");
        } else {
            backgroundMode.classList.add("light-mode");
            backgroundMode.classList.remove("dark-mode");
            selectBackgroundMode1.classList.remove("select-dark-mode");
            selectBackgroundMode2.classList.remove("select-dark-mode"); // Synchronize the second toggle
        }
    } else if (toggleId === 'toggle2') {
        if (backgroundController2.checked) {
            backgroundMode.classList.add("dark-mode");
            backgroundMode.classList.remove("light-mode");
            selectBackgroundMode1.classList.add("select-dark-mode"); // Synchronize the first toggle
            selectBackgroundMode2.classList.add("select-dark-mode");
        } else {
            backgroundMode.classList.add("light-mode");
            backgroundMode.classList.remove("dark-mode");
            selectBackgroundMode1.classList.remove("select-dark-mode"); // Synchronize the first toggle
            selectBackgroundMode2.classList.remove("select-dark-mode");
        }
    }
}

// Load saved mode on page load
window.onload = function() {
    const savedMode = localStorage.getItem('backgroundMode');
    const backgroundMode = document.querySelector("body");
    const toggle1 = document.getElementById("toggle1");
    const toggle2 = document.getElementById("toggle2");

    if (savedMode === 'dark') {
        toggle1.checked = true;
        toggle2.checked = true;
        backgroundMode.classList.add("dark-mode");
        backgroundMode.classList.remove("light-mode");
    } else {
        toggle1.checked = false;
        toggle2.checked = false;
        backgroundMode.classList.add("light-mode");
        backgroundMode.classList.remove("dark-mode");
    }
}


const bannerBg = document.querySelectorAll(".banner .bg");
const bannerTitle = document.querySelector(".banner h1")


window.addEventListener("scroll", (event) => {
    let top = this.scrollY;

    bannerBg.forEach((bg,index) => {
        if (index != 0 && index != 8) {
            bg.style.transform = `translateY(${top*index/2}px)`;
        } else if(index == 0) {
            bg.style.transform = `translateY(${top/3}px)`;
        }
        bannerTitle.style.transform = `translateY(${top*4/2}px)`
    })
})
