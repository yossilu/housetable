const { createHouse, updateOne, getOne } = require('../models/House');
const asyncHandler = require('express-async-handler');
const {
    riskCalcGeneral
  } = require('../utils/riskCalc.js')

const saveHouse = asyncHandler(async (req, res) => {
    const { address, currentValue, loanAmount } = req.body;

    const newRisk = riskCalcGeneral(loanAmount, currentValue);

    const house = await createHouse({
        address: address, 
        currentValue: currentValue, 
        loanAmount: loanAmount, 
        risk: newRisk
    });

    if (house) {
        res.status(201).json({
            msg: 'House created successfully',
            houseId: house["null"]
        })
      } else {
        res.status(400)
        throw new Error('Failed to create house record')
      }
});

const updateHouse = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { address, currentValue, loanAmount } = req.body;

    const newRisk = riskCalcGeneral(loanAmount, currentValue);

    const house = await updateOne(id, {
        address: address, 
        currentValue: currentValue, 
        loanAmount: loanAmount, 
        risk: newRisk
    });
    

    if (house[0] === 1) {
        res.status(201).json({
            msg: 'House updated successfully'
        })
      } else {
        res.status(201).json({
            msg: 'Failed to update house record'
        })
        // throw new Error('Failed to update house record')
      }

});

const getHouse = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const house = await getOne(id);

    if (house) {
        res.status(201).json({
            house
        })
    } else {
        res.status(201).json({
            msg: 'Failed to retrieve house record'
        })
    // throw new Error('Failed to retrieve house record')
    }
});


module.exports = {saveHouse, updateHouse, getHouse};
