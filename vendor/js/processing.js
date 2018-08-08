const interact = require('interact.min');
const jquery = require('../jquery/jquery.min')

function addText(){

    var title = "Je suis Nathan TELA";

    var html = [
        '<canvas class="tutorial">',
        '<canvas class="tutorial-heading">' + title + '</canvas>',
        '</canvas>'
    ].join("\n");

    $("#parent").append(html);

}