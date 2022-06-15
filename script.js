const btn = document.querySelector('button');
const form = document.querySelector('form');
btn.addEventListener('click', popup);

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

function popup(e) {
    const div = document.createElement(div);
    div.classList.add('popup');
    form.appendChild(div);
}