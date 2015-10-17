module.exports = function (robot) {
  robot.hear(/start/i, function (res) {
    res.reply("starting");
    setInterval(function(){
      keepAlive(res)
    }, 60 * 1000);
  })
};

function itsDayTime() {
  var today = new Date();
  var hour = today.getUTCHours() - 7;
  if (hour < 0) {
    hour = hour + 24;
  }

  if (6 < hour && hour < 22) {
    //yep, it's daytime
    return true;
  } else {
    return false;
  }

}

var keepAlive = function keepAlive(res) {
  if (itsDayTime()) {
    res.http("https://infusionsoft-hubot.herokuapp.com").get()(function(error, response, body) {
      res.reply("I'm staying awake!");
    });
  }
}
