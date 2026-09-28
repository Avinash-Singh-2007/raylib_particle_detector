const sketch = require("./sketch");

function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    const WIDTH = 800;
    const HEIGHT = 500;
    const TITLE = "Particle Detector";
    const FPS = 50;

    sketch.setup(WIDTH, HEIGHT, TITLE, FPS);
    loop();
    sketch.tearDown();
}

main();
