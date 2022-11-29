"use strict";
const video = document.querySelector("#videoprincipal");
if (video instanceof HTMLVideoElement) {
    console.log(video.volume);
}
const links = document.querySelectorAll('.link');
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href.toUpperCase());
    }
});
