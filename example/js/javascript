var formdata = new FormData();
formdata.append("response", "json");
formdata.append("limit", "100");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("http://wishiy.com/api/today", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
