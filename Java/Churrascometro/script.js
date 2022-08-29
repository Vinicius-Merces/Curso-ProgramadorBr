var numero = 0;
var timer;

function AtualizarTexto(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML +=" " + numero;
    numero++;
    
}

function iniciar(){
  
   interval = setTimeout (AtualizarTexto, 3000);
}

function parar(){
    clearTimeout(timer);
}

