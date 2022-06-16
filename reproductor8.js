var player8 = document.getElementById("player-8")
let playbtn8 = document.getElementById("playbtn-8")

var playpause = function(){
    if(player8.paused){
        player8.play();
    } else {
        player8.pause();
    }
}

playbtn8.addEventListener("click", playpause)

player8.onplay = function(){
    playbtn8.classList.remove("fa-play");
    playbtn8.classList.add("fa-pause");
}

player8.onpause = function(){
    playbtn8.classList.add("fa-play");
    playbtn8.classList.remove("fa-pause");
}