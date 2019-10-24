import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate";

const ExerciseSchema = new Schema({
  // name: {
  //   required: [true, "Name is required."],
  //   type: String,
  //   unique: true,
  // },
  username: {type: String, required: true},
  description: {type: String, required: true},
  duration: {type: Number, required: true},
  date: {type: Date, required: true}
});

ExerciseSchema.plugin(paginate);

export default model("Exercisemoto", ExerciseSchema);
//2019-10-15T05:37:51.976+00:00
