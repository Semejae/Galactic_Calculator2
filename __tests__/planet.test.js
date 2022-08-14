import Astro from './../src/js/planet.js'


describe ('Astro', () => {

  test('should return astro object properties', () => {
    const person = new Astro(30, 'mars');
    expect(person.age).toEqual(30);
    expect(person.planet).toEqual('mars');
  });

describe('Astro#currentYears', () => {

  test("should create a prototype for user age based on the value 'earth' for the planet property ",() =>{
    const person = new Astro(30,'earth');
    expect(person.planet).toEqual('earth');
    expect(person.currentYears()).toEqual(30);
  });
  
  test("should create a prototype for user age based on the value 'mars' for the planet property ",() =>{
    const person = new Astro(30, 'mars');
    expect(person.planet).toEqual('mars');
    expect(person.currentYears()).toEqual(15.96);
  });

  test("should create a prototype for user age based on the value 'mercury' for the planet property ",() =>{
    const person = new Astro(30, 'mercury');
    expect(person.planet).toEqual('mercury');
    expect(person.currentYears()).toEqual(125);
  });

  test("should create a prototype for user age based on the value 'venus' for the planet property ", () =>{
    const person = new Astro(30, 'venus');
    expect(person.planet).toEqual('venus');
    expect(person.currentYears()).toEqual(48.39)
  });

  test("should create a prototype for user age based on the value 'jupiter' for the planet property ", () => {
    const person = new Astro(30, 'jupiter')
    expect(person.planet).toEqual('jupiter');
    expect(person.currentYears()).toEqual(2.53)
  });

  test("should return 'please, pick a planet' if no value", () => {
    const person = new Astro(30, '');
    expect(person.planet).toEqual('');
    expect(person.currentYears()).toEqual('please, pick a planet');
  });
});
describe('Astro#yearsLeft', () => {

  test("should create prototype for users remaining life on planet 'earth' property", () => {
    const person = new Astro(30, 'earth');
    expect(person.planet).toEqual('earth');
    expect(person.yearsLeft()).toEqual(35)
  });

  test("should create prototype for users remaining life on planet 'mars' property", () => {
    const person = new Astro(30, 'mars');
    expect(person.planet).toEqual('mars');
    expect(person.yearsLeft()).toEqual(18.62)
  });

  test("should create prototype for users remaining life on planet 'mercury' property", () => {
    const person = new Astro(30, 'mercury');
    expect(person.planet).toEqual('mercury');
    expect(person.yearsLeft()).toEqual(145.83)
  });

  test("should create prototype for users remaining life on planet 'venus' property", () => {
    const person = new Astro(30, 'venus');
    expect(person.planet).toEqual('venus');
    expect(person.yearsLeft()).toEqual(56.45)
  });

  test("should create prototype for users remaining life on planet 'jupiter' property", () => {
    const person = new Astro(30, 'jupiter');
    expect(person.planet).toEqual('jupiter');
    expect(person.yearsLeft()).toEqual(2.95)
  });
  
  test("should return 'please, pick a planet' property", () => {
    const person = new Astro(30, '');
    expect(person.planet).toEqual('');
    expect(person.yearsLeft()).toEqual('please, pick a planet');
  });
});

describe('Astro#yearsOver', () => {

  test('should create a "yearsOver" method that returns the message "you outlived your life by" plus a positive number of years if user is over their expectancy',() =>{
    const person = new Astro(80, 'earth');
    expect(person.planet).toEqual('earth');
    expect(person.yearsOver()).toEqual('you outlived your life by15.00years.')
  });

  test('should update "yearsOver" method based on mars',() =>{
    const person = new Astro(80, 'mars');
    expect(person.planet).toEqual('mars');
    expect(person.yearsOver()).toEqual('you outlived your life by7.98years.')
  });

  test('should update "yearsOver" method based on mercury',() =>{
    const person = new Astro(80, 'mercury');
    expect(person.planet).toEqual('mercury');
    expect(person.yearsOver()).toEqual('you outlived your life by62.50years.')
  });

  test('should update "yearsOver" method based on venus',() =>{
    const person = new Astro(80, 'venus');
    expect(person.planet).toEqual('venus');
    expect(person.yearsOver()).toEqual('you outlived your life by24.19years.')
  });

  test('should update "yearsOver" method based on jupiter',() =>{
    const person = new Astro(80, 'jupiter');
    expect(person.planet).toEqual('jupiter');
    expect(person.yearsOver()).toEqual('you outlived your life by1.26years.')
  });

  test("should return 'please, pick a planet' property", () => {
    const person = new Astro(80, '');
    expect(person.planet).toEqual('');
    expect(person.yearsOver()).toEqual('please, pick a planet');
  });
});
});