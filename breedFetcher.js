const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  // breedName = process.argv[2];
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(url, (error, response, body) => {
    if (error !== null) {
      callback("error: " + error, null);
      //     console.log("error:", error); // Print the error if one occurred
    }
    //   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received

    if (body.length < 3) {
      //     console.log("requested breed (" + breedName + ") is not found");
      //     return;
      callback("requested breed (" + breedName + ") is not found", null);
      return;
    }
    const obj = JSON.parse(body);
    //   // console.log(typeof obj);
    //   console.log(
    //     "Desccription of the 1st element on obj array :",
    //     obj[0].description
    //   );
    callback(null, obj[0].description);
    // });
  });
};

module.exports = { fetchBreedDescription };
