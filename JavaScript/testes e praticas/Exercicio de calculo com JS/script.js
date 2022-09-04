
function calcularQuadrado(){
    let numeros = document.getElementById("txtNumeros").value;
    
    numeros = numeros.split (",");

    for(i=0;i<numeros.length;i++){
        let quadrado = parseInt(numeros[i])*parseInt(numeros[i]);
        let txtResult = document.getElementById("limpar");
        let result = ("<p id='inserido'>"+"O quadrado de "+numeros[i]+ " é "+quadrado  +"<br>"+"</p>");
        txtResult.insertAdjacentHTML("afterend", result);            
    }
}

function clearData(){
    let element = document.getElementById("inserido");
    element.remove();

    if(inserido = true){
        clearData()
    }
}
   



