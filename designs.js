let submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', function(event) {
    makeGrid();
    event.preventDefault();
});

let colorButton = document.getElementById('colorPicker');
let color = 'black';
colorButton.addEventListener('change', function() {
    color = colorButton.value;
});

function makeGrid() {
    let gridWidth = document.getElementById('inputWidth').value;
    let gridHeight = document.getElementById('inputHeight').value;
    let pixelCanvas = document.getElementById('pixelCanvas');
    let tableHtml = "";

    for (let i = 0; i < gridHeight; i++) {
		tableHtml += '<tr>';
		for (let i = 0; i < gridWidth; i++) {
			tableHtml += '<td></td>';
		}
		tableHtml += '</tr>';
    }
    pixelCanvas.innerHTML = tableHtml;
    
	pixelCanvas.addEventListener('click', function(e) {
		e.target.setAttribute('style', `background-color: ${color}`);
	});
}