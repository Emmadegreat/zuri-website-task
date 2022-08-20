/*======modal============*/
const tri_1 = document.getElementById('tri_1');
const mod_1 = document.getElementById('mod_1');
function Click() {
    mod_1.style.visibility = 'visible';
    mod_1.style.display = 'block';
}

window.addEventListener("click", (e) => {
    //e.preventDefault();
    if (e.target === mod_1) {
        mod_1.style.visibility = 'hidden';
    }
});

const mod = document.querySelector(".mod");
const toggle = document.querySelectorAll('.tri');
toggle.forEach(tri => {
    tri.addEventListener('click', (e) => {
        //e.preventDefault();
        mod.classList.toggle("show-mod");
    })
});

window.addEventListener("click", (e) => {
    //e.preventDefault();
    if (e.target === mod) {
        mod.classList.toggle('show-mod');
    }
});


const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});



