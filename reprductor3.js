var player3 = document.getElementById("player-3")
let playbtn3 = document.getElementById("playbtn-3")

var playpause = function(){
    if(player3.paused){
        player3.play();
    } else {
        player3.pause();
    }
}

playbtn3.addEventListener("click", playpause)

player3.onplay = function(){
    playbtn3.classList.remove("fa-play");
    playbtn3.classList.add("fa-pause");
}

player3.onpause = function(){
    playbtn3.classList.add("fa-play");
    playbtn3.classList.remove("fa-pause");
}