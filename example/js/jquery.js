var form = new FormData();
form.append("response", "json");
form.append("limit", "100");

var settings = {
  "url": "http://wishiy.com/api/today",
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
