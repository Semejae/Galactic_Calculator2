## galatic calculator2

### by_**{Anthony-Gladden}**_

### _{this is a page to return age and expectancy from different planets}_

## test:
*_describe ('Astro', () => {

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


## technologies used 
* _VScode_ 
* _gitBash_
* _github_
* _html_
* _javascript_
* _css_
* _webpack_
* _jest_

## Description 
_this page shows you your age and expectancy on planets_

## Setup/Installation Requirements
* _within your terminal, navigate to your desktop_
* _Use 'git clone [instert my repository's http link] to add my code to your device_
* _navigate to the file within your file explorer_
* _Open index.html in your browser, prefferably use Chrome_
* _Open file in your VS Code to edit_
* _To edit but not make perminant changes, create a new branch using 'git branch [new-branch-name]'_
* _Switch to that branch and edit away by using 'git checkout [branch-you'd-like-to-change-to]'_
* _Initialize NPM inside of your root directory your-project_
* _run npm init -y_
* _In the package.json file, change the "name" to your-project's name. Update "description", "author" and "license" as well (”MIT”)_
* _Install packages references from `package.json` that you copied over. 
* _run `npm install` - this creates `package-lock.json` and `node_modules`_
* _Add a eslintrc and babelrc file. Copy if need be._
* _Create .gitignore file_  
* _git add .gitignore and package.json_
* _git commit -m "adding .gitignore file" and git commit -m "adding package.json file"_
* _also you can view the website @ https://github.com/Semejae/galactic_calculator2.git

## known bugs
* _N/A_

## License
Copyright 2022 <Anthony Gladden>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
_refresh page if issues occur or conatact me a.gladden360@outlook.com_


_Copyright (c) 07/31/2022 Anthony Gladden_
