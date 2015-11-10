module.exports = function(robot) {
  robot.hear(/table flip/i, function(msg){
    msg.send(flipit());
  });
}

function flipit() {
  var flips = [
    "(╯°□°）╯︵ ┻━┻",
    "‎(ﾉಥ益ಥ）ﾉ﻿ ┻━┻",
    "(/ .□.)\ ︵╰(゜Д゜)╯︵ /(.□. \)",
    "(._.) ~ ︵ ┻━┻",
    "ʕノ•ᴥ•ʔノ ︵ ┻━┻",
    "(/¯◡ ‿ ◡)/¯ ~ ┻━┻"
  ];

  var zeroToFive = getRandomInt(0, 5);

  return flips[zeroToFive];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

