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

    const particle1X = 250;
    const particle1Y = 0;
    const particle1Width = 70;
    const particle1Height = screenHeight;

    const particle2X = 500;
    const particle2Y = 0;
    const particle2Width = 20;
    const particle2Height = screenHeight;

    const overlap = geometry.detectOverlap(particle1X, particle1Width, detectorX, detectorWidth) || geometry.detectOverlap(particle2X, particle2Width, detectorX, detectorWidth);
    const color = overlap ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;

    drawParticle(particle1X, particle1Y, particle1Width, particle1Height, r.SKYBLUE);
    drawParticle(particle2X, particle2Y, particle2Width, particle2Height, r.SKYBLUE);

    drawDetector(detectorX, detectorY, detectorWidth, detectorHeight, color);

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