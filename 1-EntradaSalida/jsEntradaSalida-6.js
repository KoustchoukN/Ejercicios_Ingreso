/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   var numeroUno;
    var numeroDos;

    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    numeroDos = parseInt(numeroDos);
    numeroUno = parseInt(numeroUno);    
    
    var resultado = numeroUno + numeroDos;
    
    alert(resultado);



    
}

