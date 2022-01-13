import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
 
if (localStorage.getItem("videoplayer-current"))
{
    player.setCurrentTime(localStorage.getItem("videoplayer-current")).then(function (seconds) { })
}
   

const onPlay = function (event) {
    console.log(event.seconds)
    let timePlay = event.seconds
    localStorage.setItem("videoplayer-current", timePlay)
         
};

 player.on('timeupdate', throttle(onPlay, 1000));


