var edad = 23;
var precioBase = 250;
var conyugue = prompt("conyugue");



if((edad>=21) && (edad<=25)){
							var aniosseguro = prompt("Cuantos años quieres optar por el seguro?:", "Por favor ingresa únicamente números");
							var calculo = precioBase * aniosseguro;
							var recargos=precioBase * 0.01;

							if(conyugue=="SI"){

							var edadconyugue=prompt("Ingresa la edad del conyugue:");

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


							alert("subtotal a pagar: " + (calculo.toFixed(2)) + " quetzales");
							alert("subtotal a pagar de recargos: " + (recargos.toFixed(2)) + " quetzales");
							alert("subtotal a pagar de comision: " + (comision.toFixed(2)) + " quetzales");
							alert("total a pagar: " + ((calculo+recargos+comision).toFixed(2)) + " quetzales");


							}