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

  });

  test("should create prototype for users remaining life on planet '' property", () => {

  });

  test("should create prototype for users remaining life on planet '' property", () => {

  });

  test("should create prototype for users remaining life on planet '' property", () => {

  });

  test("should create prototype for users remaining life on planet '' property", () => {

  });

  
})
});