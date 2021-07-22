var blueBalloon,greenBalloon,pinkBalloon,redBalloon
var backgroundimg,bg
var bow,arrow,bowImg,arrowImg

var score,rbg,bbg,gbg,pbg,ag

function preload(){
 //load your images here 
blueBalloon=loadImage ('blue_balloon0.png');
greenBalloon= loadImage ('green_balloon0.png');
pinkBalloon=loadImage ('pink_balloon0.png');
redBalloon= loadImage ('red_balloon0.png');
backgroundimg=loadImage ('background0.png');
bowImg=loadImage('bow0.png');  
  arrowImg=loadImage('arrow0.png');
}

function setup() {
  createCanvas(600,600);
  bg=createSprite(0,0,600,600)
  bg.addImage(backgroundimg);
  bg.scale=3.5
 bow=createSprite(550,300,20,20) 
  bow.addImage(bowImg)
  
  score=0
  rbg=new Group() 
  bbg=new Group()
  gbg=new Group()
  pbg=new Group()
  ag=new Group()
  //add code here
  
  /*for(var i=50;i<600;i=i+100 ){
    var red=createSprite (50,i,20,20)
    red.addImage(redBalloon)
    red.scale=0.1
    
    
    
  }
  
  for(var k=100,j=170;k<=600,j<550;k=k+100,j=j+100){
    
    var blue=createSprite (100,k,20,20)
    blue.addImage(blueBalloon)
    blue.scale=0.1
    
    var green=createSprite (150,j,20,20)
    green.addImage(greenBalloon)
    green.scale=0.08
    
  }
  
   for(var i=100;i<500;i=i+150 ){
    var pink=createSprite (200,i,20,20)
    pink.addImage(pinkBalloon)
    pink.scale=0.9
    
    
    
  }
  */
}

function draw() {
  background(255)
  drawSprites();
  textSize(22)
  fill('white')
  text('score :'+ score,270,30);
  
  if (bg.x<0){
  bg.x=bg.width/2}
  
  
    spawnBalloons()
      
      if(World.frameCount%5===0&&keyDown('space')){
        arr()
     }  
     if(ag.isTouching(rbg)){
       score=score+1
       rbg.destroyEach()
       ag.destroyEach()
     } 
    if(ag.isTouching(gbg)){
       score=score+3
       gbg.destroyEach()
       ag.destroyEach()
     } 
  if(ag.isTouching(bbg)){
       score=score+2
       bbg.destroyEach()
    ag.destroyEach()
     } 
  if(ag.isTouching(pbg)){
       score=score+1
       pbg.destroyEach()
    ag.destroyEach()   
  
     } 
  

  
  
bow.y=World.mouseY
  //arrow.y=bow.y
  bg.velocityX=-3
  
  //add code here
  
}

function spawnBalloons(){
  if(World.frameCount%80===0){
  var bb=createSprite(-5,random(20,580),10,10)
  bb.velocityX=3
    
  var a=Math.round(random(1,4))
 switch(a){
   case 1:bb.addImage(blueBalloon);
    bb.scale=0.1;
     bbg.add(bb)
     break;
     case 2:bb.addImage(pinkBalloon);
     bb.scale=1.3;
     pbg.add(bb)
     break;
     case 3: bb.addImage(redBalloon);
     bb.scale=0.1;
     rbg.add(bb)
     break;
     case 4 :bb.addImage(greenBalloon);
     bb.scale=0.1;
     gbg.add(bb)
     }
bb.lifetime=600/3
  
  }
  
}

function arr(){
  var arrow=createSprite (bow.x,300,10,10)
  arrow.visible=false
  arrow.addImage(arrowImg)
  arrow.scale=0.4
  arrow.y=bow.y
    arrow.velocityX=-10;
    arrow.visible=true
  arrow.lifetime=65
  ag.add(arrow)
}
