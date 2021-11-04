var spiderMan, spiderManImage, spiderManFighting1, spiderManFighting2
var venom, venomImage
var building
var invisibleGround

function preload()
{
spiderManImage = loadImage("Images/Spiderman.png")
spiderManFighting1 = loadImage("Images/Spiderman fighting1.png")
spiderManFighting2 = loadImage("Images/Spiderman fighting2.png")
venomImage = loadImage("Images/Venom.png")
building = loadImage("Images/Buildings.jpeg")

}
function setup() 
{
  createCanvas(displayWidth, displayHeight);
  spiderMan = createSprite(150, 320);
  spiderMan.addImage(spiderManImage)
  spiderMan.scale = 0.2

  venom = createSprite(1250, 520)
  venom.addImage(venomImage)
  venom.scale = 0.3
}

function draw() {
  background(building);  
  drawSprites();
}