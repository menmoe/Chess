class Board {
    constructor(element) {
        this.squares = [];
    }
}

function createSquare(isDark, loc) {
    let dark = false;
    if (isDark) {
        dark = true;
    }
    return {
        location: loc,
        isDark: dark
    }
}