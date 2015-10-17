module.exports = function(robot) {
  robot.hear(/time/i, function(msg){
    msg.reply(time());
  });
}

function time() {
  var today = new Date();
  var currentDay = today.getDay();
  var currentMonth = today.getMonth();
  var december = 11;
  var year = today.getFullYear()
  return today;
}

