const request = require("request");

const breedRequest = function (url, breed) {
  return request(url, (error, response, body) => {
    if (error != null) {
      console.log("error:", error); // Print the error if one occurred
    }
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log(typeof body);
    const obj = JSON.parse(body);
    console.log(typeof obj);
    console.log(
      "Desccription of the 1st element on obj array :",
      obj[0].description
    );
  });
};

exports.module = breedRequest;
