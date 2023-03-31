let jq = $("#lista1").slideUp(2000)
// jq.slideDown(2000)

function animar() {
    jq.slideDown(2000) 
      .fadeOut(2000)
      .fadeIn(2000)
      .slideUp(1000)
      
               
} 


setInterval(animar, 6000);


console.log(jq);


