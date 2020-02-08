/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{   var numUno;

        numUno = document.getElementById("importe").value;
    
        numUno = parseInt(numUno);

        resultado = (numUno * 0.25);

        document.getElementById("resultado").value = resultado;


}
