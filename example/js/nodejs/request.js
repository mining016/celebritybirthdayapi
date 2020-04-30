var request = require('request');
var options = {
  'method': 'POST',
  'url': 'http://wishiy.com/api/today',
  'headers': {
  },
  formData: {
    'response': 'json',
    'limit': '100'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
