import Planet from './../src/js/planet.js'


describe ('Planet', () => {

  test('should return planet function', () => {
    const planet = new Planet(50);
    expect(planet.age).toEqual(50);
    expect(planet.name).toEqual(['mercury','venus','mars','jupiter','earth']);
    expect(planet.year).toEqual([.24,.62,1.88,11.86,1]);
    expect(planet.expectancy).toEqual(80);
    expect(planet.mercuryAge).toEqual(0);
    expect(planet.venusAge).toEqual(0);
    expect(planet.marsAge).toEqual(0);
    expect(planet.jupiterAge).toEqual(0);
    expect(planet.earthAge).toEqual(0);
  });
});  