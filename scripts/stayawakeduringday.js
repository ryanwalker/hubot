module.exports = function(robot) {
  robot.hear(/tim/i, function(msg){
    msg.reply(time());
  });
}

function time() {
  var today = new Date();
  return today.getUTCHours() - 7;
}

