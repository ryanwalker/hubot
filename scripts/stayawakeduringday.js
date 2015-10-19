var started = false;

module.exports = function (robot) {
  robot.respond(/wake up/i, function (res) {
    if (started) {
      res.reply("I'm already awake");
    } else {
      started = true;
      res.reply("I'll keep myself awake until 10pm");
      //Run keepAlive every 20 minutes
      setInterval(function(){
        keepAlive()
      }, 20 * 60 * 1000);
    }
  })
};

var keepAlive = function keepAlive() {
  if (itsDayTime()) {
    res.http("https://infusionsoft-hubot.herokuapp.com").get()(function(error, response, body) {
      //Nothing to do in callback
    });
  }
}

function itsDayTime() {
  var today = new Date();
  var hour = today.getUTCHours() - 7;
  if (hour < 0) {
    hour = hour + 24;
  }

  if (6 < hour && hour < 22) {
    //It's daytime
    return true;
  } else {
    return false;
  }
}
