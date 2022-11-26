"use strict";
const link = document.getElementById('ex');
if (link instanceof HTMLAnchorElement) {
    // link.setAttribute('href', 'https://www.origamid.com');
    link.href = link.href.replace('http://', 'https://');
}
