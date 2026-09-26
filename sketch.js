const r = require("raylib");
const geometry = require("./geometry");

const screenWidth = 800;
const screenHeight = 500;

const detectorWidth = 50;
let detectorX = 0;

let speed = 4;

function drawRange(x, y, width, height, color) {
    r.DrawRectangle(x, y, width, height, color);
}

function drawDetector(detectorX, detectorY, detectorWidth, detectorHeight, color) {
    drawRange(detectorX, detectorY, detectorWidth, detectorHeight, color);
}

function drawParticle(particleX, particleY, particleWidth, particleHeight, color) {
    drawRange(particleX, particleY, particleWidth, particleHeight, color);
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "center_rectangle");
    r.SetTargetFPS(50);
}

function update() {
    speed = geometry.edgeDetector(detectorX, detectorWidth, screenWidth, speed);
    detectorX += speed;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const detectorY = 0;
    const detectorHeight = screenHeight;

    const particleX = 250;
    const particleY = 0;
    const particleWidth = 70;
    const particleHeight = screenHeight;

    drawParticle(particleX, particleY, particleWidth, particleHeight, r.BLUE);
    drawDetector(detectorX, detectorY, detectorWidth, detectorHeight, r.WHITE);

    r.EndDrawing();
}

function tearDown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    tearDown,
}