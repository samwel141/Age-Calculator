const inputs = document.querySelectorAll('input');

const dayInp = document.querySelector('#day');
const monInp = document.querySelector('#month');
const yearInp = document.querySelector('#year');

const dayOut = document.querySelector('#D');
const monOut = document.querySelector('#M');
const yearOut = document.querySelector('#Y');

const form = document.querySelector('form');
const btn = document.querySelector('button');

let date = new Date();

let day = date.getDate();
let month = 1+date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30,31];

function validate(){
    
    let validator = true;
    inputs.forEach((i) =>{
        const parent = i.parentElement;
        // alert('Hey');
        if(!i.value){
            i.style.borderColor = 'red';
            parent.querySelector('p').innerHTML = 'This field is required!!';
            parent.querySelector('label').style.color = 'red';
            // dayInp.parentElement.querySelector('button').top = '45%'
            validator = false; 
           }
          else if(dayInp.value > 31 || dayInp.value < 1){
            dayInp.style.borderColor = 'red';  
            dayInp.parentElement.querySelector('p').innerHTML = 'Must be a valid day!!';
            dayInp.parentElement.querySelector('label').style.color = 'red';
            validator = false;
         
        }    else  if(monInp.value > 12 || monInp.value < 1){            
            monInp.style.borderColor = 'red';  
           monInp.parentElement.querySelector('p').innerHTML = 'Must be a valid month!!';
           monInp.parentElement.querySelector('label').style.color = 'red';
            validator = false; 
        } else if(yearInp.value > year){
            yearInp.style.borderColor = 'red';  
            yearInp.parentElement.querySelector('p').innerHTML = 'Must be a in past!!';
            yearInp.parentElement.querySelector('label').style.color = 'red';
            validator = false;
        } else if(yearInp.value < 0){
            yearInp.style.borderColor = 'red';  
            yearInp.parentElement.querySelector('p').innerHTML = 'Must be a valid year!!';
            yearInp.parentElement.querySelector('label').style.color = 'red';
            validator = false; 
        }
        else {
            i.style.borderColor = 'blue';
            parent.querySelector('p').innerHTML = '';
            validator = true;
        }
    });
    return validator;
}


function handler(e){
    e.preventDefault();
        if(validate()){
        if(dayInp.value > day){
            day += months[month-1];
            month = month - 1;
        }
    
    if(monInp.value > month){
        month = month + 12;
        year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monInp.value;
    const y = year - yearInp.value;

    dayOut.innerHTML = d;
    monOut.innerHTML = m;
    yearOut.innerHTML = y;
}
}

form.addEventListener("submit", handler);



