

var Star = function(){


}


Star.prototype.create = function(x, y){

    var starElem = document.createElement("div");
    starElem.classList.add("star");

    starElem.style.left = x;
    starElem.style.top = y;

    // console.log('%cStar.js line:17 starElem', 'color: #007acc;', starElem);

    starElem.style.animationName = "glowing-stars";
    starElem.style.animationDuration = Math.floor(Math.random()*15-5) + "s";
    starElem.style.animationTimingFunction = "ease";
    starElem.style.animationDelay = Math.floor(Math.random()*2) + "s";
    starElem.style.animationIterationCount = "infinite";

    return starElem;
}
