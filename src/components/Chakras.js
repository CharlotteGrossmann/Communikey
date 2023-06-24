import React from "react";
import Sketch from "react-p5";


const Chakras = () =>{
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(400, 500).parent(canvasParentRef);
  };

  class p5Chakra {
    constructor(posX,posY,circleColor, isMoving){
       this.posX = posX;
      this.posY = posY;
      this.circleColor = circleColor;
      this.isMoving = isMoving;
    }
    show(p5){
       //p5.fill(this.circleColor);
       p5.circle(this.posX, this.posY, 50);
     }
  }
  
  var firstChakra = new p5Chakra(190, 50, 255);
  var secondChakra = new p5Chakra(190, 110, 255);
  var thirdChakra = new p5Chakra(190, 170, 255);
  var fourthChakra = new p5Chakra(190, 230, 255);
  var fifthChakra = new p5Chakra(190, 290, 255);
  var sixthChakra = new p5Chakra(190, 350, 255);
  var seventhChakra = new p5Chakra(190, 410, 255);

  var movingFirstChakra = false;

  const draw = (p5) => {
    p5.clear();
    p5.background(33);
   
    p5.noFill();

    p5.curve(firstChakra.posX-50,firstChakra.posY, firstChakra.posX+25,firstChakra.posY, secondChakra.posX+25,secondChakra.posY,secondChakra.posX-50,secondChakra.posY);
    p5.curve(firstChakra.posX+50,firstChakra.posY, firstChakra.posX-25,firstChakra.posY, secondChakra.posX-25,secondChakra.posY,secondChakra.posX+50,secondChakra.posY);
   
    p5.curve(secondChakra.posX+100,secondChakra.posY, secondChakra.posX-25,secondChakra.posY, sixthChakra.posX-25,sixthChakra.posY,sixthChakra.posX+100,sixthChakra.posY);
   
    p5.curve(secondChakra.posX-100,secondChakra.posY, secondChakra.posX+25,secondChakra.posY, seventhChakra.posX+25,seventhChakra.posY,seventhChakra.posX-100,seventhChakra.posY);
   
    p5.fill(255);
    p5.line(firstChakra.posX, firstChakra.posY, secondChakra.posX,secondChakra.posY);
    p5.line(secondChakra.posX,secondChakra.posY, thirdChakra.posX, thirdChakra.posY);
    p5.line(thirdChakra.posX, thirdChakra.posY, fourthChakra.posX, fourthChakra.posY);
    p5.line(fourthChakra.posX, fourthChakra.posY, fifthChakra.posX, fifthChakra.posY);
    p5.line(fifthChakra.posX, fifthChakra.posY, sixthChakra.posX, sixthChakra.posY)
    p5.line(sixthChakra.posX, sixthChakra.posY, seventhChakra.posX, seventhChakra.posY);
   
   
    firstChakra.show();
   
     
    secondChakra.show();
    thirdChakra.show();
    fourthChakra.show();
    fifthChakra.show();
    sixthChakra.show();
   
    seventhChakra.show();
   
    if(firstChakra.isMoving == true){
      firstChakra.posX=p5.mouseX;
      firstChakra.posY = p5.mouseY;
    }
    else if(secondChakra.isMoving == true){
      secondChakra.posX=p5.mouseX;
      secondChakra.posY = p5.mouseY;
    }
    else if(thirdChakra.isMoving == true){
      thirdChakra.posX=p5.mouseX;
      thirdChakra.posY = p5.mouseY;
    }
    else if(fourthChakra.isMoving == true){
      fourthChakra.posX=p5.mouseX;
      fourthChakra.posY = p5.mouseY;
    }
    else if(fifthChakra.isMoving == true){
      fifthChakra.posX=p5.mouseX;
      fifthChakra.posY = p5.mouseY;
    }
    else if(sixthChakra.isMoving == true){
      sixthChakra.posX=p5.mouseX;
      sixthChakra.posY = p5.mouseY;
    }
    else if(seventhChakra.isMoving == true){
      seventhChakra.posX=p5.mouseX;
      seventhChakra.posY = p5.mouseY
    }
   
   
  }
   
    
  
 
  return <Sketch setup={setup} draw={draw} />;
};

export default Chakras