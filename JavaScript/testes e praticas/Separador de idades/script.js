
function idades(){
    let numeros = document.getElementById("txtNumeros").value;
    numeros = numeros.split (",");
    let separador = 18;
    let maiores = 0;
    let menores= 0;

    for(i=0;i<numeros.length;i++){
        if(parseInt(numeros[i]) >= separador){
            maiores++
        }
        if(parseInt(numeros[i]) < separador){
            menores++
        }           
    }
            let txtResult = document.getElementById("limpar");
            let result = ("<p id='inserido'>"+"O número de maiores de idade é "+maiores+ " e os menores de idade são "+menores+"<br>"+"</p>");
            txtResult.insertAdjacentHTML("afterend", result);
}


function clearData(){
    let element = document.getElementById("inserido");
    element.remove();

    if(inserido = true){
        clearData()
    }
}