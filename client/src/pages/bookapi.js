const request = require('request');

function execute() {
  const options = {
    "url": "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=TXOJB9UAtXG7k3bpqtWHxAXnlVbAtVPC",
    "method": "GET",
    "headers": {
      "Accept": "application/json"
    }
  };
  request(options, function (err, res, body) {
    if (err) {
      console.error(err);
    }
    else {
      console.log(body);
    }
  });
}

execute();
