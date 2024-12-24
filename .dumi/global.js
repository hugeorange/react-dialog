const primaryBase = localStorage.getItem('primary-base') || '#335CFF';

const root = document.querySelector(':root');
root.style.setProperty('--primary-base', primaryBase);
