let Display =document.querySelector('#display');
let buttons =document.querySelectorAll('button');
let buttonarray= Array.from(buttons);

let string="";
buttonarray.forEach(btn=>{
    btn.addEventListener('click',(event)=>{
        if(event.target.innerHTML=='Del'){
            string=string.substring(0,string.length-1);
            Display.value=string;
        }
        else if(event.target.innerHTML=="AC") {
            string= ' ';
            Display.value=string;
        }
        else if(event.target.innerHTML=='='){
            string=eval(string);
            Display.value=string;
        }else{
        string+=event.target.innerHTML;
        Display.value=string;
     
    }
    });
});
