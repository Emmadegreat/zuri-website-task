const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    })
});
/*const close = document.getElementById('close');
const mod = document.getElementById('mod');
const tri = document.getElementById('tri');

tri.addEventListener('click',(e)=>{
    e.preventDefault();
    mod.classList.add('show-mod');
});
mod.addEventListener('click',(e)=>{
    e.preventDefault();
    mod.style.display = 'none';

});*/
const mod = document.querySelector(".mod");
const tri = document.querySelector(".tri");
const closeButton = document.querySelector(".close");

function toggleMod() {
    mod.classList.toggle("show-mod");
}

function windowOnClick(event) {
    if (event.target === mod) {
        toggleModal();
    }
}

tri.addEventListener("click", toggleMod);
closeButton.addEventListener("click", toggleMod);
window.addEventListener("click", windowOnClick);*/

