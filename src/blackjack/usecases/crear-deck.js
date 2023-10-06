import _ from 'underscore';
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>}
 */
export const crearDeck = (tiposDeCartas,tiposEspeciales) => {
    if (!tiposDeCartas) throw new Error('Tipos de carta es obligatorio')
    if (!tiposEspeciales) throw new Error('Tipos de carta especiales es obligatorio')

    let deck= [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    return  _.shuffle( deck );;
}
export default crearDeck;