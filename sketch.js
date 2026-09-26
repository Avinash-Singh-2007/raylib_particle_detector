const r = require("raylib");
const geometry = require("./geometry");

const screenWidth = 800;
const screenHeight = 500;

const detector1Width = 50;
let detector1X = 0;

const detector2Width = 50;
let detector2X = screenWidth / 2;

let detector1Speed = -3;
let detector2Speed = -4;

function selectColor(overlap) {
    return overlap ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 50;
    const title = "Particle Detector";

    r.InitWindow(screenWidth, screenHeight, title);
    r.SetTargetFPS(FPS);
}

function update() {
    const detector1Start = 0;
    const detector1End = screenWidth / 2;

    const detector2Start = screenWidth / 2;
    const detector2End = screenWidth;

    detector1Speed = geometry.calSpeed(detector1X, detector1Width, detector1Start, detector1End, detector1Speed);
    detector1X += detector1Speed;

    detector2Speed = geometry.calSpeed(detector2X, detector2Width, detector2Start, detector2End, detector2Speed);
    detector2X += detector2Speed;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const detector1Y = 0;
    const detector1Height = screenHeight;

    const detector2Y = 0;
    const detector2Height = screenHeight;

    const particle1X = 150;
    const particle1Y = 0;
    const particle1Width = 70;
    const particle1Height = screenHeight;

    const particle2X = 550;
    const particle2Y = 0;
    const particle2Width = 20;
    const particle2Height = screenHeight;

    const overlap1 = geometry.detectOverlap(particle1X, particle1Width, detector1X, detector1Width) || geometry.detectOverlap(particle2X, particle2Width, detector1X, detector1Width);
    const color1 = selectColor(overlap1);

    const overlap2 = geometry.detectOverlap(particle1X, particle1Width, detector2X, detector2Width) || geometry.detectOverlap(particle2X, particle2Width, detector2X, detector2Width);
    const color2 = selectColor(overlap2);

    r.DrawRectangle(particle1X, particle1Y, particle1Width, particle1Height, r.SKYBLUE);
    r.DrawRectangle(particle2X, particle2Y, particle2Width, particle2Height, r.SKYBLUE);

    r.DrawRectangle(detector1X, detector1Y, detector1Width, detector1Height, color1);
    r.DrawRectangle(detector2X, detector2Y, detector2Width, detector2Height, color2);

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