function absolute(n) {
    return n < 0 ? -n : n;
}

function edgeDetector(detectorX, detectorWidth, detectorStart, detectorEnd, speed) {
    if (detectorX + detectorWidth >= detectorEnd) return -speed;
    if (detectorX <= detectorStart) return absolute(speed);
    return speed;
}

function overlapDetector(range1Start, range1End, range2Start, range2End) {
    return (range1Start > range2Start && range1Start < range2End) || (range1End > range2Start && range1End < range2End);
}

function detectOverlap(range1X, range1Width, range2X, range2Width) {
    const range1Start = range1X;
    const range1End = range1X + range1Width;

    const range2Start = range2X;
    const range2End = range2X + range2Width;

    const checkRange1 = overlapDetector(range1Start, range1End, range2Start, range2End);
    const checkRange2 = overlapDetector(range2Start, range2End, range1Start, range1End);

    return checkRange1 || checkRange2;
}

module.exports = {
    absolute,
    edgeDetector,
    detectOverlap,
}