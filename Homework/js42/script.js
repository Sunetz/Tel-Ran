const setBtn = document.querySelector('#setBtn');

const daysTo = document.querySelector('.countDays');
const hoursTo = document.querySelector('.countHours');
const minutesTo = document.querySelector('.countMinutes');
const secondsTo = document.querySelector('.countSeconds');
let id;
setBtn.onclick = startTimer;

function startTimer(){
    if(id !=null){
        clearInterval(id)
    }
    let date = document.querySelector('#date');
    let start = date.value;
    const setDate = new Date(start);
    document.querySelector('#text').innerHTML = 'Before your date left...';
    document.querySelector('.timer').classList.remove('hidden');
    id = setInterval(renderDateTimer, 1000, setDate);     
    
}
function renderDateTimer(setDate){
        
    const now = new Date();
    const timeLeft = (setDate - now);
    if(timeLeft < 0){
        document.querySelector('.timer').classList.add('hidden');
        document.querySelector('#text').innerHTML = 'Time is over';
        clearInterval(id);
    }
    else{
        const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000)); 
        const hours = Math.floor((timeLeft / (60 * 60 * 1000)) % 24);
        const minutes = Math.floor((timeLeft / (60 * 1000)) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);            
        daysTo.innerHTML = days;
        hoursTo.innerHTML = hours;
        minutesTo.innerHTML = minutes;
        secondsTo.innerHTML = seconds;
    }  
}