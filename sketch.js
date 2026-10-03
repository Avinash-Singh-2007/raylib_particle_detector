const r = require("raylib");
const p = require("./particle");
const d = require("./detector");

function running() {
    return !r.WindowShouldClose();
}

function setup(WIDTH, HEIGHT, TITLE, FPS) {
    const world = {};

    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WIDTH, HEIGHT, TITLE);
    r.SetTargetFPS(FPS);

    world.d1 = d.create(0, 0, 0, WIDTH / 2, 50, HEIGHT, 3, false);
    world.d2 = d.create(WIDTH / 2, 0, WIDTH / 2, WIDTH, 50, HEIGHT, 4, false);
    world.d3 = d.create(0, 0, 0, HEIGHT, 50, WIDTH, 3, false);

    world.p1 = p.create(150, 0, 70, HEIGHT);
    world.p2 = p.create(550, 0, 30, HEIGHT);
    world.p3 = p.create(0, 220, WIDTH, 10);

    return world;
}

function update(world) {
    d.update(world.d1, world.p1, world.p2);
    d.update(world.d2, world.p1, world.p2);
    d.update(world.d3, world.p3);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    p.draw(world.p1);
    p.draw(world.p2);
    p.draw(world.p3);

    d.drawV(world.d1);
    d.drawV(world.d2);
    d.drawH(world.d3);

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
