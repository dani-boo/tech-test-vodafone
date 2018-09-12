# VODAFONE TECH TEST

A small interactive front end app built in five days with React, a JS library I had never touched before. 


![react logo](./public/favicon.ico "React")

I had far too much fun with this. Fully TDD (until Wednesday, when I had to learn React components fast; still wrote tests though.)

## How to run

**Install:**

- clone this repo
- cd `tech-test-vodafone`  
- run `npm install`

**Run:**

- in the console type `cd vodafone-tech-test`
- run `npm start` or `yarn start`  

**Tests:**
- run `yarn test` or `npm test`
- run `yarn test --coverage` or `npm test -- --coverage`

**The original spec:**  
![](http://res.cloudinary.com/dani-devs-and-designs/image/upload/v1536769130/page_sbzefj.jpg)  


*NOTE THE PRICEY UPFRONT COST IN THE ORIGINAL SPEC. THERE WAS QUITE A DIFFERENCE BETWEEN THAT AND THE REAL DATA IN THE PHONES.JSON FILE*  

**The finished product:**  
![](http://res.cloudinary.com/dani-devs-and-designs/image/upload/v1536769032/Screen_Shot_2018-09-12_at_17.16.39_goaj7a.png)

**Test Coverage:**
![yarn test coverage report](http://res.cloudinary.com/dani-devs-and-designs/image/upload/v1536768043/Screen_Shot_2018-09-12_at_16.58.14_mylnwu.png)

## What I did

### My Plan:

- Set up project directories
- Choose stack
- Investigate fonts
- Write user stories
- HTML && CSS: static page lay-out, design and styling
- Learn React
- Migrate "app" to use `create-react-app`

**React:**

- Define the application state
- Learn Enzyme & Jest to TDD

**Weekend Progress:**

Did the layout and styling according to HTML and CSS best standards (learnt quite a lot in the process). Started reading up on React. The user stories were minute, and covered by the specs and tests (proof is in the test coverage).  
Basically, I was given a project outline with 3 phone images, a JSON data file, and a jpeg of what the desired outcome should look like. On click, buttons should render the desired data on screen (such as phone images, cost and colour, according to colour and data package choices.)  

Encountered _this_ little Windows vs Mac issue during my first git commit:  
`fatal: CRLF would be replaced by LF in src/phones.json`  
which was luckily resolved within seconds thanks to some good Samaritans on [Stack Overflow](https://stackoverflow.com/questions/20168639/git-commit-get-fatal-error-fatal-crlf-would-be-replaced-by-lf-in).  
All I needed was to overwrite git config settings in the command line, like such:  
`git config --global core.autocrlf false`  
and **voila!** - life is beautiful again.

I tried to be sneaky and snatch Vodafone's own fonts (.woff and .woff2) files from their website, but still have a bit to learn on that topic. Google fonts did fine.  

**Tuesday Update:**

Found a fantastic [React testing course on Udemy](https://www.udemy.com/react-testing/) which I breezed through in the afternoon. Can finally move onto TDD'ing React!  

Instead of building React on top of my existing git repository, I made a new `create-react-app` directory and copied my designs in there, so my first git commit here reflects the first passing test in Enzyme.  
My reason for doing so is to have a plan B: to keep the integrity of my original static project intact without having to make it public and push it to GitHub before the test is due.  
This way I'm keeping a backup just in case I can't get React to work the way I want it to by tomorrow, and I can make the "app" interactive using plain JS.

**Outline for Wednesday morning:**

- Write logic for colour and capacity selection. Components?
- Make App a constructor with a super
- Set state
- Figure out how to fetch data form JSon file

I'm happy to say that I did everything I set out to do.

**Resources and contributions:**

- Official create-react-app documentation
- [lodash](https://lodash.com/docs/#sortBy)
- [This](https://www.valentinog.com/blog/react-webpack-babel/) brilliant tutorial
- The aforementioned Udemy course, and @Benjamin-Tomkins for pointing me in that direction
- @benceg for sanity checking my final project and giving advice re. tests, components and the magic that is React in general.
