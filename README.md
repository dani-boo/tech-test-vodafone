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



Encountered *this* little Windows vs Mac issue during my first git commit:      
```fatal: CRLF would be replaced by LF in src/phones.json```  
which was luckily resolved within seconds thanks to some good Samaritans on [Stack Overflow](https://stackoverflow.com/questions/20168639/git-commit-get-fatal-error-fatal-crlf-would-be-replaced-by-lf-in).  
All I needed was to overwrite git config settings in the command line, like such:  
```git config --global core.autocrlf false```  
and **voila!** - life is beautiful again.  
 