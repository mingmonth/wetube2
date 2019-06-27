export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const userHome = (req, res) =>
  res.render("users", { pageTitle: "Users" });
export const userEdit = (req, res) => res.send("user edit");
export const userPassword = (req, res) => res.send("user password");
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const login = (req, res) => res.render("login", { pageTitle: "login" });
export const join = (req, res) => res.render("join", { pageTitle: "join" });
