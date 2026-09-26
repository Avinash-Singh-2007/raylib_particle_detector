function absolute(n) {
    return n < 0 ? -n : n;
}

function edgeDetector(detectorX, detectorWidth, screenWidth, speed) {
    if (detectorX + detectorWidth >= screenWidth) return -speed;
    if (detectorX <= 0) return absolute(speed);
    return speed;
}

function overlapDetector(range2Start, range2End, range1Start, range1End) {
    return (range2Start > range1Start && range2Start < range1End) || (range2End > range1Start && range2End < range1End);
}

function detectOverlap(range1X, range1Width, range2X, range2Width) {
    const range1Start = range1X;
    const range1End = range1X + range1Width;

    const range2Start = range2X;
    const range2End = range2X + range2Width;

    const detectRange1 = overlapDetector(range1Start, range1End, range2Start, range2End);
    const detectRange2 = overlapDetector(range2Start, range2End, range1Start, range1End);

    return detectRange1 || detectRange2;
}

module.exports = {
    absolute,
    edgeDetector,
    detectOverlap,
}