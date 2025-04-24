let menu_desplegable = document.getElementById("menu");
let boton_cerrar = document.getElementById("boton_menu");

function abrir_cerrar_menu() {
  menu_desplegable.classList.toggle("abrir_menu"); 
  boton_cerrar.classList.toggle("colocar_x");

  if (boton_cerrar.innerText === "☰") {
    boton_cerrar.innerText = "✖";
  } else {
    boton_cerrar.innerText = "☰";
  }
}
