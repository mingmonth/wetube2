import express from "express";
import routes from "../routes";
import {
  userHome,
  userEdit,
  userPassword,
  search
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, userHome);
userRouter.get(routes.editProfile, userEdit);
userRouter.get(routes.changePassword, userPassword);

export default userRouter;
