const SCORE_PARAMETERS = {
    GOOD: 70,
    REGULAR: 50,
    LOW: 'low',
    HIGH: 'high',
    MEDIUM: 'medium'
}

const setScore = (average) => {
    const isGoodRate = average > SCORE_PARAMETERS.GOOD;
    const isRegularRate = average > SCORE_PARAMETERS.REGULAR && average <= SCORE_PARAMETERS.GOOD;

    if (isGoodRate) return SCORE_PARAMETERS.HIGH;
    
    if (isRegularRate) return SCORE_PARAMETERS.MEDIUM;

    return SCORE_PARAMETERS.LOW;
};

export default setScore;