function navigation() {
    $(".fa-bars").toggleClass("fa-bars-00");
    $(".container").toggleClass("containerone");
}

var i = 0;
var j = 5;

$(document).ready(function() {
    $(".btn_siguiente").click(function() {
        $(".pagina" + (i + 1)).hide();
        i = (j + i + 1) % j;
        $(".pagina" + (i + 1)).show();
    });
    $(".btn_anterior").click(function() {
        $(".pagina" + (i + 1)).hide();
        i = (j + i - 1) % j;
        $(".pagina" + (i + 1)).show();
    });
});