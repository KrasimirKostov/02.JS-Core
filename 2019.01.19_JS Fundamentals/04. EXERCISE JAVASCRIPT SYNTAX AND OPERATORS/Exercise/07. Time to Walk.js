function solve(numberOfSteps, footPrintLength, speed) {
    let distance = numberOfSteps * footPrintLength;
    let time = distance / speed / 1000 * 3600;
    let extraTime = Math.trunc(distance / 500) * 60;
    let totalTime = time + extraTime;

    let hours = totalTime / 3600;
    let rHours = Math.floor(hours);
    let minutes = (hours - rHours) * 60;
    let rMinutes = Math.floor(minutes);
    let seconds = Math.round((minutes - rMinutes) * 60);

    if (rHours < 10) {
        rHours = '0' + rHours;
    }
    if (rMinutes < 10) {
        rMinutes = '0' + rMinutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${rHours}:${rMinutes}:${seconds}`);

}
solve(2564, 0.70, 5.5);