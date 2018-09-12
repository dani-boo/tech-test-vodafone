import { sortBy, uniqBy } from "lodash";

import phoneData from "./phones.json";

export const rating = parseFloat(phoneData[0].rating);
export const phoneName = phoneData[0].groupName;
export const phones = phoneData[0].deviceSummary;

const phonesSortedAlphabeticallyByColour = sortBy(phones, phone => phone.colourName);
const uniqueColourValues = uniqBy(phonesSortedAlphabeticallyByColour, phone => phone.colourName);
export const colourOptions = uniqueColourValues.map(phone => ({
  colourName: phone.colourName,
  colourHex: phone.colourHex,
}));

const phonesSortedByMemory = sortBy(phones, phone => parseInt(phone.memory));
const uniqueMemoryValues = uniqBy(phonesSortedByMemory, phone => phone.memory);
export const memoryOptions = uniqueMemoryValues.map(phone => phone.memory);
