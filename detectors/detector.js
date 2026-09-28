const r = require("raylib");

function overlapDetector(range1Start, range1End, range2Start, range2End) {
    return !(range1End < range2Start || range2End < range1Start);
}

function isOverlapping(
    range1X,
    range1Width,
    range2X,
    range2Width,
    range3X,
    range3Width,
) {
    const range1Start = range1X;
    const range1End = range1X + range1Width;

    const range2Start = range2X;
    const range2End = range2X + range2Width;

    const range3Start = range3X;
    const range3End = range3X + range3Width;

    return (
        overlapDetector(range1Start, range1End, range2Start, range2End) ||
        overlapDetector(range3Start, range3End, range2Start, range2End)
    );
}

function checkBoundary(x, start, end) {
    return x < start || x > end;
}

function updateVelocity(X, WIDTH, START, END, velocity) {
    if (checkBoundary(X, START, END - WIDTH)) return -velocity;
    return velocity;
}

function move(x, velocity) {
    return x + velocity;
}

function selectColor(overlap) {
    return overlap ? r.ColorAlpha(r.RED, 0.6) : r.WHITE;
}

module.exports = {
    isOverlapping,
    overlapDetector,
    updateVelocity,
    move,
    selectColor,
};
