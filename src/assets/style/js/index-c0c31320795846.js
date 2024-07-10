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

// const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'code-block');

// const $defaultMessage = document.getElementById('default-message');
// const $successMessage = document.getElementById('success-message');

// clipboard.updateOnCopyCallback((clipboard) => {
//     showSuccess();

//     // reset to default state
//     setTimeout(() => {
//         resetToDefault();
//     }, 2000);
// })

// const showSuccess = () => {
//     $defaultMessage.classList.add('hidden');
//     $successMessage.classList.remove('hidden');
// }

// const resetToDefault = () => {
//     $defaultMessage.classList.remove('hidden');
//     $successMessage.classList.add('hidden');
// }

// const copyButtonLabel = "Copy Code";

// // use a class selector if available
// let blocks = document.querySelectorAll("pre");

// blocks.forEach((block) => {
//   // only add button if browser supports Clipboard API
//   if (navigator.clipboard) {
//     let button = document.createElement("button");

//     button.innerText = copyButtonLabel;
//     block.appendChild(button);

//     button.addEventListener("click", async () => {
//       await copyCode(block, button);
//     });
//   }
// });

// async function copyCode(block, button) {
//   let code = block.querySelector("code");
//   let text = code.innerText;

//   await navigator.clipboard.writeText(text);

//   // visual feedback that task is completed
//   button.innerText = "Code Copied";

//   setTimeout(() => {
//     button.innerText = copyButtonLabel;
//   }, 700);
// }

const copyButton = document.getElementById('copy-button');
const codeSnippet = document.getElementById('code-snippet');
const copyButtonSecond = document.getElementById('copy-button-second');
const codeSnippetSecond = document.getElementById('code-snippet-second');

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(codeSnippet.innerText).then(() => {
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>Copied';
        setTimeout(() => {
            copyButton.innerHTML = originalText;
        }, 2000);
    });
});
copyButtonSecond.addEventListener('click', () => {
    navigator.clipboard.writeText(codeSnippetSecond.innerText).then(() => {
        const originalText = copyButtonSecond.innerHTML;
        copyButtonSecond.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>Copied';
        setTimeout(() => {
            copyButtonSecond.innerHTML = originalText;
        }, 2000);
    });
});

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
