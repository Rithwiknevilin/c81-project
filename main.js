canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(200, 200, 40 ,40);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

    color = document.getElementById("color").value;
    console.log(color);

    
     mouse_x = e.clientX - canvas.offsetLeft;
     mouse_y = e.clientY - canvas.offsetTop;

    console.log("X = " + mouse_x + " ,Y =  " + mouse_y);
    square(mouse_x , mouse_y);    
}

function square(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.rect(mouse_x, mouse_y, 40 ,40);
ctx.stroke();
}



function clearArea()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}