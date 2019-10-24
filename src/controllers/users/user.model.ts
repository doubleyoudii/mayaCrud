import { Schema, model } from "mongoose";
import paginate from "mongoose-paginate";

const UserSchema = new Schema({
  // name: {
  //   required: [true, "Name is required."],
  //   type: String,
  //   unique: true,
  // },
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true
});

UserSchema.plugin(paginate);

export default model("User", UserSchema);
