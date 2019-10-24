import { Controller, Delete, Get, Patch, Post, Put } from "@mayajs/core";
import { Request, Response, NextFunction } from "express";
import { UserServices } from "./user.service";

@Controller({
  model: "./user.model",
  route: "/user",
})
export class UserController {
  // Inject UserServices
  constructor(private services: UserServices) {}

  // This is a GET request equal to "/User"
  @Get({ path: "/", middlewares: [] })
  async get(req: Request, res: Response, next: NextFunction) {
    // Use a function on UserService
    let users = await this.services.getUsers();

    // Do some GET stuff here
    // res.send("This is a GET request from user");
    res.json(users);
  }

  // This is a GET request equal to "/User/:id"
  @Get({ path: "/:id", middlewares: [] })
  async getId(req: Request, res: Response, next: NextFunction) {
    // Do some GET stuff here
    let user = await this.services.getUserWithId(req.params.id)
    res.json(user.data);
  }

  // This is a POST request equal to "/User/:id/:name"
  @Post({ path: "/add", middlewares: [] })
  async post(req: Request, res: Response, next: NextFunction) {
    // Do some POST stuff here
    const pushUser = await this.services.postUsers(req.body)

    res.json(pushUser);
  }






















  
  // This is a PATCH request equal to "/User/:id/custom-path"
  @Patch({ path: "/:id/custom-path", middlewares: [] })
  patch(req: Request, res: Response, next: NextFunction): void {
    // Do some PATCH stuff here
    res.send("This is a PATCH request");
  }

  // This is a PUT request equal to "/User/:id"
  @Put({ path: "/:id", middlewares: [] })
  put(req: Request, res: Response, next: NextFunction): void {
    // Do some PUT stuff here
    res.send("This is a PUT request");
  }

  // This is a DELETE request equal to "/User/:id"
  @Delete({ path: "/:id", middlewares: [] })
  delete(req: Request, res: Response, next: NextFunction): void {
    // Do some DELETE stuff here
    res.send("This is a DELETE request");
  }
}
