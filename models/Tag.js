// require model and datatype parts from sequilize library
const { Model, DataTypes } = require('sequelize');
// require database connection from config folder
const sequelize = require('../config/connection.js');
// extend the sequilize model from Tag
class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
// export Tag module
module.exports = Tag;
