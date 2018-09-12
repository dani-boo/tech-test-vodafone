import React from "react";
import ReactDOM from "react-dom";
import { sortBy, uniqBy } from "lodash";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import phoneData from "./data/phones.json";

const rating = parseFloat(phoneData[0].rating);
const phoneName = phoneData[0].groupName;
const phones = phoneData[0].deviceSummary;

const phonesSortedAlphabeticallyByColour = sortBy(phones, phone => phone.colourName);
const uniqueColourValues = uniqBy(phonesSortedAlphabeticallyByColour, phone => phone.colourName);
const colourOptions = uniqueColourValues.map(phone => ({
  colourName: phone.colourName,
  colourHex: phone.colourHex,
}));

const phonesSortedByMemory = sortBy(phones, phone => parseInt(phone.memory));
const uniqueMemoryValues = uniqBy(phonesSortedByMemory, phone => phone.memory);
const memoryOptions = uniqueMemoryValues.map(phone => phone.memory);

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
