import mongoose from "mongoose";

export const uniqueValidator = (fieldName: string, modelName: string) => {
  return async function (value: string) {
    const existingRecord = await mongoose.models[modelName].findOne({
      [fieldName]: value,
    });
    return !existingRecord;
  };
};
