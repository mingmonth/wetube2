import { getDeviceList } from "../dbGetDeviceList";
import { userList } from "../dbUser";
import routes from "../routes";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", getDeviceList });
export const userHome = (req, res) =>
  res.render("users", { pageTitle: "Users", userList });
export const userEdit = (req, res) => res.send("user edit");
export const userPassword = (req, res) => res.send("user password");

export const userDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  res.render("userDetail", { pageTitle: "User Detail" + id, userList, id });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });
export const postJoin = (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
