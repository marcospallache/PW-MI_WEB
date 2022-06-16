var player7 = document.getElementById("player-7")
let playbtn7 = document.getElementById("playbtn-7")

var playpause = function(){
    if(player7.paused){
        player7.play();
    } else {
        player7.pause();
    }
}

playbtn7.addEventListener("click", playpause)

player7.onplay = function(){
    playbtn7.classList.remove("fa-play");
    playbtn7.classList.add("fa-pause");
}

player7.onpause = function(){
    playbtn7.classList.add("fa-play");
    playbtn7.classList.remove("fa-pause");
}