const mobileButton = document.querySelector('.mobile-button');
const navList = document.querySelector('.nav-list');

mobileButton.addEventListener('click', () => {
    mobileButton.classList.toggle('burger-btn-active')
    navList.classList.toggle('nav-list-active')
})