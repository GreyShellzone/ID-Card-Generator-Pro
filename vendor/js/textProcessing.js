
var lastNumber = 50;

function addTextBox() {
    var canvas = new fabric.Canvas('parent');
    // Define an array with all fonts
    var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];

    var textbox = new fabric.Textbox('New text', {
        left: lastNumber,
        top: lastNumber,
        width: 150,
        fontSize: 20
    });

    lastNumber += 10;
    canvas.add(textbox).setActiveObject(textbox);
    fonts.unshift('Times New Roman');
    textbox = null;
}
