let menu_desplegable = document.getElementById("menu");
let boton_cerrar = document.getElementById("boton_menu");

function abrir_cerrar_menu() {
  menu_desplegable.classList.toggle("abrir_menu"); // Agrega o quita la clase para abrir/cerrar el menú
  boton_cerrar.classList.toggle("colocar_x"); // Cambia el icono del botón a una X

  // Alternar entre ☰ y ✖
  if (boton_cerrar.innerText === "☰") {
    boton_cerrar.innerText = "✖";
  } else {
    boton_cerrar.innerText = "☰";
  }
}
