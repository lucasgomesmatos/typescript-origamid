"use strict";
function abortar(message) {
    throw new Error(message);
}
abortar('Error critico... linha 1');
console.log('Fim');
