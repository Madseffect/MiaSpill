$(document).ready(function(){
    var file = "*/amount.txt"
    var amount="";
    file.open('r');
    while (!file.eof) {
        amount += file.readln() + "\n";
    }
    $("#amount").html(amount);
})