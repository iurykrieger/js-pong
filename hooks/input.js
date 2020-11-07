function input() {
    if (keyboard.leftArrowPressed) {
        paddle.move('left')
    } else if (keyboard.rightArrowPressed) {
        paddle.move('right')
    }
}