function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
while(contador<5)
{
	numero=parseInt(prompt("Ingrese su numero"));
	contador++;
	acumulador=numero+acumulador;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN