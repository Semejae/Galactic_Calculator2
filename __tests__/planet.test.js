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

describe ('convertToYears', () => {

  test('should convert earth years to mercury years', () => {
    const planet = new Planet(50);
    planet.convertToYears();
    expect(planet.mercuryAge).toEqual(208);
    expect(planet.venusAge).toEqual(81);
    expect(planet.marsAge).toEqual(27);
    expect(planet.jupiterAge).toEqual(4);
    expect(planet.earthAge).toEqual(50);
  });
});

describe ('lifeExpectancy', () => {

  test('should subtract age from expectancy', () => {
    const planet = new Planet(50);
    const oldPlanet = new Planet(100);
    planet.lifeExpectancy();
    oldPlanet.lifeExpectancy();
    expect(planet.yearsLeftToLive).toEqual(30);
    expect(planet.yearsOverExpectancy).toEqual(20);
  });
});