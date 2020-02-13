function mostrar()
{
//tomo la edad  
    var edad;
        edad=document.getElementById("edad").value;
        edad=parseInt(edad);
    var estadocivil;
        estadocivil=document.getElementById("estadoCivil").value;

    if(edad>=18&&estadocivil=="Soltero")
    {
        alert("Usted es SOLTERO y NO es menor de edad");
    } 	


}//FIN DE LA FUNCIÓN