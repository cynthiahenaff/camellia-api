import Sequelize from 'sequelize';

const PlantModel = (database: any) => {
  return database.define('plant', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trefleId: Sequelize.INTEGER,
    commonName: Sequelize.STRING,
    mainSpeciesId: Sequelize.INTEGER,
    slug: Sequelize.STRING,
    scientificName: Sequelize.STRING,
    imageUrl: Sequelize.STRING,
    familyCommonName: Sequelize.STRING,
    genusId: Sequelize.INTEGER,
    vegetable: Sequelize.BOOLEAN,
  });
};

export default PlantModel;
