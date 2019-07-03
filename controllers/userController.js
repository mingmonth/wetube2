import { getDeviceList } from "../dbGetDeviceList";
import { userList } from "../dbUser";
import routes from "../routes";
import User from "../models/User";
import fetch from "node-fetch";

export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", getDeviceList });
export const userHome = (req, res) =>
  res.render("users", { pageTitle: "Users", userList });
export const userEdit = (req, res) => res.send("user edit");
export const userPassword = (req, res) => res.send("user password");

export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  let responseData = "";
  let userid = "";
  let password = "";

  if (id == 1) {
    userid = "ys9922@naver.com";
    password = "test5555";
  } else {
    userid = "yskimmobile@gmail.com";
    password = "test5555";
  }

  await postData("https://open.hknetworks.kr/smarthome/getDeviceList", {
    userid: userid,
    password: password
  })
    .then(function(data) {
      //console.log(JSON.stringify(data));
      responseData = data;
      console.log(JSON.stringify(data));
    }) // JSON-string from `response.json()` call
    .catch(error => console.error(error));

  res.render("userDetail", {
    pageTitle: "User Detail" + id,
    userList,
    id,
    responseData
  });
};

function editItem() {
  console.log("testtesttest");
}

function commandAPI() {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  //console.log(deviceid);
}

// reference: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function postData(url = "", data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json()); // parses JSON response into native JavaScript objects
}

function getDeviceListTest(id) {
  console.log("testtest:" + id);
  fetch("https://yts.lt/api/v2/list_movies.json?sort_by=rating")
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(JSON.stringify(json.data.movies));
    })
    .catch(err => console.log(err));
}

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const getJoin = (req, res) => res.render("join", { pageTitle: "join" });
export const postJoin = async (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 }
  } = req;

  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
    } catch (error) {
      console.log(error);
    }

    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
