// This file is here to show that an external script can then make use of the modifications you have
// made to the pre-existing objects

window.onload = function () {
    document.createElementId(); // should fail, print's no on browser console

    var element = document.createElementId('div', 'test');
    document.body.appendChild(element);
};