var player = document.getElementById("player");
let playbtn = document.getElementById("playbtn")

var playpause = function(){
    if(player.paused){
    player.play();
    } else{
        player.pause();
    }
}

playbtn.addEventListener("click", playpause);

player.onplay = function(){
playbtn.classList.remove("fa-play");
playbtn.classList.add("fa-pause")
}

player.onpause = function(){
    playbtn.classList.add("fa-play");
    playbtn.classList.remove("fa-pause")
    }

