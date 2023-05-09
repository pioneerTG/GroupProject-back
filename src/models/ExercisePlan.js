import Sequelize from "sequelize";

module.exports = class ExercisePlan extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          // 고유키, INT, 자동 증가
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        createAt: {
          // INT
          type: Sequelize.DATEONLY, // date 타입
          allowNull: false,
        },
        type: {
          // STRING (100자까지), Null 허용 X
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        count: {
          // INT, 기본 값 : 0
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: 0,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "ExercisePlanner",
        tableName: "exerciseplanner",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_unicode_ci",
      }
    );
  }

  static associate(db) {
    db.ExercisePlan .belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
  }
}