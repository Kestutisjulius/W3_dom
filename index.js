//const grandparent = document.getElementById('grandparent-id');
//const grandparent = document.querySelector('#grandparent-id');
//const grandparent = document.querySelector('.grandparent');
//const parents = Array.from(document.getElementsByClassName('parent'));
//const parent = document.querySelector('.parent');
//const parents = document.querySelectorAll('.parent');
//const parents = Array.from(grandparent.children);
//const parentOne = parents[0];
//const children = parentOne.children;
//const childOne = grandparent.querySelector('.child');
//const children = grandparent.querySelectorAll('.child');
const childOne = document.querySelector('#child-one');
const grandParent = childOne.closest('.grandparent');
const childTwo = childOne.nextElementSibling;
//const parent = childOne.parentElement;
//const grandParent = parent.parentElement;
//children.forEach(changeColor);
changeColor(childTwo.previousElementSibling);
//changeColor(childOne);
function changeColor(element) {
    element.style.backgroundColor = '#333';
}