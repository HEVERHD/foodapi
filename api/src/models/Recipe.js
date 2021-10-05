const { DataTypes } = require('sequelize');
const { toDefaultValue } = require('sequelize/types/lib/utils');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('recipe', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
		},
		steps: {
			type: DataTypes.ARRAY(DataTypes.JSON),
			allowNull: true,
		},
		healthScore: {
			type: DataTypes.FLOAT,
			validate: {
				max: 100,
				min: 0,
			},
			defaultValue: 0,
		},
		summary: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Score: {
			type: DataTypes.FLOAT,
			validate: {
				max: 100,
				min: 0,
			},
		},
		img: {
			type: DataTypes.TEXT,
		},
	});
};
