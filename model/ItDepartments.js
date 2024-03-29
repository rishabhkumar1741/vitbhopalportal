import { Schema, model, models } from "mongoose";

const ItDepartmentschema = new Schema({
  firstName: {
    type: String,
    require: true,
    trim: true,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
  },
  hostelNo: {
    type: String,
    require: true,
    trim: true,
  },
  roomNo: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  category: {
    type: String,
    require: true,
    trim: true,
  },
  reason: {
    type: String,
    require: true,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
});

const ItDepartments =
  models.ItDepartmentschema || model("ItDepartments", ItDepartmentschema);

export default ItDepartments;
