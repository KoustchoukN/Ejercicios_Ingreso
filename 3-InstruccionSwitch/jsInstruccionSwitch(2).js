function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;

switch(mesDelAño)
{   
    case "Diciembre":
    case "Enero":
    case "Febrero":
    alert("Ya pasamos el frio, ahora calor!");
    break;
    default:
    alert("Falta para el invierno");
    break;
    case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio!");
    break;        
}


    





}//FIN DE LA FUNCIÓN