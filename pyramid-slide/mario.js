
addListneres();
drawPyramid(document.getElementById('symbol').value, document.getElementById('pyrhigh').value);


function addListneres() {
    document.getElementById('symbol').addEventListener('change', myOnChange);
    document.getElementById('pyrhigh').addEventListener('change', myOnChange);
    document.getElementById('val').textContent = document.getElementById('pyrhigh').value;
}

function myOnChange(e) {
    let heght = document.getElementById('pyrhigh').value;
    let symbol = document.getElementById('symbol').value;
    console.log(document.getElementById('val'));
    document.getElementById('val').textContent = heght;
    drawPyramid(symbol, heght);
}

function drawPyramid(symbol, height) {
    let pyramid = document.getElementById('pyramid');
    while (pyramid.firstChild) {
        pyramid.removeChild(pyramid.firstChild);
    }
    height = parseInt(height, 10);
    for (let i  = 2; i <= 1 + height; i++) {
        let p = document.createElement('p');
        let text = document.createTextNode(' '.repeat(height + 1 - i) + symbol.repeat(i));
        p.appendChild(text);
        pyramid.appendChild(p);
    }
}
