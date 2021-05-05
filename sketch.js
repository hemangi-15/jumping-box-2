var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(10,580,180,20);
surface1.shapeColor='purple';
surface2=createSprite(210,580,180,20);
surface2.shapeColor='red';
surface3=createSprite(410,580,180,20);
surface3.shapeColor='yellow';
surface4=createSprite(610,580,180,20);
surface4.shapeColor='blue';




    //create box sprite and give velocity
box=createSprite(random(20,780),100,50,50);
box.shapeColor='white';
box.velocityX=6;
box.velocityY=6;
}

function draw() {
    background('grey');
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.changeColor='purple';
    }
    if(box.isTouching(surface2)){
        box.changeColor='red';
    }
    if(box.isTouching(surface3)){
        box.changeColor='yellow';
    }
    if(box.isTouching(surface4)){
        box.changeColor='blue';
    }
    drawSprites();
}
