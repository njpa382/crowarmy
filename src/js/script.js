const logo = document.getElementById('logo')
const particlesDiv = document.getElementById('particles-div')

const btnOpenMenu = document.getElementById('btn-open-menu')
const btnCloseMenu = document.getElementById('btn-close-menu')
const menu = document.getElementById('menu')

const execParticles = () => {
    for(let i = 0; i < 1000; i++)
        particlesDiv.innerHTML +='<div class="circle-particles"><div class="circle"></div></div>'
}

const execMenu = () => {
    btnOpenMenu.addEventListener('click', function() {
        logo.classList.remove('z-50');
        particlesDiv.classList.add('hidden');
        menu.classList.toggle('-translate-x-full');
    });

    btnCloseMenu.addEventListener('click', function() {
        setTimeout(() => logo.classList.add('z-50'), 1000);
        particlesDiv.classList.remove('hidden');
        menu.classList.toggle('-translate-x-full');
    });
}

// main
execParticles()
execMenu()