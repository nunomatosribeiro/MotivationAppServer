const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const questionsForm = new Schema(
  {
    fieldA: {
    question1: { type: Number, default: 0 },
    question2: { type: Number, default: 0 },
    question3: { type: Number, default: 0 },
    question4: { type: Number, default: 0 },
    totalSum: { type: Number, default: 0 },
    },
    fieldB: {
    question5: { type: Number, default: 0 },
    question6: { type: Number, default: 0 },
    question7: { type: Number, default: 0 },
    question8: { type: Number, default: 0 },
    totalSum: { type: Number, default: 0 },
    },
    fieldC: {
    question9: { type: Number, default: 0 },
    question10: { type: Number, default: 0 },
    question11: { type: Number, default: 0 },
    question12: { type: Number, default: 0 },
    totalSum: { type: Number, default: 0 },
    },
    fieldD: {
    question13: { type: Number, default: 0 },
    question14: { type: Number, default: 0 },
    question15: { type: Number, default: 0 },
    question16: { type: Number, default: 0 },
    totalSum: { type: Number, default: 0 },
      },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Questions = model("Questions", questionsForm);

module.exports = Questions;
