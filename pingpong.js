const pl1 = document.querySelector('.pl1btn')
const pl2 = document.querySelector('.pl2btn')
const sch1 = document.querySelector('#schot1')
const sch2 = document.getElementById('schot2')
const slcprt = document.querySelector('.bigselectpart')
const slcprt2 = document.querySelector('.selectPart')
const resetbtn = document.querySelector('.resetbtn')
const optionslist = document.querySelector('.options')
const optionlist = document.querySelectorAll('.option')

slcprt.addEventListener('click',()=>{
    optionslist.classList.toggle('open')

})
optionslist.addEventListener('wheel',(event)=>{
    event.preventDefault();
    optionslist.scrollTop += event.deltaY
})
optionlist.forEach(option => {
    option.addEventListener('click',()=>{
    slcprt2.textContent=option.textContent;
    optionslist.classList.remove('open')     
    })
});

let sch =0;
let sch0 =0;
function pl1down() {
    sch++
    sch1.textContent=sch;
    if(sch1.textContent==slcprt2.textContent){
        sch1.style.color = 'green';
        sch2.style.color = "red";
        pl1.removeEventListener('click',pl1down)
        pl2.removeEventListener('click',pl2down)
    }
}
pl1.addEventListener('click',pl1down)

function pl2down() {
    sch0++
    sch2.textContent=sch0;
    if(sch2.textContent==slcprt2.textContent){
        sch2.style.color = 'green';
        sch1.style.color = 'red';
        pl2.removeEventListener('click',pl2down)
        pl1.removeEventListener('click',pl1down)
    }
}
pl2.addEventListener('click',pl2down);
resetbtn.addEventListener('click',()=>{
    sch =0;
    sch1.textContent=sch;
    sch0=0
    sch2.textContent=sch0
    sch1.style.color= 'black'
    sch2.style.color= 'black'
    pl2.addEventListener('click',pl2down);
    pl1.addEventListener('click',pl1down)
    
})

