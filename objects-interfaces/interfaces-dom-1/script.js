"use strict";
const video = document.querySelector('#videoprincipal');
if (video instanceof HTMLVideoElement) {
    video.currentTime = 10;
    console.log(video?.currentTime);
}
