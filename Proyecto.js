var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
var edad=0;
const precioBase = 250;
const comision = precioBase * 0.30;
var recargos = 0;
var recargosconyuge = 0;
var recargoshijo = 0;
var totalPagar = 0;


//calculo de edad del usuario

fecha_hoy = new Date();
ahora_ano = fecha_hoy.getYear();
ahora_mes = fecha_hoy.getMonth();
ahora_dia = fecha_hoy.getDate();
edad = (ahora_ano + 1900) - anioNacimiento;
    
    if ( ahora_mes < (mesNacimiento - 1)){
      edad--;
    }
    if (((mesNacimiento - 1) == ahora_mes) && (ahora_dia < diaNacimiento)){ 
      edad--;
    }
    if (edad > 1900){
        edad -= 1900;
    }

	alert("Hola " + nombreCompleto + " ¡Tienes " + edad + " años!");



	//cominezo de proceso
	if (edad>18){
 
		alert("Bienvenido a aseguradora TK-U "); //agregar mensaje de bienvenida a seguros TK-U

		var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");

			//PROCESO DEL RECARGO DEL CONYUGUE
			if(conyuge=="SI"){

				var edadconyuge=prompt("Ingresa la edad del cónyuge:");

				if(edadconyuge<30){

					recargosconyuge=precioBase * 0.01;

					}else if((edadconyuge>=30)&&(edadconyuge<=40)){

						recargosconyuge=precioBase * 0.02;

						}else if((edadconyuge>=41)&&(edadconyuge<=50)){

							recargosconyuge=precioBase * 0.03;

							}else if((edadconyuge>=50)&&(edadconyuge<=70)){

								recargosconyuge=precioBase * 0.05;

								}else{
												
								alert("Disculpa !! No se puede asegurar");

								}

						}

		var hijos = prompt("¿Tiene hijos?", "SI/NO");


			//proceso de recargos hijos
			if(hijos=="SI"){

 				var cantidadhijos=prompt("¿Cuantos hijos menores a 21 años tienes?:");

 					if(cantidadhijos>0){

 						recargoshijo=precioBase * 0.01;

 						}

 			}

 				//procesos por edad
				if(edad<=20){
					var aniosseguro = prompt("Cuantos años quieres optar por el seguro?:", "Por favor ingresa únicamente números");
					var calculo = precioBase * aniosseguro;

					totalPagar=(calculo+recargos);

					alert("No se aplica recargos por motivo de tu edad es " + edad + " años!");
					alert("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales");


						}else if((edad>=21) && (edad<=25)){
							var aniosseguro = prompt("Cuantos años quieres optar por el seguro?:", "Por favor ingresa únicamente números");
							var calculo = precioBase * aniosseguro;
							var recargos=precioBase * 0.01;

							totalPagar=(calculo+recargos+comision+recargosconyuge+recargoshijo);

							//mensajes en pantalla
							alert("subtotal a pagar por años asegurados: " + (calculo.toFixed(2)) + " quetzales");
							alert("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales");
							alert("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales");
							alert("subtotal a pagar por recargo del cónyuge: " + recargosconyuge.toFixed(2) + " quetzales");
							alert("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales");
							alert("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales");

							//impresion en pantalla
							document.write("Bienvenido a ASEGURADORA TK-U</br>");
							document.write("Cotización de servicio VIVE SEGURO</br>");
							document.write("Nombres del asegurado: " + nombreCompleto + "<br/>Fecha de nacimiento: " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento +"</br>");
                            document.write("Edad actual: " + edad + " años" + "<br/>Tiene Cónyuge: " + conyuge + "</br>Edad del Cónyuge: " + edadconyuge + " años</br>");
                            document.write("Tiene hijos menores de 21 años: " + hijos + "<br/>Cantidad de hijos: " + cantidadhijos + "</br>");
                            document.write("subtotal a pagar por años asegurados: " + + (calculo.toFixed(2)) + " quetzales</br>")          
                            document.write("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales</br>");
                            document.write("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales</br>");
                            document.write("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales</br>");
                            document.write("------------------------------------</br>");
                            document.write("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales</br></br></br>");
                            document.write("Cotizador: Jonny Alexander Mérida Segura " + "</br>Carné 20001604</br>");
                            document.write(fecha_hoy);
                                      

								}else if((edad>=26) && (edad<=30)){
									var aniosseguro = prompt("Cuantos años quieres optar por el seguro?:", "Por favor ingresa únicamente números");
									var calculo = precioBase * aniosseguro;
									var recargos=precioBase * 0.02;

									totalPagar=(calculo+recargos+comision+recargosconyuge+recargoshijo);

									alert("subtotal a pagar por años asegurados: " + (calculo.toFixed(2)) + " quetzales");
									alert("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales");
									alert("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales");
									alert("subtotal a pagar por recargo del cónyuge: " + recargosconyuge.toFixed(2) + " quetzales");
									alert("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales");
									alert("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales");

									document.write("Bienvenido a ASEGURADORA TK-U</br>");
									document.write("Cotización de servicio VIVE SEGURO</br>");
									document.write("Nombres del asegurado: " + nombreCompleto + "<br/>Fecha de nacimiento: " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento +"</br>");
		                            document.write("Edad actual: " + edad + " años" + "<br/>Tiene Cónyuge: " + conyuge + "</br>Edad del Cónyuge: " + edadconyuge + " años</br>");
		                            document.write("Tiene hijos menores de 21 años: " + hijos + "<br/>Cantidad de hijos: " + cantidadhijos + "</br>");
		                            document.write("subtotal a pagar por años asegurados: " + + (calculo.toFixed(2)) + " quetzales</br>")          
		                            document.write("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales</br>");
		                            document.write("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales</br>");
		                            document.write("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales</br>");
		                            document.write("------------------------------------</br>");
		                            document.write("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales</br></br></br>");
		                            document.write("Cotizador: Jonny Alexander Mérida Segura " + "</br>Carné 20001604</br>");
		                            document.write(fecha_hoy);

									}else if((edad>=31) && (edad<=40)){
										var aniosseguro = prompt("Cuantos años quieres optar por el seguro?:", "Por favor ingresa únicamente números");
										var calculo = precioBase * aniosseguro;
										var recargos=precioBase * 0.05;

										totalPagar=(calculo+recargos+comision+recargosconyuge+recargoshijo);

										alert("subtotal a pagar por años asegurados: " + (calculo.toFixed(2)) + " quetzales");
										alert("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales");
										alert("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales");
										alert("subtotal a pagar por recargo del cónyuge: " + recargosconyuge.toFixed(2) + " quetzales");
										alert("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales");
										alert("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales");

										document.write("Bienvenido a ASEGURADORA TK-U</br>");
										document.write("Cotización de servicio VIVE SEGURO</br>");
										document.write("Nombres del asegurado: " + nombreCompleto + "<br/>Fecha de nacimiento: " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento +"</br>");
			                            document.write("Edad actual: " + edad + " años" + "<br/>Tiene Cónyuge: " + conyuge + "</br>Edad del Cónyuge: " + edadconyuge + " años</br>");
			                            document.write("Tiene hijos menores de 21 años: " + hijos + "<br/>Cantidad de hijos: " + cantidadhijos + "</br>");
			                            document.write("subtotal a pagar por años asegurados: " + + (calculo.toFixed(2)) + " quetzales</br>")          
			                            document.write("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales</br>");
			                            document.write("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales</br>");
			                            document.write("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales</br>");
			                            document.write("------------------------------------</br>");
			                            document.write("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales</br></br></br>");
			                            document.write("Cotizador: Jonny Alexander Mérida Segura " + "</br>Carné 20001604</br>");
			                            document.write(fecha_hoy);

										}else if((edad>=41) && (edad<=50)){
											var aniosseguro = prompt("Cuantos años quieres optar por el seguro?:", "Por favor ingresa únicamente números");
											var calculo = precioBase * aniosseguro;
											var recargos=precioBase * 0.08;

											totalPagar=(calculo+recargos+comision+recargosconyuge+recargoshijo);

											alert("subtotal a pagar por años asegurados: " + (calculo.toFixed(2)) + " quetzales");
											alert("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales");
											alert("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales");
											alert("subtotal a pagar por recargo del cónyuge: " + recargosconyuge.toFixed(2) + " quetzales");
											alert("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales");
											alert("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales");

											document.write("Bienvenido a ASEGURADORA TK-U</br>");
											document.write("Cotización de servicio VIVE SEGURO</br>");
											document.write("Nombres del asegurado: " + nombreCompleto + "<br/>Fecha de nacimiento: " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento +"</br>");
				                            document.write("Edad actual: " + edad + " años" + "<br/>Tiene Cónyuge: " + conyuge + "</br>Edad del Cónyuge: " + edadconyuge + " años</br>");
				                            document.write("Tiene hijos menores de 21 años: " + hijos + "<br/>Cantidad de hijos: " + cantidadhijos + "</br>");
				                            document.write("subtotal a pagar por años asegurados: " + + (calculo.toFixed(2)) + " quetzales</br>")          
				                            document.write("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales</br>");
				                            document.write("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales</br>");
				                            document.write("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales</br>");
				                            document.write("------------------------------------</br>");
				                            document.write("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales</br></br></br>");
				                            document.write("Cotizador: Jonny Alexander Mérida Segura " + "</br>Carné 20001604</br>");
				                            document.write(fecha_hoy);

											}else if((edad>=51) && (edad<=65)){
												var aniosseguro = prompt("Cuantos años quieres optar por el seguro?:", "Por favor ingresa únicamente números");
												var calculo = precioBase * aniosseguro;
												var recargos=precioBase * 0.12;

												totalPagar=(calculo+recargos+comision+recargosconyuge+recargoshijo);

												alert("subtotal a pagar por años asegurados: " + (calculo.toFixed(2)) + " quetzales");
												alert("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales");
												alert("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales");
												alert("subtotal a pagar por recargo del cónyuge: " + recargosconyuge.toFixed(2) + " quetzales");
												alert("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales");
												alert("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales");

												document.write("Bienvenido a ASEGURADORA TK-U</br>");
												document.write("Cotización de servicio VIVE SEGURO</br>");
												document.write("Nombres del asegurado: " + nombreCompleto + "<br/>Fecha de nacimiento: " + diaNacimiento + "/" + mesNacimiento + "/" + anioNacimiento +"</br>");
					                            document.write("Edad actual: " + edad + " años" + "<br/>Tiene Cónyuge: " + conyuge + "</br>Edad del Cónyuge: " + edadconyuge + " años</br>");
					                            document.write("Tiene hijos menores de 21 años: " + hijos + "<br/>Cantidad de hijos: " + cantidadhijos + "</br>");
					                            document.write("subtotal a pagar por años asegurados: " + + (calculo.toFixed(2)) + " quetzales</br>")          
					                            document.write("subtotal a pagar de comisión por seguro: " + (comision.toFixed(2)) + " quetzales</br>");
					                            document.write("subtotal a pagar de recargo por seguro: " + (recargos.toFixed(2)) + " quetzales</br>");
					                            document.write("subtotal de recargos por hijos menores a 21 años: " + (recargoshijo.toFixed(2)) + " quetzales</br>");
					                            document.write("------------------------------------</br>");
					                            document.write("total a pagar: " + (totalPagar.toFixed(2)) + " quetzales</br></br></br>");
					                            document.write("Cotizador: Jonny Alexander Mérida Segura " + "</br>Carné 20001604</br>");
					                            document.write(fecha_hoy);

												}else{

													alert("Lo sentimos !!! " + nombreCompleto + " no podemos asegurarte ¡Tienes " + edad + " años!");											"Hola " + nombreCompleto + " ¡Tienes " + edad + " años!"

													}


	}else{
		alert("Disculpa, no tienes la suficiente edad para realizar este proceso");
		}