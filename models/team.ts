import { DataTypes } from "sequelize/types";
import sequelize from "../utils/database";

const Team = sequelize.define("team", {
    teamId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type : DataTypes.STRING,
        allowNull: false,
    },
    batchLeader:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
})

export default Team;