const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Hole-in-one! if strokes is 1
    if (strokes === 1) {
        return "Hole-in-one!";
    }
    // Eagle if strokes is less than or equal to par minus 2
    else if (strokes <= par - 2) {
        return "Eagle";
    }
    // Birdie if strokes is equal to par minus 1
    else if (strokes === par - 1) {
        return "Birdie";
    }
    // Par if strokes is equal to par
    else if (strokes === par) {
        return "Par";
    }
    // Bogey if strokes is equal to par plus 1
    else if (strokes === par + 1) {
        return "Bogey";
    }
    // Double Bogey if strokes is equal to par plus 2
    else if (strokes === par + 2) {
        return "Double Bogey";
    }
    // Go Home! if strokes is greater than or equal to par plus 3
    else if (strokes >= par + 3) {
        return "Go Home!";
    }
}
