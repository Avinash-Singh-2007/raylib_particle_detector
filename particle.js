const r = require("raylib");

function create(X, Y, WIDTH, HEIGHT) {
    return {
        X,
        Y,
        WIDTH,
        HEIGHT,
    };
}

function draw(p) {
    r.DrawRectangle(p.X, p.Y, p.WIDTH, p.HEIGHT, r.SKYBLUE);
}

module.exports = {
    create,
    draw,
};
