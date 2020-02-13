function mostrar()
{
//tomo la edad  
    var edad;
        edad=document.getElementById("edad").value;
        edad=parseInt(edad);
    var estadocivil;   
        estadocivil=document.getElementById("estadoCivil").value;
        estadocivil=parseInt(estadocivil);
    if(edad<18&&estadocivil!="soltero")
    {
        alert("Es muy pequeño para NO ser soltero");
    }


	


}//FIN DE LA FUNCIÓN