
var canvas = new fabric.Canvas('parent');
// Define an array with all fonts
var fonts = ["Pacifico", "VT323", "Quicksand", "Inconsolata"];

var textbox = new fabric.Textbox('New text', {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 20
});

canvas.add(textbox).setActiveObject(textbox);
fonts.unshift('Times New Roman');
// Populate the fontFamily select
var select = document.getElementById("font-family");

fonts.forEach(function(font) {
    var option = document.createElement('option');
    option.innerHTML = font;
    option.value = font;
    select.appendChild(option);
});

// Apply selected font on change
document.getElementById('font-family').onchange = function() {
    if (this.value !== 'Times New Roman') {
        loadAndUse(this.value);
    } else {
        canvas.getActiveObject().set("fontFamily", this.value);
        canvas.requestRenderAll();
    }
};

function loadAndUse(font) {
    var myfont = new FontFaceObserver(font)
    myfont.load()
        .then(function() {
            // when font is loaded, use it.
            canvas.getActiveObject().set("fontFamily", font);
            canvas.requestRenderAll();
        }).catch(function(e) {
        console.log(e)
        alert('font loading failed ' + font);
    });
}