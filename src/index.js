import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { rating, phoneName, phones, colourOptions, memoryOptions } from "./data";

ReactDOM.render(
  <App
    colourOptions={colourOptions}
    memoryOptions={memoryOptions}
    rating={rating}
    phoneName={phoneName}
    phones={phones}
  />,
  document.getElementById("root")
);

registerServiceWorker();
