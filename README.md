# VODAFONE TECH TEST

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



Encountered *this* little Windows vs Mac issue during my first git commit:      
```fatal: CRLF would be replaced by LF in src/phones.json```  
which was luckily resolved within seconds thanks to some good Samaritans on [Stack Overflow](https://stackoverflow.com/questions/20168639/git-commit-get-fatal-error-fatal-crlf-would-be-replaced-by-lf-in).  
All I needed was to overwrite git config settings in the command line, like such:  
```git config --global core.autocrlf false```  
and **voila!** - life is beautiful again.  

**Tuesday Update:**  
Found a fantastic [React testing course on Udemy](https://www.udemy.com/react-testing/) which I breezed through in the afternoon. Can finally move onto TDD'ing React! :raised-hands:
 
Instead of building React on top of my existing git repository, I made a new `create-react-app` directory and copied my designs in there, so my first git commit here reflects the first passing test in Enzyme.  
My reason for doing so is to have a plan B: to keep the integrity of my original static project intact without having to make it public and push it to GitHub before the test is due.  
This way I'm keeping a backup just in case I can't get React to work the way I want it to by tomorrow, and I can make the "app" interactive using plain JS.  

