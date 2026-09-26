const r = require("raylib");
const geometry = require("./geometry");

const screenWidth = 1000;
const screenHeight = 700;

const detectorWidth = 80;
let detectorX = 0;

let speed = 4;

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

    r.DrawRectangle(detectorX, detectorY, detectorWidth, detectorHeight, r.WHITE);

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