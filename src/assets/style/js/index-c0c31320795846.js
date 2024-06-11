// Bars
const bars = document.querySelector('#bars');
const sidebarMenu = document.querySelector('#sidebar');
const closeBar = document.querySelector('#close');

bars.addEventListener('click', function() {
    bars.classList.toggle('bars-active');
    sidebarMenu.classList.toggle('hidden');
});

closeBar.addEventListener('click', function() {
    sidebarMenu.classList.add('hidden');
});

// Click outside close element id
window.onclick = function(e) {
    if (e.target == sidebarMenu){
        sidebarMenu.classList.add('hidden');
    }
};

// Dark Mode
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(Preters-color-scheme: dark)").matches;

// Icon Toggling
const IconToggle = () => {
    sunIcon.classList.toggle('display-none');
    moonIcon.classList.toggle('display-none');
};

// Initial Theme Check
const themeCheck = () => {
    if(userTheme === "dark" || (!userTheme && systemTheme)){
        document.documentElement.classList.add("dark");
        sunIcon.classList.add("display-none");
        return;
    }
    moonIcon.classList.add("display-none");
};

// Manual Theme Switch
const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        IconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    IconToggle();
}

// Call Theme Switch on Clicking Buttons
sunIcon.addEventListener('click', () => {
    themeSwitch();
});

moonIcon.addEventListener('click', () => {
    themeSwitch();
});


//Invoke Theme Check on Initial load
themeCheck();

// To Top
// const toTop = document.getElementById("totop");

// window.onscroll = function () {scrollFunction()};

// function scrollFunction(){
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
//         toTop.style.display = "block";
//     }else {
//         toTop.style.display = "none";
//     }
// };

// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// };

//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#totop');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex')
    }
}
