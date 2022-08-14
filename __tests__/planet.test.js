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
    expect(person.currentYears()).toEqual(15.95);
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