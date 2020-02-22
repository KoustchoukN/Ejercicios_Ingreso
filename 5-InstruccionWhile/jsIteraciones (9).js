function mostrar()
{

	var contador=0;
	var numero=0;
	var respuesta='si';
	var numMax;
	var numMin;
	var continuar;

	do{
		numero=parseInt(prompt("Ingresar Numero"));
		if(contador==0)
		{
			numMax=numero;
			numMin=numero;
		}
		else
		{
			if(numMax<numero)
			{
				numMax=numero;
			}
			if(numMin<numero)
			{
				numMin=numero;
			}
		}
		continuar = prompt("Desea continuar?");
		contador++;
		
	}while(continuar=="si");

	document.getElementById("maximo").value=numMax;
	document.getElementById("minimo"),value=numMin;

	




}//FIN DE LA FUNCIÓN