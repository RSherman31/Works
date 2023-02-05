let bodyBtn = document.getElementById("body-btn");
let mainWingBtn = document.getElementById("main-wing-btn");
let subWingBtn = document.getElementById("sub-wing-btn");
let upperBeakBtn = document.getElementById("upper-beak-btn");
let lowerBeakBtn = document.getElementById("lower-beak-btn");
let clawBtn = document.getElementById("claw-btn");
let tailWingBtn = document.getElementById("tail-wing-btn");
let headWingBtn = document.getElementById("head-wing-btn");
let eyePatchBtn = document.getElementById("eye-patch-btn");
let eyeBtn = document.getElementById("eye-btn");
let colors = [
  "#cd0000",
  "#f03800",
  "#ffb64c",
  "#ff9100",
  "#0095ff",
  "#1fbf66",
  "#ff4380",
  "#deecf1",
  "#714c2f",
  "#7fe881",
  "#f7006a",
];

let color ='blue';

let selBox = document.getElementById(`color`)
let controls = document.querySelector('.controls')

let parrot = document.querySelector('.wrapper')

selBox.addEventListener('change',()=>{
  // color = colors[selBox.selectedIndex]
  color = selBox.options[selBox.selectedIndex].value;
  // console.log(color)
  //  document.querySelector('.wing').style.backgroundColor = color
})

function colorChange(event) {
  if (event.target.tagName.toLowerCase() === 'button') {
    console.log(event.target.id)
    switch(event.target.id) {
        case 'body-btn' : document.querySelectorAll('.body-clr').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
        case 'tail-wing-btn' : document.querySelectorAll('.tail-wing').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
        case 'sub-wing-btn' : document.querySelectorAll('.wing-color2').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
        case 'upper-beak-btn' : document.querySelectorAll('.beak-upper').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
        case 'lower-beak-btn' : document.querySelectorAll('.beak-lower').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
        case 'main-wing-btn' : document.querySelectorAll('.wing-color1').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
        case 'eye-btn' : document.querySelectorAll('.eye').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
        case 'head-wing-btn' : document.querySelectorAll('.feather').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
          case 'eye-patch-btn' : document.querySelectorAll('.eye-patch').forEach((e)=>
                          {
                            e.style.backgroundColor = color; 
                            console.log(e.style.backgroundColor)
                          })
                          break;
          
      
  
    }

  }
  
}

controls.addEventListener('click', colorChange)







