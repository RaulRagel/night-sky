

var Sky = function(stars=50){

    this.elem;
    this.stars = stars;

    this.init();
}

Sky.prototype.init = function(){

    this.elem = document.getElementById("sky");
}

Sky.prototype.setStars = function(){

    for(var i=0; i<this.stars; i++){

        var star = new Star();
        // var x = Math.floor(Math.random()*this.elem.offsetWidth) + "px";
        // var y = Math.floor(Math.random()*this.elem.offsetHeight) + "px";

        var x = Math.floor(Math.random()*window.screen.width) + "px";
        var y = Math.floor(Math.random()*window.screen.height) + "px";

        this.elem.appendChild(star.create(x, y))
    }
}