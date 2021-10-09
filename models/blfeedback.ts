import sequelize from '../utils/database'
import {DataTypes} from "sequelize";
import Team from "./team";

const BLFeedback = sequelize.define("blfeedback", {
  teamId:{
    type:DataTypes.STRING,
    allowNull:false,
    primaryKey: true
  },
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
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  }
})

export default BLFeedback;
