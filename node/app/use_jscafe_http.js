var jscafe = require('./jscafe_http');

// コールバック呼び出し
jscafe.request("http://atnd.org/events/37045", function(e,res) {
  if (e) { console.error(e);}

  console.log(res);
});
