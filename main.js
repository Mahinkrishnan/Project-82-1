canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x;
var last_position_of_y;
color = "black";
width_of_line = 1;
radius = 20;
canvas.addEventListener("mouseDown",my_mousedown);

function my_mousedown(e){

    
    
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave",mouseleave);

function mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup",mouseup);

function mouseup(e){
    mouseEvent = "mouseup";
}
 canvas.addEventListener("mousemove",mousemove);

 function mousemove(e){
     current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop;

     if(mouseEvent == "mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line;
         ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,radius,0,2*Math.PI);
         

    
    
    }

    
    
}

