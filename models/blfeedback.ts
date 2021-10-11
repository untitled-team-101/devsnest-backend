import sequelize from "../utils/database";
import { DataTypes } from "sequelize";

const BLFeedback = sequelize.define("blfeedback", {
  teamId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  coordination: {
    type: DataTypes.INTEGER, // 1-5
    allowNull: false,
  },
  tlAvailability: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vtlAvailability: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  doubtTakers: {
    type: DataTypes.STRING, // array
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER, // 0-5
    allowNull: false,
  },
  videoScrum: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  tlTha: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  vtlTha: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  week: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
});

export default BLFeedback;
