function mostrar()
{
//tomo la edad  
    var edad;
        edad=document.getElementById("edad").value;
        edad=parseInt(edad);
        if(edad>=18)
        {
            alert("Usted ya es adulto");
        }
        else if(edad>12&&edad<17)
        {
            alert("Usted es adolescente");
        }
        else
        {
            alert("Usted es niño");
        }


}//FIN DE LA FUNCIÓN