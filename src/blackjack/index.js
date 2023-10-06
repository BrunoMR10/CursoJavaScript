import { crearDeck,pedirCarta,valorCarta,turnoComputadora,crearCarta,acumulaPuntos } from "./usecases";


const miModulo=(() => {
    'use strict'

    let deck= [];
    const tipos      = ['C','D','H','S'];
    const especiales = ['A','J','Q','K'];
    let puntosJugadores=[];

    // Referencias del HTML
    const btnPedir   = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
          puntosHTML = document.querySelectorAll('small');

    const InicializarJuego=(numJugadores = 2) =>{
        deck = crearDeck(tipos,especiales);
        puntosJugadores =[]
        for (let i=0; i<numJugadores; i++){
              puntosJugadores.push(0);
        }
        puntosHTML.forEach(elem => elem.innerText =0);
        divCartasJugadores.forEach(elem => elem.innerHTML ='');
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }



    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta(deck);
        const puntosJugador= acumulaPuntos(carta,0,puntosJugadores);
        crearCarta(carta,0,divCartasJugadores);
        if ( puntosJugador > 21 ) {
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador,deck,puntosJugadores,divCartasJugadores );

        } else if ( puntosJugador === 21 ) {
            console.warn('21, genial!');
            btnPedir.disabled   = true;
            btnDetener.disabled = true;
            turnoComputadora( puntosJugador,deck,puntosJugadores,divCartasJugadores );
        }

    });


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugadores[0],deck,puntosJugadores,divCartasJugadores );
    });

    btnNuevo.addEventListener('click', () => {

        InicializarJuego();

    });
    return {nuevoJuego:InicializarJuego};

})();









