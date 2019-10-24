import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class ExerciseServices {
  @Models("exercise") model: any;



  async getExercisesList() {

    try {
      const exerciseList = await this.model.find()
      return {status: 200, message: "Get user succes", data: exerciseList, meta: {}}
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} }
    }
    // Your logic here
    // console.log(this.model);
    // console.log("This is from ExerciseServices.");
  }




  async postExercise(body: any) {
    try {
      const exercise = await this.model.create(body);
      return { status:200, message: "Exercise Succesfully added", data: exercise, meta: {}}
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} }
    }
  }





  async getSpecificExercise(id: any) {
    try {
      const specificExercise = await this.model.findById(id);
      return { status: 200, message: "Get Specific Exercise Successfully", data: specificExercise, meta: {}}
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} }
    }
  }






  async deleteSpecificExercise(id: any) {
    try {
      const specificExercise = await this.model.findByIdAndDelete(id);
      return {status: 200, message: "Delete Specific Exercise Successfuly", data: specificExercise, meta: {}}
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} }
    }
  }




  async updateSpecificExercise(id: any, changes: any) {
    try {
      const specificExercise = await this.model.findByIdAndUpdate(id, changes);
      return {status: 200, message: "Update Specific exercise Successfully", data: specificExercise, meta: {}}
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} }
    }
  }

  //postExercise
  //deleteExercise
  //Put/patchExercises
}
