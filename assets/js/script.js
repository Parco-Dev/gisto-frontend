/* CONTENT HEIGHT CALCULATION */

function contentFooter() {
    const header = document.querySelector('.header-container').offsetHeight;
    const footer = document.querySelector('.site-footer').offsetHeight;
    if (window.innerWidth > 992) {
        const content = document.querySelector('.main');
        content.style.minHeight = `calc(100vh - ${header}px - ${footer}px)`;
    }
}

function handleResize() {
    contentFooter();
}

document.addEventListener('DOMContentLoaded', function() {
    contentFooter();
    window.addEventListener('resize', handleResize);
    console.log("ready");
});