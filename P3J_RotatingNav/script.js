const open = document.getElementById('open');
const closed = document.getElementById('closed');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));

