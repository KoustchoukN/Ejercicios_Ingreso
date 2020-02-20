function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
		numero = parseInt(numero);
		
	while(numero<1 ||numero>9)
	{
		numero = prompt("Numero invalido, ingrese un numero entre 0 y 9");
	}



}//FIN DE LA FUNCIÓN