window.addEventListener("load", init);

var audio;

function init(){
    var ul = document.getElementById("songList");
    audio = document.getElementById("audio");

    for(var i = 0; i < songsArray.length; i++){
        var li = document.createElement("li");
        li.innerHTML = songsArray[i].song_name;
        ul.appendChild(li);
        li.addEventListener("click", playSong);
    }
}

function playSong(){
    var songName = event.srcElement.innerHTML;
    var audioSrc = "";
    for(var i = 0; i < songsArray.length; i++){
        if(songsArray[i].song_name == songName){
            audioSrc = songsArray[i].song_url;
            console.log(audioSrc);
        }
    }
    audio.src = audioSrc;
    audio.play();
}