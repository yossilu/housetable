const House = require('./HouseModel');

/* using the house sequelize ORM model(a bit like mongoose), main functions here. */

const createHouse = async (house) => {
    const houseCreation = await House.create(house)
    return houseCreation;
};

const updateOne = async (id, house) => {
    const updatedHouse = await House.update(house, {
        where: { id: id}
    })

    return updatedHouse;

}

const getOne = async (id) => {
    const house = await House.findByPk(id);

    return house;
}


module.exports = {
    createHouse,
    updateOne,
    getOne
}

