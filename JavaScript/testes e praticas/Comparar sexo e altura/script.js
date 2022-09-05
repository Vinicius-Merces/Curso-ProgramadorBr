

var Masculino = 0 +"";
var Feminino = 0 +"";

function verificarTipos(){   
    
    let ind1Sex=document.getElementById("pessoa1 Sexo").value;
    let ind1Age=document.getElementById("pessoa1 Idade").value;
    let ind1Alt=document.getElementById("pessoa1 Altura").value;
 
    let ind2Sex=document.getElementById("pessoa2 Sexo").value;
    let ind2Age=document.getElementById("pessoa2 Idade").value;
    let ind2Alt=document.getElementById("pessoa2 Altura").value;
 
    let ind3Sex=document.getElementById("pessoa3 Sexo").value;
    let ind3Age=document.getElementById("pessoa3 Idade").value;
    let ind3Alt=document.getElementById("pessoa3 Altura").value;
  
    const pessoa1 = {
     Sexo: ind1Sex, 
     Idade: ind1Age, 
     Altura: ind1Alt,
 };
    const pessoa2 = {
     Sexo: ind2Sex, 
     Idade: ind2Age, 
     Altura: ind2Alt,
 };
    const pessoa3 = {
     Sexo: ind3Sex,
     Idade: ind3Age, 
     Altura: ind3Alt,
 };  

    if(pessoa1.Sexo ==="Masculino"){
        Masculino++;
    } else {
        Feminino++
    }

    if(pessoa2.Sexo ==="Masculino"){
        Masculino++;
    } else {
        Feminino++
    }
    
    if(pessoa3.Sexo ==="Masculino"){
        Masculino++;
    } else {
        Feminino++
    }

}

function compararAlt(){


    let ind1Sex=document.getElementById("pessoa1 Sexo").value;
    let ind1Age=document.getElementById("pessoa1 Idade").value;
    let ind1Alt=document.getElementById("pessoa1 Altura").value;
 
    let ind2Sex=document.getElementById("pessoa2 Sexo").value;
    let ind2Age=document.getElementById("pessoa2 Idade").value;
    let ind2Alt=document.getElementById("pessoa2 Altura").value;
 
    let ind3Sex=document.getElementById("pessoa3 Sexo").value;
    let ind3Age=document.getElementById("pessoa3 Idade").value;
    let ind3Alt=document.getElementById("pessoa3 Altura").value;

    let maior
  
    const pessoa1 = {
     Sexo: ind1Sex, 
     Idade: ind1Age, 
     Altura: ind1Alt,
 };
    const pessoa2 = {
     Sexo: ind2Sex, 
     Idade: ind2Age, 
     Altura: ind2Alt,
 };
    const pessoa3 = {
     Sexo: ind3Sex,
     Idade: ind3Age, 
     Altura: ind3Alt,
 };  
    
    if(parseInt(pessoa1.Altura) > parseInt(pessoa2.Altura)){
        maior = pessoa1
    } else if(parseInt(pessoa2.Altura) > parseInt(pessoa3.Altura)){
        maior= pessoa2
    } else {
        maior= pessoa3
    };


    let txtResult = document.getElementById("limpar");
    let result = ("<p id='inserido'>"+"O número de pessoas do sexo masculino é "+Masculino+ " e do sexo feminino é "+Feminino+"<br>"+" A pessoa mais alta é do sexo " +maior.Sexo+ " com altura de "+(parseInt(maior.Altura)/100)+"m"+"<br>"+ "</p>");
    txtResult.insertAdjacentHTML("afterend", result);

}

function clearData(){
    let element = document.getElementById("inserido");
    element.remove();

    if(inserido = true){
        clearData()
    }
}