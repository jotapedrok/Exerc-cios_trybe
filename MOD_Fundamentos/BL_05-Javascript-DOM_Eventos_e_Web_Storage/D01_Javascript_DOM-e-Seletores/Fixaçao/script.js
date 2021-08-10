// document.querySelector('#footer-container').style.backgroundColor = '#133633';
// document.querySelector('h1').style.backgroundColor = '#5ab269';
// document.querySelector('.emergency-tasks').style.backgroundColor = '#f39d83';
// document.querySelector('.no-emergency-tasks').style.backgroundColor = '#f9db5e';

function colors(destination, cor) {
    document.querySelector(destination).style.backgroundColor = cor;
}

colors('#footer-container', '#133633');
colors('h1', '#5ab269');
colors('.emergency-tasks', '#f39d83');
colors('.no-emergency-tasks', '#f9db5e')

for (let i = 0; i < document.querySelectorAll('.emergency-tasks h3').length; i += 1) {
    document.querySelectorAll('.emergency-tasks h3')[i].style.backgroundColor = '#ae77f2';
}
for (let i = 0; i < document.querySelectorAll('.no-emergency-tasks h3').length; i += 1) {
    document.querySelectorAll('.no-emergency-tasks h3')[i].style.backgroundColor = '#232525';
}
document.body.innerHTML = document.body.innerHTML + '<h1><em>Administrador de tempo finalizado<em></h1>';