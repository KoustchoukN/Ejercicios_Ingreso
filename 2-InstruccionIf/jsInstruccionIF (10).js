function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	Math.floor(numero);
	numero=Math.floor(Math.random(numero)*(11-1))+1;
	
	if(numero>=9&&numero<=10)
	{
		alert(numero + " Excelente!");
	}
	else if(numero>=4&&numero<9)
	{
		alert(numero + " APROBADO!");
	}
	else
	{
		alert(numero + " Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN