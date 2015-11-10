module.exports = function(robot) {
  robot.hear(/christmas/i, function(msg){
    msg.send(christmas());
  });
}

function christmas() {
  var today = new Date();

  //'Convert' to AZ time
  if (today.getHours() in [0, 1, 2, 3, 4, 5, 6]) {
    today.setHours(today.getHours() - 7)
  }

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

