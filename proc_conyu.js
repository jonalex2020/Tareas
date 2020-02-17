var conyugue="SI";
var recargosconyugue=0;
const precioBase=250;

if(conyugue=="SI"){

	var edadconyugue=prompt("ingrese edad");

	if(edadconyugue<30){

		recargosconyugue=precioBase * 0.01;

		alert("subtotal a pagar por recargo de conyugue: " + recargosconyugue.toFixed(2) + " quetzales");


		}else if((edadconyugue>=30)&&(edadconyugue<=40)){

			recargosconyugue=precioBase * 0.02;

			alert("subtotal a pagar por recargo de conyugue: " + recargosconyugue.toFixed(2) + " quetzales");


			}else if((edadconyugue>=41)&&(edadconyugue<=50)){

				recargosconyugue=precioBase * 0.03;

				alert("subtotal a pagar por recargo de conyugue: " + recargosconyugue.toFixed(2) + " quetzales");


				}else if((edadconyugue>=50)&&(edadconyugue<=70)){

					recargosconyugue=precioBase * 0.05;

					alert("subtotal a pagar por recargo de conyugue: " + recargosconyugue.toFixed(2) + " quetzales");


					}else{
						
						alert("No se puede asegurar");
						}

}