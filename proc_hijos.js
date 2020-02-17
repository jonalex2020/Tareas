var hijos="SI";
var recargoshijo=0;
const precioBase=250;
 

 if(hijos=="SI"){

 	var cantidadhijos=prompt("Cuantos hijos menores a 21 años:");

 	if(cantidadhijos>0){

 		recargoshijo=precioBase * 0.01;

 		alert("subtotal de recargos por hijos menores a 21 años es: " + recargoshijo.toFixed(2) + " quetzales");


 	}

 }