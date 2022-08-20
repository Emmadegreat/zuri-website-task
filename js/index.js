const tri_1 = document.querySelector('.tri_1');
const pp =document.querySelector('#pp');
tri_1.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    pp.style.backgroundColor = 'red';
})

/*const dd = document.querySelector('.tri1');
const mo = document.querySelector('.mode_1');

function Toggle() {
    mo.classList.toggle('show-mod1');
}

function windowOnClick(event) {
    if (event.target === mo) {
        Toggle();
    }
}

dd.addEventListener('click', Toggle);
window.addEventListener('click', windowOnClick);


window.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === mod_1) {
        mo.classList.toggle('show-mod1');
    }
});

*/


const links = document.querySelectorAll('.link');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

const mod = document.querySelector(".mod");
const toggle = document.querySelectorAll('.tri');
toggle.forEach(tri => {
    tri.addEventListener('click', (e) => {
        e.preventDefault();
        mod.classList.toggle("show-mod");
    })
});

window.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target === mod) {
        mod.classList.toggle('show-mod');
    }
});



