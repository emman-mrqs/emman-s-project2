function toggleDarkMode (darkMode, lightMode, darkModeSide, lightModeSide) {
    const darkModeMainBtn = document.querySelector("#" + darkMode);
    const lightModeMainBtn = document.querySelector("#" + lightMode);
    const darkModeSideBtn = document.querySelector("#" + darkModeSide);
    const lightModeSideBtn = document.querySelector("#" + lightModeSide);

    const sideBarDarkMode = document.querySelector("#side-bar");

    const navDarkMode = document.querySelector("#nav-bar");
    const bodyDarkMode = document.querySelector("body");
    const sectionDarkMode = document.querySelectorAll(".bg-colors-div");

    const btnDarkMode = document.querySelector(".btn");

    darkModeMainBtn.addEventListener("click", function(){

        localStorage.setItem("theme", "dark");

        darkModeMainBtn.style.display ="none";
        lightModeMainBtn.style.display ="block";
        darkModeSideBtn.style.display = "none";
        lightModeSideBtn.style.display = "block";


        setTimeout(() => {
            navDarkMode.classList.add("navDarkMode");
            bodyDarkMode.classList.add("bodyDarkMode");
            
            sideBarDarkMode.style.backgroundColor = "#1a1a1a";

            sectionDarkMode.forEach(element => {
                element.style.backgroundColor = "#1a1a1a";
            });

            btnDarkMode.style.backgroundColor ="white";

        },  170);
    
    });

    darkModeSideBtn.addEventListener("click", function(){

        localStorage.setItem("theme", "dark");

        darkModeMainBtn.style.display ="none";
        lightModeMainBtn.style.display ="block";
        darkModeSideBtn.style.display = "none";
        lightModeSideBtn.style.display = "block";


        setTimeout(() => {
            navDarkMode.classList.add("navDarkMode");
            bodyDarkMode.classList.add("bodyDarkMode");

            sideBarDarkMode.style.backgroundColor = "#1a1a1a";

            sectionDarkMode.forEach(element => {
                element.style.backgroundColor = "#1a1a1a";

            });
            
            btnDarkMode.style.backgroundColor ="white";

        },  170);
    });
}



function toggleLightMode (darkMode, lightMode, darkModeSide, lightModeSide) {
    const darkModeMainBtn = document.querySelector("#" + darkMode);
    const lightModeMainBtn = document.querySelector("#" + lightMode);
    const darkModeSideBtn = document.querySelector("#" + darkModeSide);
    const lightModeSideBtn = document.querySelector("#" + lightModeSide);

    const sideBarDarkMode = document.querySelector("#side-bar");

    const navDarkMode = document.querySelector("#nav-bar");
    const bodyDarkMode = document.querySelector("body");
    const sectionDarkMode = document.querySelectorAll(".bg-colors-div");

    const btnDarkMode = document.querySelector(".btn");



    lightModeMainBtn.addEventListener("click", function() {

        localStorage.setItem("theme", "light");

        darkModeMainBtn.style.display ="block";
        lightModeMainBtn.style.display ="none";
        darkModeSideBtn.style.display = "block";
        lightModeSideBtn.style.display ="none";
        


        setTimeout(() => {
            navDarkMode.classList.remove("navDarkMode");
            bodyDarkMode.classList.remove("bodyDarkMode");

            sideBarDarkMode.style.backgroundColor = "white";

               
            sectionDarkMode.forEach(element => {
                element.style.backgroundColor = "rgb(236, 231, 231)";
            });

            btnDarkMode.style.backgroundColor ="rgb(236, 231, 231)";

        },  170);
    });

    lightModeSideBtn.addEventListener("click", function() {

        localStorage.setItem("theme", "light");

        lightModeMainBtn.style.display ="none";
        darkModeMainBtn.style.display ="block";
        lightModeSideBtn.style.display ="none";
        darkModeSideBtn.style.display = "block";


        setTimeout(() => {
            navDarkMode.classList.remove("navDarkMode");
            bodyDarkMode.classList.remove("bodyDarkMode");

            sideBarDarkMode.style.backgroundColor = "white";

            sectionDarkMode.forEach(element => {
                element.style.backgroundColor = "rgb(236, 231, 231)";
            });

            btnDarkMode.style.backgroundColor ="rgb(236, 231, 231)";

        },  170);
        
    });
}


function applySavedTheme () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.querySelector("#darkMode").style.display ="none";;
        document.querySelector("#lightMode").style.display ="block";
        document.querySelector("#darkMode2").style.display = "none";
        document.querySelector("#lightMode2").style.display = "block";

        document.querySelector("#side-bar").style.backgroundColor = "#1a1a1a";

        document.querySelector("#nav-bar").classList.add("navDarkMode");
        document.querySelector("body").classList.add("bodyDarkMode");
        document.querySelector(".btn").style.backgroundColor ="white";

        document.querySelectorAll(".bg-colors-div").forEach(element => {
            element.style.backgroundColor = "#1a1a1a";
        });
  
    } else if (savedTheme === "light") {
        document.querySelector("#darkMode").style.display ="block";
        document.querySelector("#lightMode").style.display ="none";;
        document.querySelector("#darkMode2").style.display ="block";
        document.querySelector("#lightMode2").style.display = "none";
    
        document.querySelector("#side-bar").style.backgroundColor = "white";
    
        document.querySelector("#nav-bar").classList.remove("navDarkMode");
        document.querySelector("body").classList.remove("bodyDarkMode");
        document.querySelector(".btn").style.backgroundColor ="rgb(236, 231, 231)";
        
        document.querySelectorAll(".bg-colors-div").forEach(element => {
            element.style.backgroundColor = "rgb(236, 231, 231)";
        });
    }
}

function handleDarkLightMode (){
    toggleLightMode("darkMode", "lightMode", "darkMode2", "lightMode2");
    toggleDarkMode("darkMode", "lightMode", "darkMode2", "lightMode2");
    applySavedTheme();
}

window.addEventListener("DOMContentLoaded", handleDarkLightMode );


function toggleMenuIcon () {
document.querySelector("#menu-icon").addEventListener("click", function(){
    document.querySelector("#side-bar").classList.add("active");
    document.querySelector("body").style.overflow ="hidden";
    document.querySelector("#menu-icon").classList.remove("controls");
    document.querySelector("#menu-icon").style.display = "none";
    document.querySelector("#x-icon").style.display = "block";
    document.querySelector("#x-icon").classList.add("controls");
 });
}

function toogleCloseIcon () {
document.querySelector("#x-icon").addEventListener("click", function(){
    document.querySelector("#side-bar").classList.remove("active");
    document.querySelector("body").style.removeProperty("overflow");
    document.querySelector("#menu-icon").classList.add("controls");
    document.querySelector("#x-icon").style.removeProperty("display");
    document.querySelector("#menu-icon").style.removeProperty("display");
    document.querySelector("#x-icon").classList.remove("controls");
 });
}

function toogleSideBar() {
    const mq = window.matchMedia("(max-width: 708px)");

    if (mq.matches){
        if (document.querySelector("#menu-icon").style.display === "none"){
            document.querySelector("body").style.overflow ="hidden";
        }
        toggleMenuIcon();
        toogleCloseIcon();

        document.querySelector("#x-icon").style.display = "block";
        document.querySelector("#menu-icon").style.removeProperty("display");

        document.querySelectorAll("#side-bar a").forEach(link => {
            link.addEventListener("click", function(){
                document.querySelector("#side-bar").classList.remove("active");
                document.querySelector("body").style.removeProperty("overflow");
                document.querySelector("#menu-icon").classList.add("controls");
                document.querySelector("#menu-icon").style.display = "block";
                document.querySelector("#x-icon").style.display = "none";
                document.querySelector("#x-icon").classList.remove("controls");
            });
        });

         
    }
    else {
        document.querySelector("#x-icon").style.removeProperty("display");
        document.querySelector("body").style.removeProperty("overflow");
    }
}
toogleSideBar();
window.addEventListener('resize', toogleSideBar);

