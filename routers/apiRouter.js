import express from "express";
import routes from "../routes";
import {
  apiHome,
  getDeviceList,
  getDeviceListNoSecne
} from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.home, apiHome);
apiRouter.get(routes.apiGetDeviceList, getDeviceList);
apiRouter.get(routes.apiGetDeviceListNoScene, getDeviceListNoSecne);

export default apiRouter;
