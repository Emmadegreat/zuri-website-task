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
/*
const small = document.querySelectorAll('.small');
const show = document.querySelectorAll('.show');
small.forEach(sm => {
    sm.style.display = 'none';
    sm.style.transition = "all 0.25s";
});    

show.forEach(sh => {
    sh.addEventListener('click', (e) => {
        if (sh.previousSibling.previousSibling.style.display === "none") {
            sh.previousSibling.previousSibling.style.display = "block";
        } else {
            sh.previousSibling.previousSibling.style.display = "none";
        }
    })
});*/


const questions = document.querySelectorAll('.questions');
questions.forEach(question => {
    const show = question.querySelector('.show');
    const small = question.querySelector('.small');
    small.style.display = 'none';
    show.addEventListener('click', (e) => {
        e.preventDefault();
        if (show.previousSibling.previousSibling.style.display === "none") {
            show.previousSibling.previousSibling.style.display = "block";
        } else {
            show.previousSibling.previousSibling.style.display = "none";
        }
    })
});
