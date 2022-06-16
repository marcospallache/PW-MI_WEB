var player5 = document.getElementById("player-5")
let playbtn5 = document.getElementById("playbtn-5")

var playpause = function(){
    if(player5.paused){
        player5.play();
    } else {
        player5.pause();
    }
}

playbtn5.addEventListener("click", playpause)

player5.onplay = function(){
    playbtn5.classList.remove("fa-play");
    playbtn5.classList.add("fa-pause");
}

player5.onpause = function(){
    playbtn5.classList.add("fa-play");
    playbtn5.classList.remove("fa-pause");
}