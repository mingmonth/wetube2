// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id"; // /users/1
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// API
const API = "/api";
const API_GET_DEVICE_LIST = "/getDeviceList";
const API_GET_DEVICE_LIST_NO_SCENE = "/getDeviceListNoScene";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  api: API,
  apiGetDeviceList: API_GET_DEVICE_LIST,
  apiGetDeviceListNoScene: API_GET_DEVICE_LIST_NO_SCENE
};

export default routes;
