import Astro from './../src/js/planet.js'


describe ('Astro', () => {

  test('should return astro object properties', () => {
    const person = new Astro(50, 'mars');
    expect(person.age).toEqual(50);
  });
});  

