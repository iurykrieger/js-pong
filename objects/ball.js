function draw() {
    ball.x += ball.directionX
    ball.y += ball.directionY
    screen.drawCircle(ball.x, ball.y, ball.radius, ball.color)
}

function reverse(direction) {
    if (direction === 'x') {
        ball.directionX = -ball.directionX
    } else if (direction === 'y') {
        ball.directionY = -ball.directionY
    }
}

const ball = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    directionX: 2,
    directionY: -2,
    radius: 10,
    color: '#0095DD',
    draw,
    reverse
}