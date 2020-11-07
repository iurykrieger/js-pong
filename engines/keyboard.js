function onKeyDown(event) {
    if (isRightArrow(event)) {
        keyboard.rightArrowPressed = true
    } else if (isLeftArrow(event)) {
        keyboard.leftArrowPressed = true
    }
}

function onKeyUp(event) {
    if (isRightArrow(event)) {
        keyboard.rightArrowPressed = false
    } else if (isLeftArrow(event)) {
        keyboard.leftArrowPressed = false
    }
}

function isRightArrow(event) {
    return event.key == 'Right' || event.key == 'ArrowRight'
}

function isLeftArrow(event) {
    return event.key == 'Left' || event.key == 'ArrowLeft'
}

const keyboard = {
    rightArrowPressed: false,
    leftArrowPressed: false
}

document.addEventListener('keydown', onKeyDown, false)
document.addEventListener('keyup', onKeyUp, false)