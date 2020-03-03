// Variables

var tagBtExample1  = document.querySelector("#btExample1");
var tagMasterBox = document.querySelector("#masterBox");
var tagBoxImg = document.querySelector("#boxImg");
var tagBtOpenExample2 = document.querySelector("#btOpenExample2");
var tagBtCloseExample2 = document.querySelector("#btCloseExample2");

// =====================================================

tagBtExample1.addEventListener("click",MotorExample1);
tagBtOpenExample2.addEventListener("click",MotorOpenExample2);
tagBtCloseExample2.addEventListener("click",MotorCloseExample2);


function MotorExample1(){

MotorFadeInFadeOut(tagMasterBox);

}


function MotorOpenExample2(){

    FadeIn(tagBoxImg);
    ChangeDisabledElemento(tagBtOpenExample2,true);

}

function MotorCloseExample2(){

    FadeOut(tagBoxImg);
    ChangeDisabledElemento(tagBtOpenExample2,false);

}


function MotorFadeInFadeOut(element){

FadeIn(element);

window.setTimeout(function(){

FadeOut(element);   
    
    
},2520);

}


function FadeIn(element){

    element.classList.remove("noDisplay");

    window.setTimeout(function(){
    
        element.classList.remove("noOpacity");     
    
    },20);

}


function FadeOut(element){

    element.classList.add("noOpacity");
    
    window.setTimeout(function(){
        
        element.classList.add("noDisplay");     
   
    },500);
   
}



function ChangeDisabledElemento(element,value){

    element.disabled = value;
        
}