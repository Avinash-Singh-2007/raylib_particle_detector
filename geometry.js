function absolute(n) {
    return n < 0 ? -n : n;
}

function edgeDetector(detectorX, detectorWidth, screenWidth, speed) {
    if (detectorX + detectorWidth === screenWidth) return -speed;
    if (detectorX === 0) return absolute(speed);
    return speed;
}

module.exports = {
    absolute,
    edgeDetector,
}