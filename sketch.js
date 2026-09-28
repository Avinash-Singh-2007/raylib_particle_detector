const r = require("raylib");
const p1 = require("./particles/particle1");
const p2 = require("./particles/particle2");
const p3 = require("./particles/particle3");
const d1 = require("./detectors/detector1");
const d2 = require("./detectors/detector2");
const d3 = require("./detectors/detector3");
const d = require("./detectors/detector");

function running() {
    return !r.WindowShouldClose();
}

function setup(WIDTH, HEIGHT, TITLE, FPS) {
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    d1.end = r.GetScreenWidth() / 2;

    d2.x = r.GetScreenWidth() / 2;
    d2.start = r.GetScreenWidth() / 2;
    d2.end = r.GetScreenWidth();

    d3.end = r.GetScreenHeight();
}

function update() {
    d1.velocity = d.updateVelocity(
        d1.x,
        d1.WIDTH,
        d1.START,
        d1.end,
        d1.velocity,
    );
    d1.x = d.move(d1.x, d1.velocity);
    d1.color = d.selectColor(
        d.isOverlapping(p1.X, p1.WIDTH, d1.x, d1.WIDTH, p2.X, p2.WIDTH),
    );

    d2.velocity = d.updateVelocity(
        d2.x,
        d2.WIDTH,
        d2.start,
        d2.end,
        d2.velocity,
    );
    d2.x = d.move(d2.x, d2.velocity);
    d2.color = d.selectColor(
        d.isOverlapping(p1.X, p1.WIDTH, d2.x, d2.WIDTH, p2.X, p2.WIDTH),
    );

    d3.velocity = d.updateVelocity(
        d3.y,
        d3.HEIGHT,
        d3.START,
        d3.end,
        d3.velocity,
    );
    d3.y = d.move(d3.y, d3.velocity);
    d3.color = d.selectColor(
        d.overlapDetector(p3.Y, p3.HEIGHT + p3.Y, d3.y, d3.HEIGHT + d3.y),
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const HEIGHT = r.GetScreenHeight();
    const WIDTH = r.GetScreenWidth();

    r.DrawRectangle(p1.X, p1.Y, p1.WIDTH, HEIGHT, r.SKYBLUE);
    r.DrawRectangle(p2.X, p2.Y, p2.WIDTH, HEIGHT, r.SKYBLUE);
    r.DrawRectangle(p3.X, p3.Y, WIDTH, p3.HEIGHT, r.SKYBLUE);

    r.DrawRectangle(d1.x, d1.Y, d1.WIDTH, HEIGHT, d1.color);
    r.DrawRectangle(d2.x, d2.Y, d2.WIDTH, HEIGHT, d2.color);
    r.DrawRectangle(d3.X, d3.y, WIDTH, d3.HEIGHT, d3.color);

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
};
