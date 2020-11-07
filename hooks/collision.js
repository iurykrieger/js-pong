function willBallHitWall() {
    if((ball.x + ball.directionX) > (canvas.width - ball.radius) || ((ball.x + ball.directionX) < ball.radius)) {
        return true
    } else {
        return false
    }
}

function willBallHitCeiling() {
    if((ball.y + ball.directionY) < ball.radius) {
        return true
    } else {
        return false
    }
}

function willBallHitGround() {
    if((ball.y + ball.directionY) > (canvas.height - ball.radius)) {
        return true
    } else {
        return false
    }
}

function willBallHitPaddle() {
    return (ball.x > paddle.x) && (ball.x < (paddle.x + paddle.width))
}

function willBallHitBrick(brick) {
    return ball.x > brick.x && ball.x < (brick.x + brick.width) && (ball.y > brick.y) && ball.y < (brick.y + brick.height)
}

function areAllBricksHit() {
    const totalBricks = bricks.reduce((bricksLength, rowBricks) => bricksLength + rowBricks.length, 0)
    const hitBricks = bricks.reduce((hitBricks, rowBricks) => {
        hitBricks += rowBricks.reduce((hitBricks, brick) => {
            if (brick.isHit) {
                hitBricks += 1
            }
            return hitBricks
        }, 0)
        return hitBricks
    }, 0)

    return hitBricks >= totalBricks
}

function collision() {
    bricks.forEach(rowBricks => {
        rowBricks
            .filter(brick => !brick.isHit)
            .forEach(brick => {
                if (willBallHitBrick(brick)) {
                    brick.hit()
                    ball.reverse('y')
                    score.increase()
                    if (areAllBricksHit()) {
                        game.win()
                    }
                }
            })
    })

    if (willBallHitWall()) {
        ball.reverse('x')
    } else if (willBallHitCeiling()) {
        ball.reverse('y')
    } else if (willBallHitGround()) {
        if(willBallHitPaddle()) {
            ball.reverse('y')
        } else {
            game.lose()
        }
    }
}