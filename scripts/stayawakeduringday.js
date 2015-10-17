while (true) {

  var today = new Date();
  var hour = today.getUTCHours() - 7;
  if (hour < 0) {
    hour = hour + 24;
  }

  if (6 < hour && hour < 22) {
    //Stay awake from 6 AM to 10 PM
    sleepFor10();
    ping();
  } else {
    sleepFor10()
  }

}

function sleepFor10() {
  setTimeout(function() {
  // Just sleeping
  }, 10 * 60 * 1000)
}

function ping() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://infusionsoft-hubot.herokuapp.com", true);
  request.send();
}
