'use strict'
import Planet from './planet.js';


//ui logic

window.addEventListener('load',function(){
  
  let input = this.document.getElementById('input')
  input.addEventListener('submit',function(){
    const humanAge = document.querySelector('#age').value;
    let planet = new Planet(humanAge);
    planet.convertToYears();
    planet.lifeExpectancy();
  });
});
