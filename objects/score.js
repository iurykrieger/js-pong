const SCORE_FONT = '16px Arial'
const SCORE_COLOR = '#0095DD'

function draw() {
    screen.drawText(score.x, score.y, `Score: ${score.points}`, score.font, score.color)
}

function increase() {
    score.points += 1
}

const score = {
    x: 10,
    y: 20,
    points: 0,
    font: SCORE_FONT,
    color: SCORE_COLOR,
    increase,
    draw
}