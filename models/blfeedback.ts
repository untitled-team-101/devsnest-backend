import sequelize from '../utils/database'
import {DataTypes} from "sequelize/types";

const Blfeedback = sequelize.define("blfeedback", {
    coordination: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tlavailibilty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    vtlavailibilty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    doubttaker: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    videoscrum: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    ththa: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    vtltha: {
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

export default Blfeedback;