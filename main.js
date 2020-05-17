var styleSheetRules= document.styleSheets[0].cssRules[0].cssRules;
var slideRights= document.getElementsByClassName('slideRight');
var holdPos=document.getElementsByClassName('holdPos');
var fades=document.getElementsByClassName('fadeIn');
 //hide elements on load//
function hideElements(collctElem){
  for(item of collctElem){
    item.style.setProperty('visibility','hidden');
  }
}
function isInViewPort(elem){
  var bounding = elem.getBoundingClientRect();
  return (
       bounding.top >= 100 &&
      // bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
      // bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
 function getAnimate(collctElem){
  for(item of collctElem){
      if(collctElem==fades){
        if(isInViewPort(item)){
          item.style.setProperty('visibility','visible');
          item.style.setProperty('animation-name','fadeIn');
        }
      }
      else if(collctElem==holdPos){
        if(isInViewPort(item)){
          item.style.setProperty('visibility','visible');
          item.style.setProperty('animation-name','holdPos');
        }
      }
      else if(collctElem==slideRights){
        if(isInViewPort(item)){
          item.style.setProperty('visibility','visible');
          item.style.setProperty('animation-name','slideRight');
        }
    }
  }
}
 hideElements(slideRights);
 hideElements(holdPos);
 hideElements(fades);
 window.onscroll=function(){
  getAnimate(slideRights);
  getAnimate(holdPos);
  getAnimate(fades);
 };
// animate elements on viewport location//