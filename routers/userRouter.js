import express from "express";
import routes from "../routes";
import {
  userHome,
  userEdit,
  userPassword,
  userDetail
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, userHome);
userRouter.get(routes.editProfile, userEdit);
userRouter.get(routes.changePassword, userPassword);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
