/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{   var numUno;

        numUno = document.getElementById("sueldo").value;

        numUno = parseInt(numUno);

        resultado = (numUno * 1.10);
    
        document.getElementById("resultado").value = resultado;





	
}
