function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

while(respuesta=="si")
	{
	numero=parseInt(prompt("Ingrese Su Numero"));
	contador++;
	acumulador=numero+acumulador;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN