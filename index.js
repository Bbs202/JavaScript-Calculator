let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        
       switch(e.target.innerText){
           case 'C':
               display.innerText = "";
            break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
            break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                    
                } catch (error) {
                    display.innerText = "Error!";
                }
                
            break;
            case 'sin':
                display.innerText = Math.sin(display.innerText);
            break;
            case 'cos':
                display.innerText = Math.cos(display.innerText);
            break;
            case 'tan':
                display.innerText = Math.tan(display.innerText);
            break;
            case 'log':
                display.innerText = Math.log10(display.innerText);
            break;
           default:
               display.innerText += e.target.innerText;
       }
    });
});