document.addEventListener("DOMContentLoaded", function(){

    let div = document.getElementById("button_div");
    let btn = document.querySelector("button");

    div.addEventListener("click", function() {
        alert("Hola! soy el div");

    });

    
    btn.addEventListener("click", function(event) {
        alert("Hola!");
        event.stopPropagation();
    });


})