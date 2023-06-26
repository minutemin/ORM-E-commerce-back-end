// requires the model feature with datatypes in sequilize
const { Model, DataTypes } = require('sequelize');
// require connection.js
const sequelize = require('../config/connection.js');
// class extends model
class Category extends Model {}

Category.init(
  { // columns of the category
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
 },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

// export Category module
module.exports = Category;
