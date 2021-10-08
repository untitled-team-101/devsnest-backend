import sequelize from '../utils/database'
import {DataTypes} from "sequelize/types";
import Team from "./team";

const BLFeedback = sequelize.define("blfeedback", {
  coordination: {
    type: DataTypes.INTEGER,
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
  doubtTaker: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
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
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
})

BLFeedback.belongsTo(Team, {
  foreignKey: "teamId"
})

export default BLFeedback;
