const navbarTogglerButton = document.getElementById('navbarTogglerButton');

navbarTogglerButton.addEventListener('click', function(){
    const navbarTogglerDisplay = document.getElementById('navbarTogglerDisplay');
    navbarTogglerDisplay.classList.toggle('show');
})