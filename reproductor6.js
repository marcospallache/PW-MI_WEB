var player6 = document.getElementById("player-6")
let playbtn6 = document.getElementById("playbtn-6")

var playpause = function(){
    if(player6.paused){
        player6.play();
    } else {
        player6.pause();
    }
}

playbtn6.addEventListener("click", playpause)

player6.onplay = function(){
    playbtn6.classList.remove("fa-play");
    playbtn6.classList.add("fa-pause");
}

player6.onpause = function(){
    playbtn6.classList.add("fa-play");
    playbtn6.classList.remove("fa-pause");
}