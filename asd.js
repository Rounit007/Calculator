let string=" ";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;

        }
        else if(e.target.innerHTML=='C'){
                string=" ";
                document.querySelector('input').value=string;

            
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.toString().slice(0,-1);
            document.querySelector('input').value=string;

        
    }
//     else if(e.target.innerHTML=='M+'){
//         let memory = 0;
//         memory += parseFloat(document.getElementsByClassName("input").innerHTML);
//         document.querySelector('input').value=memory;

    
// }

    
    
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
     
    })
})
const themes = ["light-theme", "dark-theme", "blue-theme"];
let currentTheme = 0;

function setTheme() {
  const body = document.getElementsByTagName("body")[0];
  body.classList.remove(themes[currentTheme]); // remove the current theme class
  currentTheme = (currentTheme + 1) % themes.length; // increment the current theme index
  body.classList.add(themes[currentTheme]); // add the new theme class
}
