'use strict'

export default class Astro {
  constructor(age, planet) {
    this.age = age;
    this.planet = planet;
  }

  convertToYears(){
    this.mercuryAge = parseInt((this.age/.24).toFixed(0));
    this.venusAge = parseInt((this.age/.62).toFixed(0));
    this.marsAge = parseInt((this.age/1.88).toFixed(0));
    this.jupiterAge = parseInt((this.age/11.86).toFixed(0));
    this.earthAge = parseInt((this.age/1).toFixed(0));
    this.yearsLeftToLive = parseInt((this.age));
  } 

  lifeExpectancy(){
    if (this.age < this.expectancy) {
      this.yearsLeftToLive = this.expectancy - this.age;
    } else (this.age > this.expectancy)
      this.yearsOverExpectancy = this.age - this.expectancy;
  };


};