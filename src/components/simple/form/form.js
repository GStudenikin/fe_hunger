import jquery from "jquery";
export default (window.$ = window.jQuery = jquery);

$(document).ready(function(){
    $("#date").inputmask({alias: "date", inputFormat: "dd/mm/yyyy"});
})