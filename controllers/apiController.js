export const apiHome = (req, res) => res.send("api index");
export const getDeviceList = (req, res) =>
  res.render("getDeviceList", { pageTitle: "getDeviceList" });
export const getDeviceListNoSecne = (req, res) =>
  res.render("getDeviceListNoScene", { pageTitle: "getDeviceListNoScene" });
