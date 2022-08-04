'use strict'

export default class Planet {
  constructor(age) {
    this.name = ['mercury','venus','mars','jupiter','earth'];
    this.year = [.24,.62,1.88,11.86,1]
    this.expectancy = 80;
    this.age = age;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.earthAge = 0;
    this.yearsLeftToLive = 0;
    this.yearsOverExpectaancy = 0;
    this.planetsAge = [this.mercuryAge,this.venusAge,this.marsAge,this.jupiterAge,this.earthAge];
  }

  convertToYears(){
    this.mercuryAge = parseInt((this.age/.24).toFixed(0));
    this.venusAge = parseInt((this.age/.62).toFixed(0));
    this.marsAge = parseInt((this.age/1.88).toFixed(0));
    this.jupiterAge = parseInt((this.age/11.86).toFixed(0));
    this.earthAge = parseInt((this.age/1).toFixed(0));
    this.yearsLeftToLive = parseInt((this.age));
  } 
}