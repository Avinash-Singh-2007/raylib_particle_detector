const r = require("raylib");
const geometry = require("./geometry");

const screenWidth = 800;
const screenHeight = 500;

const detector1Width = 50;
let detector1X = 0;

const detector2Width = 50;
let detector2X = screenWidth / 2;

let detector1Speed = 3;
let detector2Speed2 = 4;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const FPS = 60;
    const title = "Particle Detector";

    r.InitWindow(screenWidth, screenHeight, title);
    r.SetTargetFPS(FPS);
}

function update() {
    const detector1Start = 0;
    const detector1End = screenWidth / 2;

    const detector2Start = screenWidth / 2;
    const detector2End = screenWidth;

    detector1Speed = geometry.edgeDetector(detector1X, detector1Width, detector1Start, detector1End, detector1Speed);
    detector1X += detector1Speed;

    detector2Speed2 = geometry.edgeDetector(detector2X, detector2Width, detector2Start, detector2End, detector2Speed2);
    detector2X += detector2Speed2;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const detector1Y = 0;
    const detector1Height = screenHeight;

    const detector2Y = 0;
    const detector2Height = screenHeight;

    const particle1X = 250;
    const particle1Y = 0;
    const particle1Width = 70;
    const particle1Height = screenHeight;

    const particle2X = 500;
    const particle2Y = 0;
    const particle2Width = 20;
    const particle2Height = screenHeight;

    const overlap1 = geometry.detectOverlap(particle1X, particle1Width, detector1X, detector1Width);
    const color1 = overlap1 ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;

    const overlap2 = geometry.detectOverlap(particle2X, particle2Width, detector2X, detector2Width);
    const color2 = overlap2 ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;

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