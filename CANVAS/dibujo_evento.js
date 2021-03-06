var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");
boton.addEventListener("click",dibujoPorClick);
function dibujoPorClick(){
  var lineas = parseInt(texto.value);
  var xInicial = 0;
  var xFinal;
  var yInicial;
  var yFinal = 300;
  var clorLinea = "blue";
  var espacio = ancho / lineas;
  /*
  while (l < lineas) {
    yInicial = 10 * l;
    xFinal = 10 * (l + 1);
    dibujaLinea("#aaf",xInicial,xFinal,yInicial,yFinal);
    console.log("linea: " + l);
    console.log("valores: " + xInicial+","+xFinal+";"+yInicial+","+yFinal);
    l ++;
    xFinal = xFinal + 10;
    yInicial = yInicial + 10;
  }
  */
  for (var l = 0; l < lineas; l++) {
    yInicial = espacio * l;
    xFinal = espacio * (l + 1);
    dibujaLinea(clorLinea,xInicial,xFinal,yInicial,yFinal);
    console.log("valores: " + xInicial+","+xFinal+";"+yInicial+","+yFinal);
  }

  dibujaLinea(clorLinea,1,1,1,300);
  dibujaLinea(clorLinea,1,299,299,299);

  var xInicial = 300;
  var yFinal = 0;

  var yInicial=300;
  var xFinal=300;
  var clorLinea = "pink";

  for (var l = 0; l < lineas; l++) {
    dibujaLinea(clorLinea,xInicial,xFinal,yInicial,yFinal);
    yInicial = yInicial - espacio;
    xFinal = xFinal - espacio;
  }
  dibujaLinea(clorLinea,299,299,299,0);
  dibujaLinea(clorLinea,1,1,299,1);
}

var d = document.getElementById("dibujito");//trae un elemento
var ancho = d.width;

var lienzo = d.getContext("2d");//traemos el contexto
console.log(lienzo);

function dibujaLinea(color,xInicial,xFinal,yInicial,yFinal){
  lienzo.beginPath();//inicia el dibujo
  lienzo.strokeStyle=color;//con el color que voy a pintar
  lienzo.moveTo(xInicial,xFinal);//muevo a donde voy a iniciar
  lienzo.lineTo(yInicial,yFinal);//muevo a donde voy a finalizar
  lienzo.stroke();//hacerlo
  lienzo.closePath();//finaliza el dibujo
}
