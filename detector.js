const r = require("raylib");

function overlapDetector(range1Start, range1End, range2Start, range2End) {
    return !(range1End < range2Start || range2End < range1Start);
}

function isOverlapping(p1, d, p2) {
    const range1Start = p1.X;
    const range1End = p1.X + p1.WIDTH;

    const range2Start = d.x;
    const range2End = d.x + d.width;

    const range3Start = p2.X;
    const range3End = p2.X + p2.WIDTH;

    return (
        overlapDetector(range1Start, range1End, range2Start, range2End) ||
        overlapDetector(range3Start, range3End, range2Start, range2End)
    );
}

function checkBoundary(x, start, end) {
    return x < start || x > end;
}

function updateVelocity(d) {
    return checkBoundary(d.x, d.start, d.end - d.width)
        ? -d.velocity
        : d.velocity;
}

function move(d) {
    return d.x + d.velocity;
}

function create(x, y, start, end, width, height, velocity, hasDetected) {
    return {
        x,
        y,
        start,
        end,
        width,
        height,
        velocity,
        hasDetected,
    };
}

function update(d, p1, p2) {
    d.velocity = updateVelocity(d);
    d.x = move(d);

    if (p2 == undefined) {
        d.hasDetected = overlapDetector(
            p1.Y,
            p1.HEIGHT + p1.Y,
            d.x,
            d.width + d.x,
        );
    } else d.hasDetected = isOverlapping(p1, d, p2);
}

function drawV(d) {
    const color = d.hasDetected ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;
    r.DrawRectangle(d.x, d.y, d.width, d.height, color);
}

function drawH(d) {
    const color = d.hasDetected ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;
    r.DrawRectangle(d.y, d.x, d.height, d.width, color);
}

module.exports = {
    create,
    update,
    drawV,
    drawH,
};
