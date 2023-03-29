const SCORE_PARAMETERS = {
    GOOD: 70,
    REGULAR: 50,
    LOW: 'low',
    HIGH: 'high',
    MEDIUM: 'medium'
}

const setScore = (average) => {
    const goodRate = average > SCORE_PARAMETERS.GOOD;
    const regularRate = average > SCORE_PARAMETERS.REGULAR && average <= SCORE_PARAMETERS.GOOD;
    let rate = SCORE_PARAMETERS.LOW;

    if (goodRate) {
        rate = SCORE_PARAMETERS.HIGH;
    } 
    
    if (regularRate) {
        rate = SCORE_PARAMETERS.MEDIUM;
    }
    return rate;
};

module.exports = setScore;