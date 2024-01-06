const vectorPunto = ['0', '15', '30', '40']

const createMatch = (name1, name2) => {

    const player1 = {
        name: name1,
        point: 0,
        round: 0,
        game: 0
    }

    const player2 = {
        name: name2,
        point: 0,
        round: 0,
        game: 0
    }

    let deuce = false //Variable que define si hay empate 40-40

    const pointWonBy = (player = '0') => {
        /*
        Primero verifico que se asigno un valor valido plara 'player'. En caso que no sea asi, envio un texto 
        informando de esto (por el momento no tengo ningun metodo que capte este mensaje).
        Luego asigno el punto, verifico que no haya empate y verifico si no se gano la ronda
        */
        if (player !== '1' && player !== '2') {
            return 'Ingrese valor valido (player "1" o "2")'
        }
        else if (player === '1') {
            player1.point += 1
            isDeuce()
            if (asWinnerRound(player1) != undefined){
                return asWinnerRound(player1)
            }
        }
        else {
            player2.point += 1
            isDeuce()
            if (asWinnerRound(player2) != undefined){
                return asWinnerRound(player2)
            }
        }
    }

    const getCurrentRoundScore = () => {
        if (player1.point < 4 && player2.point < 4) {
            return player1.name + ' ' + vectorPunto[player1.point] + ' - ' + vectorPunto[player2.point] + ' ' + player2.name
        }
        else if (player1.point > 3 && !deuce) {
            //No necesito saber la posicion del vetor porque asumo que el oponente tiene 40 puntos
            return player1.name + ' ' + 'ventaja' + ' - ' + vectorPunto[3] + ' ' + player2.name
        }
        else if (player2.point > 3 && !deuce) {
            return player1.name + ' ' + vectorPunto[3] + ' - ' + 'ventaja' + ' ' + player2.name
        }
        else { //hay empate (deuce)
            return player1.name + ' ' + 'deuce' + ' - ' + 'deuce' + ' ' + player2.name
        }
    }

    const getRoundsScore = () => {
        return player1.name + ' ' + player1.round + ' - ' + player2.round + ' ' + player2.name
    }

    const getMatchScore = () => {
        return player1.name + ' ' + player1.game + ' - ' + player2.game + ' ' + player2.name
    }

    const getWinner = (player) => {
        console.log (player.name + ' WIN MATCH!!!')
        return player.name
    }

// ----------------------- Metodos internos ------------------------

    const asWinnerRound = (player) => {
        /*
        Primero verifico que el jugador tenga por lo menos 4 puntos (mas de 40) y que no haya empate.
        Luego verifico que la diferencia sea por lo menos 2.
        Increento la variable round, muestro el ganador de la ronda, reseteo la variable Points
        y finalmente verifico si gano el juego
        */
        if (player.point >= 4 && !deuce) {
            if((player1.point - player2.point) > 1) {
                player.round += 1
                console.log (player.name + ' Round win')
                resetPoints()
                if (asWinnerGame (player) != undefined) {
                    return asWinnerGame (player)
                }
            }
        }
    }

    const asWinnerGame = (player) => {
        /*
        Similar a 'asWinnerRound' con la diferencia que reseteo la variable 'round' tambien */
        if (player.round >= 4 && ((player1.round - player2.round) > 1)) {
                player.game += 1
                console.log (player.name + ' Game win')
                resetPoints()
                resetRounds()
                if (asWinnerMatch (player) != undefined) {
                    return asWinnerMatch (player)
                }
        }
    }

    const asWinnerMatch = (player) => {
        /*Si el jugador tiene 2 puntos, gana la partida. Muestro por consola en caso de que sea vencedor */
        // player.game === 2 ? win(player) : ''
        if (player.game === 2){
            return win (player)
        }
    }

    const resetPoints = () => {
        player1.point = 0
        player2.point = 0
    }

    const resetRounds = () => {
        player1.round = 0
        player2.round = 0
    }

    const isDeuce = () => {
        //Metodo que altera la variable para saber si hay empate
        deuce = (player1.point>=3) && (player2.point>=3) && (player1.point === player2.point)
    }

    const win = (player) => {
        const playerName = getWinner(player)
        resetAll ()
        return playerName
    }

    const resetAll = () => {
        //Reseteamos todos los datos antes de finalizar el programa
        resetPoints ()
        resetRounds ()
        player1.game = 0
        player2.game = 0
        deuce = false
    }

    return {pointWonBy, getCurrentRoundScore, getRoundsScore, getMatchScore, getWinner}
}

//Funcion flecha que devuelve una valor aeatorio entre 1 y 2
const randomPoint = () => Math.floor(Math.random() * 2) +1

const play_Off = () => {
    //llave de las semifinales
    const keys = [createMatch ('Alberto C.', 'David J.'), createMatch ('Javier M.', 'Edu Aguilar')]

    let keyWins = []

    for (let i=0; i < 2; i++) {
        let win = false
        while (!win) {
            let playerWin = keys[i].pointWonBy(randomPoint().toString()) 
            if (playerWin != undefined){
                keyWins[i] = playerWin
                win = true
            }
        }
    }

    let win = false
    while (win) {
        let playerWin = key_1.pointWonBy(randomPoint().toString()) 
        if (playerWin != undefined){
            win = true
        }
    }
}

play_Off()

/*
____________________PRUEBA RUDIMENTARIA XD___________________________________

const nuevoMatch = createMatch ('Messi', 'CR7')

nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('2') 
nuevoMatch.pointWonBy('2') 
nuevoMatch.pointWonBy('2') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
console.log (nuevoMatch.getCurrentRoundScore()) // Messi 40 - 40 CR7
nuevoMatch.pointWonBy('1') 
console.log (nuevoMatch.getCurrentRoundScore()) // Messi (ventaja) - 40 CR7
nuevoMatch.pointWonBy('2') 
console.log (nuevoMatch.getCurrentRoundScore()) // Messi (deuce) - (deuce) CR7
nuevoMatch.pointWonBy('1') 
console.log (nuevoMatch.getCurrentRoundScore()) // Messi (ventaja) - 40 CR7
nuevoMatch.pointWonBy('1') 
console.log (nuevoMatch.getCurrentRoundScore()) // Messi 0 - 0 CR7

console.log ('ROUND SCORE: ')
console.log (nuevoMatch.getRoundsScore()) //ROUNDS... Messi 1 - 0 CR7

nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1')

console.log (nuevoMatch.getRoundsScore())

nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1')

console.log (nuevoMatch.getCurrentRoundScore())
console.log (nuevoMatch.getRoundsScore())
console.log (nuevoMatch.getMatchScore())

nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1')
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1')
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1') 
nuevoMatch.pointWonBy('1')
*/