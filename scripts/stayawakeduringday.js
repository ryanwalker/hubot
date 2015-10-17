var started = false;

module.exports = function (robot) {
  robot.hear(/start/i, function (res) {
    if (started) {
      res.reply("Been there, done that");
    } else {
      started = true;
      res.reply("I'll keep myself awake until 10pm");
      setInterval(function(){
        keepAlive(res)
      }, 60 * 1000);
    }
  })
};

function itsDayTime(res) {
  var today = new Date();
  var hour = today.getUTCHours() - 7;
  if (hour < 0) {
    hour = hour + 24;
  }

  res.reply(hour)

  if (6 < hour && hour < 22) {
    //yep, it's daytime
    return true;
  } else {
    return false;
  }

}

var keepAlive = function keepAlive(res) {
  if (itsDayTime(res)) {
    res.http("https://infusionsoft-hubot.herokuapp.com").get()(function(error, response, body) {
      res.reply("I'm staying awake!");
    });
  }
}
