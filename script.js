const submit = document.querySelector('#submit');
const form = document.querySelector('.form');

submit.addEventListener('click', (e) => {
    return popup();
});

(function ($) {
    window.fnames = new Array();
    window.ftypes = new Array(); fnames[0] = 'EMAIL';
    ftypes[0] = 'email'; fnames[1] = 'FNAME';
    ftypes[1] = 'text'; fnames[2] = 'LNAME';
    ftypes[2] = 'text'; fnames[3] = 'ADDRESS';
    ftypes[3] = 'address';
    fnames[4] = 'PHONE';
    ftypes[4] = 'phone';
    fnames[5] = 'BIRTHDAY';
    ftypes[5] = 'birthday';
}(jQuery));
var $mcj = jQuery.noConflict(true);

function popup() {
    const div = document.createElement('div');
    div.classList.add('popup');
    document.body.appendChild(div);

    const div_1 = document.createElement('div');
    div_1.setAttribute('id', 'hover')
    div.appendChild(div_1);
    
    const div_2 = document.createElement('div');
    div_2.classList.add('img');
    div_2.innerHTML = "<img src=\"./assets/imgs/email.png\">";
    div_1.appendChild(div_2);

    const h2 = document.createElement('h2');
    h2.innerText = 'Thanks For Subscribing';
    div_1.appendChild(h2);

    const para = document.createElement('p');
    para.innerText = 'We would get back to you';
    div_1.appendChild(para);

    const btn_2 = document.createElement('button');
    btn_2.innerHTML = '<a href="./index.html"> Back To Home</a>';
    div_1.appendChild(btn_2);
};