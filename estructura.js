var nombreCompleto = prompt("Por favor ingrese el nombre completo:", "Nombres y apellidos");
var diaNacimiento = prompt("Ingrese el día de nacimiento", "Ejemplo: Si nació el 22 de enero, solamente ingresar 22");
var mesNacimiento = prompt("Ingrese el mes de nacimiento", "Ejemplo: Si nació en enero, solamente ingresar 1 porque es el mes 1");
var anioNacimiento = prompt("Ingrese el año de nacimiento", "Ejemplo: Si nació el 22 de enero de 1987, solamente ingresar 1987");
var edad=0;
const precioBase = 250;
const comision = precioBase * 0.30;
var recargos = 0;
var totalPagar = precioBase + comision + recargos;


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


	   if (edad>18){

        alert("Bienvenido a aseguradora TK-U sociedad anonima"); //agregar mensaje de bienvenida a seguros TK-U

        var conyuge = prompt("¿Tiene cónyuge?", "SI/NO");
        var hijos = prompt("¿Tiene hijos?", "SI/NO");

          if(edad<=20){
            alert("prueba rango menor 21");

              }else if((edad>=21) && (edad<=25)){
                alert("prueba rango 21 - 25");

                }else if((edad>=26) && (edad<=30)){
                  alert("prueba rango 26 - 30");

                  }else if((edad>=31) && (edad<=40)){
                    alert("prueba rango 31 - 40");

                    }else if((edad>=41) && (edad<=50)){
                      alert("prueba rango 41 - 50");

                      }else if((edad>=51) && (edad<=65)){
                        alert("prueba rango 51 - 65");

                        }else{

                          alert("Lo sentimos !!! " + nombreCompleto + " no podemos asegurarte ¡Tienes " + edad + " años!");                     "Hola " + nombreCompleto + " ¡Tienes " + edad + " años!"

                          }

    }else{
    alert("Disculpa, no tienes la suficiente edad para realizar este proceso");
    }