
let menuBtn = document.getElementById('mobile-btn');
let exitBtn = document.getElementById('exit-btn');

const navBar = document.querySelector('nav');


menuBtn.addEventListener('click', ()=>{
    return navBar.classList.add('menu-btn');
})

exitBtn.addEventListener('click', ()=>{
    return navBar.classList.remove('menu-btn');
})