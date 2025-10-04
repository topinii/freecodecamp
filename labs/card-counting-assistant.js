let count = 0;

function cc(card) {
    // For number cards 2-6, add 1 to count
    if (typeof card === 'number' && card >= 2 && card <= 6) {
        count++;
    }
    // For number cards 7-9, no change to count
    else if (typeof card === 'number' && card >= 7 && card <= 9) {
        // No change needed
    }
    // For cards 10, J, Q, K, A (10 as number or string values), subtract 1 from count
    else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
        count--;
    }
    
    // Return count and betting recommendation
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}