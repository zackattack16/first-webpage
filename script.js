const box = document.getElementById("box");

box.addEventListener("click", changeColor);

function changeColor() {
    const R = Math.floor(Math.random()*255);
    const G = Math.floor(Math.random()*255);
    const B = Math.floor(Math.random()*255);

    box.style.backgroundColor = `rgb(${R},${G},${B})`;
}