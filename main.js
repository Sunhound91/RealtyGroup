var styleSheet= document.styleSheets;
var body=document.getElementsByTagName('body');
var wtBrd = document.getElementById('wtBrd');
var intro=document.getElementById('intro');
var prpBx = document.getElementById('prpBx');
wtBrd.style.setProperty('visibility', 'hidden');
intro.style.setProperty('visibility', 'hidden');
prpBx.style.setProperty('visibility', 'hidden');

console.log(wtBrd.id);
function addProperty(n){
   // element= styleSheet[0].cssRules[0].cssRules[n];
    if(n==18){
        wtBrd.style.setProperty('visibility', 'visible');
        wtBrd.style.setProperty('animation-name','slideRight');
    }
    else if(n==19){
        prpBx.style.setProperty('visibility', 'visible');
        prpBx.style.setProperty('animation-name', 'holdPos');
    }
    else if(n==11){
        intro.style.setProperty('visibility', 'visible');
        intro.style.setProperty('animation-name', 'fadeIn');
    }
    //figure out workaround for changing n way to keep track
    console.log('hello');
}


var bounding= prpBx.getBoundingClientRect();
console.log(body);
function startAnimation(){
    var bounding=prpBx.getBoundingClientRect();
    if(bounding.top <= 630){
        addProperty(11);
        addProperty(18);//create method to get index of specific elements or workaround because they change
        addProperty(19);
        this.console.log('hello');
        window.removeEventListener('scroll',startAnimation);
}}
addEventListener('scroll', startAnimation);
