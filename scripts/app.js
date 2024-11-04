canvas = document.getElementById('canvas');
window.addEventListener('click', (e) => {
    posx = e.clientX - canvas.offsetLeft;
	posy = e.clientY - canvas.offsetTop;
    console.log(posx, posy);
});
