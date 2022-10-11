// grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if (element) return element;
    throw new Error(`Something went , make sure that ${selector} exists or is typed correctly.`)
};
// Nav styles an scoll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrolY >= 15) {
        headerElement.classList.add('activated');
    } else {
        headerElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader);

//open menu & search pop-up 
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated')
};
menuToggleIcon.addEventListener('click', toggleMenu)


// Switch theme/add to local storage 
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');

const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    bodyElement.classList.add('light-theme');
}
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if (bodyElement.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActivate');
    } else {
        localStorage.removeItem('currentTheme');
    }
})