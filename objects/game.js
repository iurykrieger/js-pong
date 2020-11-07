function play() {
    input()
    collision()
    draw()
}

function start() {
    game.loop = setInterval(play, game.speed)
}

function lose() {
    clearInterval(game.loop)
    alert('Perdeu irmão! Melhore!')
}

function win() {
    clearInterval(game.loop)
    alert('Ganhou irmão! Parabéns!')
}

const game = {
    speed: 10,
    start,
    lose,
    win
}