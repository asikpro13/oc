//click
document.body.onload = () => {
    document.querySelector("#btnClick").dispatchEvent(new Event("click"));
}

//burger
const menu = document.getElementById("menu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
})

// Dark mode
const modeDark = document.getElementById("modeDark");
const modeWhite = document.getElementById("modeWhite");
const htmlTag = document.querySelector("html");

function togleTheme(tagOne, tagTwo, htmlTag) {
    tagOne.addEventListener("click", () => {
        tagOne.classList.toggle("hidden");
        tagTwo.classList.toggle("hidden");
        htmlTag.classList.toggle("dark");
        if (htmlTag.classList.contains("dark")) {
            localStorage.theme = "dark";
        } else {
            localStorage.theme = "light";
        }
    })
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

togleTheme(modeDark, modeWhite, htmlTag)
togleTheme(modeWhite, modeDark, htmlTag)

//scroll
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}