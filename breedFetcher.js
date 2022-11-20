const request = require("request");
const fs = require("fs");
const breedRequest = require("./breedRequest");

const breedFetcher = function (input) {
  input = process.argv[2];
  console.log(input);
  url = "https://api.thecatappi.com/v1/breeds/search?q=" + input;
  console.log(url);

  request(url, (error, response, body) => {
    if (error != null) {
      console.log("error:", error); // Print the error if one occurred
    }
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

    if (body.length < 3) {
      console.log("requested breed (" + input + ") is not found");
      return;
    }
    const obj = JSON.parse(body);
    // console.log(typeof obj);
    console.log(
      "Desccription of the 1st element on obj array :",
      obj[0].description
    );
  });
};

breedFetcher();
