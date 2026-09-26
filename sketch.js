const r = require("raylib");
const geometry = require("./geometry");

const screenWidth = 800;
const screenHeight = 500;

const detector1Width = 50;
let detector1X = 0;

const detector2Width = 50;
let detector2X = screenWidth / 2;

const detector3Height = 30;
let detector3Y = 0;

let detector1Speed = 3;
let detector2Speed = 4;
let detector3Speed = 3;

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

    const detector3Start = 0;
    const detector3End = screenHeight;

    detector1Speed = geometry.calSpeed(detector1X, detector1Width, detector1Start, detector1End, detector1Speed);
    detector1X += detector1Speed;

    detector2Speed = geometry.calSpeed(detector2X, detector2Width, detector2Start, detector2End, detector2Speed);
    detector2X += detector2Speed;

    detector3Speed = geometry.calSpeed(detector3Y, detector3Height, detector3Start, detector3End, detector3Speed);
    detector3Y += detector3Speed;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const detector1Y = 0;
    const detector1Height = screenHeight;

    const detector2Y = 0;
    const detector2Height = screenHeight;

    const detector3X = 0;
    const detector3Width = screenWidth;

    const particle1X = 150;
    const particle1Y = 0;
    const particle1Width = 70;
    const particle1Height = screenHeight;

    const particle2X = 550;
    const particle2Y = 0;
    const particle2Width = 20;
    const particle2Height = screenHeight;

    const particle3X = 0;
    const particle3Y = 220;
    const particle3Width = screenWidth;
    const particle3Height = 30;

    const overlap1 = geometry.detectOverlap(particle1X, particle1Width, detector1X, detector1Width) || geometry.detectOverlap(particle2X, particle2Width, detector1X, detector1Width);
    const color1 = selectColor(overlap1);

    const overlap2 = geometry.detectOverlap(particle1X, particle1Width, detector2X, detector2Width) || geometry.detectOverlap(particle2X, particle2Width, detector2X, detector2Width);
    const color2 = selectColor(overlap2);

    const overlap3 = geometry.detectOverlap(particle3Y, particle3Height, detector3Y, detector3Height);
    const color3 = selectColor(overlap3);

    r.DrawRectangle(particle1X, particle1Y, particle1Width, particle1Height, r.SKYBLUE);
    r.DrawRectangle(particle2X, particle2Y, particle2Width, particle2Height, r.SKYBLUE);
    r.DrawRectangle(particle3X, particle3Y, particle3Width, particle3Height, r.SKYBLUE)

    r.DrawRectangle(detector1X, detector1Y, detector1Width, detector1Height, color1);
    r.DrawRectangle(detector2X, detector2Y, detector2Width, detector2Height, color2);
    r.DrawRectangle(detector3X, detector3Y, detector3Width, detector3Height, color3);

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