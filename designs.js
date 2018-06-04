let rows = document.getElementById("inputHeight"),
    columns = document.getElementById("inputWeight"),
    sizePicker = document.getElementById("sizePicker"),
    colorPicker = document.getElementById("colorPicker"),
    pixelCanvas = document.getElementById("pixelCanvas");



//  fill pixel
document.addEventListener("click", function (e) {
    let pixel = e.target;
    if (pixel.classList.contains("pixel")) {
        if (pixel.classList.contains("painted")) {
            pixel.style.backgroundColor = "transparent";
            pixel.classList.remove("painted");
        } else {
            pixel.style.backgroundColor = colorPicker.value;
            pixel.classList.add("painted");
        }

    }
});


// create canvas
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    let canvas = "";

    for (let indexRows = 0; indexRows < rows.value; indexRows++) {
        canvas += "<tr>";
        for (let indexCol = 0; indexCol < columns.value; indexCol++) {
            canvas += "<td class='pixel'></td>";
        }
        canvas += "</tr>";
    }
    pixelCanvas.innerHTML = canvas;
});