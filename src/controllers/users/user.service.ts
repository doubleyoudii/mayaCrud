import { Injectable } from "@mayajs/core";
import { Models } from "@mayajs/mongo";

@Injectable()
export class UserServices {
  @Models("user") model: any;

  async getUsers() {
    // Your logic here
    // console.log(this.model);
    // console.log("This is from UserServices.");
    try {
      const userList = await this.model.find()
      return {status: 200, message: "Get user succes", data: userList, meta: {}}
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }
    
  }

  async getUserWithId(id: any) {
    try {
      const specificUser = await this.model.findById(id);
      return { status: 200, message: "Specific User successfully retrieved.", data: specificUser, meta: {} };
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }
  }


  async postUsers(body: any){
    try {
      const user = await this.model.create(body);
      return { status: 200, message: "User successfully added.", data: user, meta: {} };
    } catch (error) {
      return { status: 422, message: error.errmsg ? error.errmsg : error.toString(), data: [], meta: {} };
    }
  }
}
