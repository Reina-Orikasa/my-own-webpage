var time = new Date();

var month = time.getMonth() + 1;

var day = time.getDate();

var hour = ('0' + time.getHours()).slice(-2);

var minute = mins = ('0'+time.getMinutes()).slice(-2);

document.getElementById('test').innerHTML = "Today's date is: " + month + "/" + day + " and the time is: " + hour + ":" + minute;