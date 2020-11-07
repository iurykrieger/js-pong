const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

function drawRectangle(positionX, positionY, width, height, color) {
    context.beginPath()
    context.rect(positionX, positionY, width, height)
    context.fillStyle = color
    context.fill()
    context.closePath()
}

function drawCircle(positionX, positionY, radius, color) {
    context.beginPath()
    context.arc(positionX, positionY, radius, 0, Math.PI * 2)
    context.fillStyle = color
    context.fill()
    context.closePath()
}

function drawText(positionX, positionY, text, font, color) {
    context.font = font;
    context.fillStyle = color
    context.fillText(text, positionX, positionY)
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

const screen = {
    drawRectangle,
    drawCircle,
    clear,
    drawText
}