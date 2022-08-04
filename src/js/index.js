'use strict'
import Planet from './planet.js';


//ui logic

window.addEventListener('load',function(){
  
  let input = this.document.getElementById('input')
  input.addEventListener('submit',function(event){
    event.preventDefault();
    let planet = new Planet(humanAge,ethnicGroup,planetGroup);
    const humanAge = document.querySelector('#age').value;
    const ethnicGroup = document.querySelector('#input2').value;
    const planetGroup = document.querySelector('#input3').value;
    planet.convertToYears();
    planet.lifeExpectancy();
  })
})
