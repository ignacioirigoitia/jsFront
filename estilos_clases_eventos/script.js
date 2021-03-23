/* let $header = document.querySelector(".header"); */

/* $header.style.backgroundColor = "orange"; */

let $header = document.querySelector(".header-violeta")
$header.classList.add("letras-verdes");

let $nombre = document.querySelector("#nombre"),
    $apellido = document.querySelector("#apellido"),
    $apodo = document.querySelector("#apodo");


$nombre.addEventListener("keydown", (e) => {
    alert("Se precioso la tecla: " + e.key)
});