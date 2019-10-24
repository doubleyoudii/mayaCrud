import { SampleController } from "./controllers/sample/sample.controller";

import { ExerciseController } from "./controllers/exercises/exercise.controller";

import { UserController } from "./controllers/users/user.controller";

export const routes = [
  {
    controllers: [SampleController, ExerciseController,
    UserController],
    middlewares: [],
    path: "",
  },
];
