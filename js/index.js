const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

const mod = document.querySelector(".mod");
const tri = document.querySelector(".tri");
const close = document.querySelector(".close");

function toggleMod() {
    mod.classList.toggle("show-mod");
}

function windowOnClick(event) {
    if (event.target === mod) {
        toggleMod();
    }
}

tri.addEventListener("click", toggleMod);
window.addEventListener("click", windowOnClick);
closeB.addEventListener("click", toggleMod);

