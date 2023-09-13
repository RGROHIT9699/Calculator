let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
const buttondel = document.getElementById('button_del');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(button.innerText === '='){
            string = eval(string);
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
        }
        else if(e.target.innerHTML === 'DEL') return;
        else{
            string += e.target.innerHTML;
        }
        display.value = string;
    })
})
buttondel.addEventListener('click',()=>{
    string = display.value.slice(0, display.value.length-1);
    display.value = string;
})