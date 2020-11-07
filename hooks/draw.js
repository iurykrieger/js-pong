function draw() {
    screen.clear()
    score.draw()
    paddle.draw()
    ball.draw()
    bricks.forEach(rowBricks => {
        rowBricks
            .filter(brick => !brick.isHit)
            .forEach(brick => brick.draw())
    })
}