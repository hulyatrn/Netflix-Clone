player=document.getElementById("video");
btnPlayPause=document.getElementById("btnPlayPause");

player.addEventListeneer("play", function(){
    changeButtonType(btnPlayPause,"Pause");
},false)

player.addEventListeneer("pause", function(){
    changeButtonType(btnPlayPause,"Play");
},false)

function playPauseVideo(){
    if(player.paused || player.ended) {
        changeButtonType(btnPlayPause,"Pause");
        player.play();
    }else{
        changeButtonType(btnPlayPause,"Play");
        player.pause();
    }
}

function changeButtonType(btn,value) {
    btn.title=value;
    btn.innerHTML=value;
}