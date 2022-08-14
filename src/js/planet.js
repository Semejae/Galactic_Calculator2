'use strict'

export default class Astro {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  currentYears() {
    let currentAge = 0;
    if(this.planet === 'earth'){
      currentAge = this.age * 1;
    } else if(this.planet === 'mars'){
      currentAge = this.age / 1.88;
    } else if(this.planet === 'mercury'){
      currentAge = this.age / 0.24;
    } else if(this.planet === 'venus'){
      currentAge = this.age / 0.62;
    } else if(this.planet === 'jupiter'){
      currentAge = this.age / 11.86;
    } else {
      return 'please, pick a planet'
    }
    return parseFloat(currentAge.toFixed(2))
  }

}