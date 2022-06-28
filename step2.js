"use strict";

const fsP = require("fs/promises");
const axios = require("axios");
const input = process.argv[2];


/** Given a file as shell argument,
 *  if valid file, print contents.
 *  Otherwise, print error message.
 */

async function cat(path) {

  try {
    const contents = await fsP.readFile(path, "utf8");
    console.log(contents);
  } catch (err) {
    console.error(`Error reading ${path}:`);
    console.error(err);
    process.exit(1);
  }
}

/** Given a URL as shell argument,
 *  if valid URL, print html.
 *  Otherwise, print error message.
 */

async function webCat(url) {

  try {
    const resp = await axios.get(url);
    console.log(resp.data);

  } catch (err) {
    console.error(`Error fetching ${url}:`);
    console.error(err);
    process.exit(1);
  }
}

if (input.includes("http")) {
  webCat(input);
} else {
  cat(input);
}