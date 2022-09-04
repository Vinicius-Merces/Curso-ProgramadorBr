
function nMaior(){
    let numeros = document.getElementById("txtNumeros").value;
    numeros = numeros.split (",");
    let maior=parseInt(numeros[0]);

    for(i=1;i<numeros.length;i++){
        if(parseInt(numeros[i]) > maior){
            maior = parseInt(numeros[i]);
        } 
    }
    alert("O maior é " +maior)
}


