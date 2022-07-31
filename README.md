<!-- ## galatic calculator2

### by_**{Anthony-Gladden}**_

### _{this is a page to return age and expectancy from different planets}_

## test:
*_describe: Planet()_

*_test: should return planet function_
*_code: const planet = new Planet(50);_
*_expect(planet.age).toEqual(50);_
*_expect(planet.name).toEqual(['mercury','venus','mars','jupiter','earth']);_
*_expect(planet.year).toEqual([.24,.62,1.88,11.86,1]);_
*_expect(planet.expectancy).toEqual(80);_
*_expect(planet.mercuryAge).toEqual(0);_
*_expect(planet.venusAge).toEqual(0);_
*_expect(planet.marsAge).toEqual(0);_
*_expect(planet.jupiterAge).toEqual(0);_
*_expect(planet.earthAge).toEqual(0);_
      *_expect(planet.yearsLeftToLive).toEqual(0);_


*_describe: convertToYears()_

*_test: should convert earth years to mercury years_
*_code: const planet = new Planet(50);_
*_code: planet.convertToYears();_
*_expect(planet.mercuryAge).toEqual(208);_
*_expect(planet.venusAge).toEqual(81);_
*_expect(planet.marsAge).toEqual(27);_
*_expect(planet.jupiterAge).toEqual(4);_
*_expect(planet.earthAge).toEqual(50);_

*_describe ('lifeExpectancy', () => {

*_test: should subtract age from expectancy_
*_code: const planet = new Planet(50);_
*_code: const oldPlanet = new Planet(100);_
*_code: planet.lifeExpectancy();_
*_oldPlanet.lifeExpectancy();_
*_expect(planet.yearsLeftToLive).toEqual(30);_
*_expect(oldPlanet.yearsOverExpectancy).toEqual(20)_


## technologies used 
* _VScode_ 
* _gitBash_
* _github_
* _html_
* _javascript_
* _css_

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
_refresh page if issues occur or conatact me a.gladden360@outlook.com_


_Copyright (c) 07/31/2022 Anthony Gladden_ -->
