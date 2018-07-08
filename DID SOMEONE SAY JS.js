var time = new Date();

var month = time.getMonth() + 1;
var day = time.getDate();
document.getElementById('test').innerHTML = "Today's date is: " + month + "/" + day + " and the time is: " + time.getHours() + ":" + time.getMinutes();