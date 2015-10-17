module.exports = function(robot) {
  robot.hear(/tim/i, function(msg){
    msg.reply(time());
  });
}

function time() {
  var today = new Date();
  var hour = today.getUTCHours() - 7;
  if (hour < 0) {
    hour = hour + 24;
  }
  return hour + ":" + today.getMinutes();
}

