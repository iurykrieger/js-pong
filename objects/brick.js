const BRICK_WIDTH = 85
const BRICK_HEIGHT = 20
const BRICK_ROW_COUNT = 5
const BRICK_COLUMN_COUNT = 10
const BRICK_PADDING = 10
const BRICK_TOP_MARGIN = 40
const BRICK_LEFT_MARGIN = 40

function draw() {
    screen.drawRectangle(this.x, this.y, this.width, this.height, this.color)
}

function hit() {
    this.isHit = true
}

function createBricks() {
    let bricks = []
    for(let column = 0; column < BRICK_COLUMN_COUNT; column++) {
        bricks[column] = []
        for(var row = 0; row < BRICK_ROW_COUNT; row++) {
            bricks[column][row] = createBrick(column, row)
        }
    }
    return bricks
}

function createBrick(column, row) {
    return {
        x: (column * (BRICK_WIDTH + BRICK_PADDING)) + BRICK_LEFT_MARGIN,
        y: (row * (BRICK_HEIGHT + BRICK_PADDING)) + BRICK_TOP_MARGIN,
        width: BRICK_WIDTH,
        height: 20,
        isHit: false,
        color: '#0095DD',
        draw,
        hit
    }
}

const bricks = createBricks()