var pantalla = document.getElementsByClassName("pantalla");
var teclas = document.getElementsByName("tecla");
var operadores = document.getElementsByName("operador");
const borrar = document.getElementsByName("borrar");
const igual = document.getElementsByName("igual");
const borrar1 = document.getElementsByName("borrar1");
var actual, anterior, operacion;

actual = "";
anterior = "";
operacion = "";

teclas.forEach(
    function(tecla) {
        tecla.addEventListener("click", function() 
        {
            actual += tecla.innerText;
            pantalla[0].textContent = actual;
        });
});

borrar1.forEach(function(borrar1) 
{
    borrar1.addEventListener("click", function() 
    {
        pantalla[0].textContent = pantalla[0].textContent.substring( 0 , pantalla[0].textContent.length - 1);
        actual = pantalla[0].textContent;
    });
});

borrar.forEach(function(borrar) {
    borrar.addEventListener("click", function() {
        pantalla[0].textContent = "";
        actual = "";
        anterior = "";
        operacion = "";
    });
});

operadores.forEach(function(operador) {
    operador.addEventListener("click", function() 
    {
        if (actual != "") 
        {
            anterior = actual;
            actual = ""                               
        }      
        operacion = operador.innerText;  
    });
});

igual.forEach(function(igual) 
{
    igual.addEventListener("click", function() 
    {
        actual = pantalla[0].textContent;
        anterior = parseFloat(anterior);
        actual = parseFloat(actual);
        switch(operacion)
        {
            case "+":
                     pantalla[0].textContent = "" + (anterior + actual);
                     break;
            case "-":
                     pantalla[0].textContent = "" + (anterior - actual);
                     break;
            case "*":
                     pantalla[0].textContent = "" + (anterior * actual);
                     break;
            case "/":
                     pantalla[0].textContent = "" + (anterior / actual);
                     break;              
        }
        actual = pantalla[0].textContent

    });
});

