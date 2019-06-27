export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const userHome = (req, res) =>
  res.render("users", { pageTitle: "Users" });
export const userEdit = (req, res) => res.send("user edit");
export const userPassword = (req, res) => res.send("user password");
