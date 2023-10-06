import { acumulaPuntos } from "./acumula-puntos";
import { crearCarta } from "./crearCarta";
import pedirCarta from "./pedir-carta";

///turno coputadora



export const turnoComputadora = ( puntosMinimos,deck,puntosJugadores,divCartasJugadores ) => {

    if (!puntosMinimos)throw new Error('Puntos Minimos son necesarios');
    if (!deck)throw new Error('El deck es necesario');

    let puntosComputadora =0
    do {
        const carta = pedirCarta(deck);
        puntosComputadora= acumulaPuntos(carta,puntosJugadores.length-1,puntosJugadores);
        crearCarta(carta,puntosJugadores.length-1,divCartasJugadores);

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    determinarGanador(puntosJugadores);

}

const determinarGanador = (puntosJugadores) =>{
    const [puntosMinimos,puntosComputadora] = puntosJugadores;
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

