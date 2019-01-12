//Objeto literal (coleccion de variables)
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);
document.addEventListener("keydown",dibujarTeclado);
var cuadro = document.getElementById('area_de_dibujo');
var papel = cuadro.getContext("2d");
var x = 100;
var y = 100;
dibujaLinea("red",x - 1, y - 1, x + 1, y + 1,papel);

cuadro.addEventListener("mousemove",movimiento);
cuadro.addEventListener("mouseup",fin);
cuadro.addEventListener("mousedown",inico);
var x1;
var y1;
var x_mov;
var y_mov;
function movimiento(evento){
    //console.log(evento);
    x_mov = evento.layerX;
    y_mov = evento.layerY;
    //console.log("Eje x_mov = " + x_mov);
    //console.log("Eje y_mov = " + y_mov);
}
function inico(evento){
  x1 = evento.layerX;
  y1 = evento.layerY;
  //console.log("Eje x_d = " + x1);
  //console.log("Eje y_d = " + y1);
}

function fin(evento){
  dibujaLinea("red", x1, y1, x_mov, y_mov, papel);
}


function dibujaLinea(color,xInicial,xFinal,yInicial,yFinal,lienzo){
  lienzo.beginPath();//inicia el dibujo
  lienzo.strokeStyle=color;//con el color que voy a pintar
  lienzo.lineWidth = 3;//ancho de la linea
  lienzo.moveTo(xInicial,xFinal);//muevo a donde voy a iniciar
  lienzo.lineTo(yInicial,yFinal);//muevo a donde voy a finalizar
  lienzo.stroke();//hacerlo
  lienzo.closePath();//finaliza el dibujo
}

function dibujarTeclado(evento){
 var color = "green";
 var movimiento = 1;
 switch (evento.keyCode) {
   case teclas.UP:
     dibujaLinea(color, x, y, x, y - movimiento, papel);
     y = y - movimiento;
     break;
   case teclas.DOWN:
     dibujaLinea(color, x, y, x, y + movimiento, papel);
     y = y + movimiento;
     break;
   case teclas.LEFT:
     dibujaLinea(color, x, y, x - movimiento, y, papel);
     x = x - movimiento;
     break;
   case teclas.RIGHT:
     dibujaLinea(color, x, y, x + movimiento, y, papel);
     x = x + movimiento;
     break;
 }
}
