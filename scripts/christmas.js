module.exports = function(robot) {
  robot.hear(/christmas/i, function(msg){
    msg.reply(christmas());
  });
}

function christmas() {
  var today = new Date();
  var currentDay = today.getDay();
  var currentMonth = today.getMonth();
  var december = 11;
  var year = today.getFullYear()
  if (currentMonth  == december && currentDay > 25) {
    year++;
  }
  var christmas = new Date(year, 11, 25)
  var daysTillChristmas = Math.floor((christmas - today) / (1000*60*60*24))

  var isAre = "are";
  var dayDays = "days";
  if (daysTillChristmas == 1) {
    isAre = "is";
    dayDays = "day";
  }


  return "There " + isAre + " " + daysTillChristmas + " " + dayDays + " until Christmas!"
}

