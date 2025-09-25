
    // Left vertical lights
const leftRed = document.getElementById("left-red");
const leftYellow = document.getElementById("left-yellow");
const leftGreen = document.getElementById("left-green");

// Right vertical lights
const rightRed = document.getElementById("right-red");
const rightYellow = document.getElementById("right-yellow");
const rightGreen = document.getElementById("right-green");

// Top horizontal lights
const topRed = document.getElementById("top-red");
const topYellow = document.getElementById("top-yellow");
const topGreen = document.getElementById("top-green");

// Bottom horizontal lights
const bottomRed = document.getElementById("bottom-red");
const bottomYellow = document.getElementById("bottom-yellow");
const bottomGreen = document.getElementById("bottom-green");
 
 function onyellowLights(){
leftYellow.classList.add("on");
rightYellow.classList.add("on");
bottomYellow.classList.add("on");
topYellow.classList.add("on");
 }
setTimeout(() => {
     onyellowLights();

},1000)




function trafficCycle(){
    setTimeout(() => {      // Green signal ON from top
    leftYellow.classList.remove("on");
rightYellow.classList.remove("on");
bottomYellow.classList.remove("on");
topYellow.classList.remove("on");


        topGreen.classList.add("on");
        leftRed.classList.add("on");
        rightRed.classList.add("on");
        bottomRed.classList.add("on");

    },2000);
setTimeout(() => {         //  changing green signal top to right
      topGreen.classList.remove("on");
    rightRed.classList.remove("on");
    topYellow.classList.add("on");
    rightYellow.classList.add("on");
    
},8000);

setTimeout(() => {          // Green signal ON from right
 topYellow.classList.remove("on");
    rightYellow.classList.remove("on");
    topRed.classList.add("on");
    rightGreen.classList.add("on");
},10000);

setTimeout(() => {   //changing green signal right to bottom
 rightGreen.classList.remove("on");  
 rightYellow.classList.add("on");
bottomRed.classList.remove("on");   
 bottomYellow.classList.add("on");   

},15000);

setTimeout(() => {       //green signal ON from bottom 
    // on light
    bottomGreen.classList.add("on");
    rightRed.classList.add("on");


    //off light
    rightYellow.classList.remove("on");
    bottomYellow.classList.remove("on");
},17000);


setTimeout(() => {     //changing green light bottom to left
    //on light
    bottomYellow.classList.add("on");
    leftYellow.classList.add("on");


    //off light
        bottomGreen.classList.remove("on");
        leftRed.classList.remove("on");
    
},22000);

setTimeout(() => {     //Green signal on left side
    //on light
    leftGreen.classList.add("on");
    bottomRed.classList.add("on");

    //off light
     
    bottomYellow.classList.remove("on");
    leftYellow.classList.remove("on");
},24000);

setTimeout(() => {  // changing green light from left to top
    //on light
    leftYellow.classList.add("on");
    topYellow.classList.add("on");


    //off light
     leftGreen.classList.remove("on");
     topRed.classList.remove("on");
},29000);



};


trafficCycle();

setInterval(() =>{
trafficCycle();
},29000)
