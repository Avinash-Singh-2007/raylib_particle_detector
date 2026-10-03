const sketch = require("./sketch");

function loop(world) {
    while (sketch.running()) {
        sketch.update(world);
        sketch.draw(world);
    }
}

function main() {
    const WIDTH = 800;
    const HEIGHT = 500;
    const TITLE = "Particle Detector";
    const FPS = 50;

    const world = sketch.setup(WIDTH, HEIGHT, TITLE, FPS);
    loop(world);
    sketch.tearDown();
}

main();
