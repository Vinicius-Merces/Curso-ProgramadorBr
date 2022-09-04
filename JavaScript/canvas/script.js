let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

// ctx.rect(10,10, 100, 200);

// ctx.fillStyle = "blue";
// // ctx.fillRect(10,10, 100, 200);
// ctx.lineWidth = 5;
// ctx.strokeStyle = "red"

// ctx.fill();
// ctx.stroke();

// ctx.clearRect(20,20, 90,30);


// ctx.beginPath();

// ctx.lineWidth = 5;
// ctx.strokeStyle = "red"
// ctx.moveTo(10,10);
// ctx.lineTo(400,100);
// ctx.stroke();


// ctx.beginPath();

// ctx.lineWidth = 5;
// ctx.strokeStyle = "blue";
// ctx.moveTo(50,10);
// ctx.lineTo(300,300);
// ctx.stroke();


let circle = {
    x : 250,
    y : 250,
    raio : 100,

    inicio : 0,
    fim : 0,

}

function drawCircle (c){

    ctx.beginPath();
    ctx.rect(0,0, 500, 500);
    ctx.fillStyle = "beige";
    ctx.fill();


    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";

    ctx.arc(c.x,c.y, c.raio, c.inicio, c.fim)
    ctx.fill();
    ctx.stroke();

}

setInterval(function(){
    if (circle.fim < 2 * Math.PI){
        circle.fim += 0.01;
        circle.x += 0.4;
    }
    
    drawCircle(circle)
}, 1)
