
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

   let Masculino = "";
   let Feminino = "";


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

    if(pessoa1.Altura > pessoa2.Altura){
        return pessoa1.Altura
    }
    

    console.log(Masculino)
    console.log(Feminino)


}




// let txtResult = document.getElementById("limpar");
// let result = ("<p id='inserido'>"+"O número de maiores de idade é "+maiores+ " e os menores de idade são "+menores+"<br>"+"</p>");
// txtResult.insertAdjacentHTML("afterend", result);

function clearData(){
    let element = document.getElementById("inserido");
    element.remove();

    if(inserido = true){
        clearData()
    }
}