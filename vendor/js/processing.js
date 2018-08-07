const interact = require('interact.min');
const jquery = require('../jquery/jquery.min')

function addText(){

    var title = "Constructing HTML Elements";

    var html = [
        '<div class="tutorial">',
        '<h1 class="tutorial-heading">' + title + '<h1>',
        '</div>'
    ].join("\n");

    $("#parent").append(html);

}