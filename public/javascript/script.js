
var container, sliderContainer, sliderLength, windowWt, windowHt, sections;
var prevElm, nextElm;
function initSlider(){
    prevElm = document.getElementById("prev");
    nextElm = document.getElementById("next");
    
    prevElm.addEventListener("click", function(){
                            nextElm.classList.remove("disable");

        var slideNum = parseInt(sliderContainer.getAttribute("data-slide"))-1;
        if(slideNum < 0){return false;}
        var transX = -(slideNum*windowWt);
        sliderContainer.style.transform = "translateX("+transX+"px)"
        sliderContainer.setAttribute("data-slide", slideNum);
                        if(slideNum == 0){prevElm.classList.add("disable");}
        
    }, false);
    
    nextElm.addEventListener("click", function(){
                            prevElm.classList.remove("disable");
        var slideNum = parseInt(sliderContainer.getAttribute("data-slide"))+1;
        if(slideNum >= sliderLength){return false;}
        var transX = -(slideNum*windowWt);
        sliderContainer.style.transform = "translateX("+transX+"px)";
        sliderContainer.setAttribute("data-slide", slideNum);
                            if(slideNum == sliderLength-1){nextElm.classList.add("disable");}
    }, false);
}
window.onload = function(){
    windowWt = window.innerWidth;
    if(window.innerWidth > 1600) {
        windowWt = 1600;
    }
    windowHt = window.innerHeight;
    
    container = document.getElementById("containerPortfolio");
    sliderContainer = document.getElementById("sliderPortfolio");
    sliderLength = sliderContainer.children.length;
    sections = sliderContainer.children;

    var totalWidth = sliderLength * windowWt;
    // console.log(sliderLength);
    container.style.width = windowWt+"px";
    sliderContainer.style.width = totalWidth+"px";
    container.style.height = windowHt+"px";
    
    for(i=0; i<sliderLength; i++){
        sections[i].style.width = windowWt+"px";
        sections[i].style.height = windowHt+"px";
    }
    
    initSlider();
    
}
