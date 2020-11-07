const PADDLE_HEIGHT = 10
const PADDLE_WIDTH = 75
const PADDLE_COLOR = '#0095DD'

function draw() {
    drawRectangle(paddle.x, paddle.y, paddle.width, paddle.height, paddle.color)    
}

function moveRight() {
    if(paddle.x < canvas.width - paddle.width) {
        paddle.x += 7
    }
}

function moveLeft() {
    if(paddle.x > 0) {
        paddle.x -= 7
    }
}

function move(direction) {
    if (direction === 'left') {
        moveLeft()
    } else if (direction === 'right') {
        moveRight()
    }
}

const paddle = {
    width: PADDLE_WIDTH,
    height: PADDLE_HEIGHT,
    color: PADDLE_COLOR,
    x: (canvas.width - PADDLE_WIDTH) / 2,
    y: canvas.height - PADDLE_HEIGHT,
    move,
    draw
}
