import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import phoneData from "./data/phones.json";

const rating = parseFloat(phoneData[0].rating);
const phoneName = phoneData[0].groupName;
const phones = phoneData[0].deviceSummary;

ReactDOM.render(
  <App rating={rating} phoneName={phoneName} phones={phones} />,
  document.getElementById("root")
);
registerServiceWorker();
