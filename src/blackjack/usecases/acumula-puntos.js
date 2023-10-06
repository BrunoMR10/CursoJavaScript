import { valorCarta } from "./valor-carta";

const puntosHTML = document.querySelectorAll('small');

export const acumulaPuntos=(carta,turno,puntosJugadores)=>{
    puntosJugadores[turno] =  puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText =  puntosJugadores[turno];
    return  puntosJugadores[turno]
}