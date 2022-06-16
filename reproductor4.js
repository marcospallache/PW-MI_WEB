var player4 = document.getElementById("player-4")
let playbtn4 = document.getElementById("playbtn-4")

var playpause = function(){
    if(player4.paused){
        player4.play();
    } else {
        player4.pause();
    }
}

playbtn4.addEventListener("click", playpause)

player4.onplay = function(){
    playbtn4.classList.remove("fa-play");
    playbtn4.classList.add("fa-pause");
}

player4.onpause = function(){
    playbtn4.classList.add("fa-play");
    playbtn4.classList.remove("fa-pause");
}