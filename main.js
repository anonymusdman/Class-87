var not_backgorund = new fabric.Canvas("not_backgorund");
var steve_x = 10;
var steve_y = 10;
var block_building_width = 30;
var block_building_height = 30;
var steve_object;
var block_building_object;
function steveUpdate() {
    fabric.Image.fromUrl("steve.png", function(Img){
    steve_object = Img;
    steve_object.scaleToWidth(150);
    steve_object.scaleToHeight(140);
    steve_object.set({
        top:steve_y,
        left:steve_x
    });
    canvas.add(steve_object);
});
}
function NewImage(getImage) {
    fabric.Image.fromUrl(getImage, function(Img){
    block_building_object = Img;
    block_building_object.scaleToWidth(block_building_width);
    block_building_object.scaleToHeight(block_building_height);
    block_building_object.set({
        top:steve_y,
        left:steve_x
    });
    canvas.add(block_building_object);
});
}
window.addEventListener("keydown", keydown_event);
function keydown_event(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80'){
        console.log("block is getting bigger");
        block_building_height = block_building_height + 10;
        block_building_width = block_building_width + 10;
        document.getElementById("currentwidth").innerHTML = block_building_width;
        document.getElementById("currentheight").innerHTML = block_building_height;
    } 
    if(e.shiftKey == true && keypressed == '77'){
        console.log("block is getting smaller");
        block_building_height = block_building_height - 10;
        block_building_width = block_building_width -10;
        document.getElementById("currentwidth").innerHTML = block_building_width;
        document.getElementById("currentheight").innerHTML = block_building_height;
    } 
    if(keypressed == '38'){
        console.log("up");
        steve_up();
    }
    if(keypressed == '40'){
        console.log("down");
        steve_down();
    }
    if(keypressed == '37'){
        console.log("left");
        steve_left();
    }
    if(keypressed == '39'){
        console.log("right");
        steve_right();
    }
    if(keypressed == '66'){
        console.log("b");
        NewImage('brick.jpg');
    }
    if(keypressed == '68'){
        console.log("d");
        NewImage('dark_green.png');
    }
    if(keypressed == '71'){
        console.log("g");
        NewImage('grass.png');
    }
    if(keypressed == '76'){
        console.log("l");
        NewImage('lowstone.png');
    }
    if(keypressed == '78'){
        console.log("n");
        NewImage('netherrack.jpg');
    }
    if(keypressed == '83'){
        console.log("s");
        NewImage('stone.jpg');
    }
    if(keypressed == '84'){
        console.log("t");
        NewImage('topviewgrass.png');
    }
    if(keypressed == '87'){
        console.log("w");
        NewImage('wood.jpg');
    }
    if(keypressed == '89'){
        console.log("y");
        NewImage('yellow_brick.png');
    }
}