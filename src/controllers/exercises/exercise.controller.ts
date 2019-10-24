import { Controller, } from "@mayajs/core";
import { Request, Response, NextFunction } from "express";
import { Check, Delete, Get, Patch, Post, Put } from "@mayajs/common";
import { ExerciseServices } from "./exercise.service";

@Controller({
  model: "./exercise.model",
  route: "/exercise",
})
export class ExerciseController {
  // Inject ExerciseServices
  constructor(private services: ExerciseServices) {}



  // This is a GET request equal to "/Exercise"
  @Get({ path: "/", middlewares: [] })
  async get(req: Request, res: Response, next: NextFunction) {
    // Use a function on ExerciseService
    let exercises = await this.services.getExercisesList();

    // Do some GET stuff here
    res.json(exercises);
  }



  // This is a GET request equal to "/Exercise/:id"
  @Get({ path: "/:id", middlewares: [] })
  async getId(req: Request, res: Response, next: NextFunction) {
    // Do some GET stuff here
    let exerId = await this.services.getSpecificExercise(req.params.id);
    res.json(exerId);
  }
  
  
  // This is a DELETE request equal to "/Exercise/:id"
  @Delete({ path: "/:id", middlewares: [] })
  async deleteId(req: Request, res: Response, next: NextFunction) {
    // Do some GET stuff here
    let delExer = await this.services.deleteSpecificExercise(req.params.id);
    res.json(delExer);
  }





  // This is a POST request equal to "/Exercise/:id/:name"
  @Post({ path: "/add", middlewares: [
    Check("username").isString(),
    Check("description").isString(),
    Check("duration").isNumber(),
    Check("date").isDate()
  ] })
  async post(req: Request, res: Response, next: NextFunction) {
    // Do some POST stuff here
    let bodyExer = await this.services.postExercise(req.body);
    res.json(bodyExer);
  }


  // This is a PATCH request equal to "/Exercise/:id/custom-path"
  @Patch({ path: "/update/:id", middlewares: [
    Check("username").isString(),
    Check("description").isString(),
    Check("duration").isNumber(),
    Check("date").isDate()
  ] })
  async patch(req: Request, res: Response, next: NextFunction) {
    // Do some PATCH stuff here
    let updatedExer = await this.services.updateSpecificExercise(req.params.id, req.body)
    res.json(updatedExer);
  }















  // This is a PUT request equal to "/Exercise/:id"
  @Put({ path: "/:id", middlewares: [] })
  put(req: Request, res: Response, next: NextFunction): void {
    // Do some PUT stuff here
    res.send("This is a PUT request");
  }

  // This is a DELETE request equal to "/Exercise/:id"
  @Delete({ path: "test/:id", middlewares: [] })
  delete(req: Request, res: Response, next: NextFunction): void {
    // Do some DELETE stuff here
    res.send("This is a DELETE request");
  }
}
