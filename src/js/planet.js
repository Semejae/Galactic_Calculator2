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

  yearsLeft() {
    let expect = 65 - this.age;
    let daysLeft = 0;
    if(this.planet === 'earth') {
      daysLeft = expect / 1;
    } else if (this.planet === 'mars') {
      daysLeft = expect / 1.88;
    } else if (this.planet === 'mercury') {
      daysLeft = expect / 0.24;
    } else if (this.planet === 'venus') {
      daysLeft = expect / 0.62;
    } else if (this.planet === 'jupiter') {
      daysLeft = expect / 11.86;
    } else {
      return 'please, pick a planet'
    }
    return parseFloat(daysLeft.toFixed(2))
  }

}