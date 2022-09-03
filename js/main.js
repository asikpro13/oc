const menu = document.getElementById("menu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
})

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

// Dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

togleTheme(modeDark, modeWhite, htmlTag)
togleTheme(modeWhite, modeDark, htmlTag)

// create an array of objects with the id, trigger element (eg. button), and the content element
const accordionItems = [
    {
        id: 'accordion-example-heading-1',
        triggerEl: document.querySelector('#accordion-example-heading-1'),
        targetEl: document.querySelector('#accordion-example-body-1'),
        active: true
    },
    {
        id: 'accordion-example-heading-2',
        triggerEl: document.querySelector('#accordion-example-heading-2'),
        targetEl: document.querySelector('#accordion-example-body-2'),
        active: false
    },
    {
        id: 'accordion-example-heading-3',
        triggerEl: document.querySelector('#accordion-example-heading-3'),
        targetEl: document.querySelector('#accordion-example-body-3'),
        active: false
    }
];

// options with default values
const options = {
    alwaysOpen: true,
    activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
    inactiveClasses: 'text-gray-500 dark:text-gray-400',
    onOpen: (item) => {
        console.log('accordion item has been shown');
        console.log(item);
    },
    onClose: (item) => {
        console.log('accordion item has been hidden');
        console.log(item);
    },
    onToggle: (item) => {
        console.log('accordion item has been toggled');
        console.log(item);
    },
};

const accordion = new Accordion(accordionItems, options);
// open accordion item based on id
accordion.open('accordion-example-heading-2');

// close accordion item based on id
accordion.close('accordion-example-heading-2');

// toggle visibility of item based on id
accordion.toggle('accordion-example-heading-3');