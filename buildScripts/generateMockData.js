/*
  This script generates mock data for local development.
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const fixedUser = {
  "id" : "12345678",
  "firstName": "Samuel",
  "lastName" : "Otterman",
  "email" : "sam@example.com"
}
const data = jsf(schema);
data["users"].push(fixedUser);
const json = JSON.stringify(data);

fs.writeFile("./src/api/db.json", json, function(err) {
  if(err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
