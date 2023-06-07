const riskCalcGeneral = (loanAmount, currentValue) => {
    
    const riskOffset = loanAmount/currentValue%100;

    const newRisk = riskOffset > 0.5 ? (riskOffset + 0.1) % 1 : riskOffset;

    return newRisk;
    
};

module.exports = {riskCalcGeneral}