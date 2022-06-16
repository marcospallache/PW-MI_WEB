var player2 = document.getElementById("player-2")
let playbtn2 = document.getElementById("playbtn-2")

var playpause = function(){
    if(player2.paused){
        player2.play();
    } else {
        player2.pause();
    }
}

playbtn2.addEventListener("click", playpause)

player2.onplay = function(){
    playbtn2.classList.remove("fa-play");
    playbtn2.classList.add("fa-pause");
}

player2.onpause = function(){
    playbtn2.classList.add("fa-play");
    playbtn2.classList.remove("fa-pause");
}

