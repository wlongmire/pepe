#! /usr/bin/env node
var _ = require("lodash");

var userArgs = process.argv.slice(2);

var BuildCommands = {
    route:      function(params){
      console.log("build route");
      console.log(params);
    },

    component:  function(params){
      console.log("build component");
      console.log(params);
    },

    service:    function(params){
      console.log("build service");
      console.log(params);
    }
}


var command = userArgs[0];

switch(command) {
    case("build"):
      var commandType = userArgs[1];
      var conversions = {
        "r":"route",
        "c":"component",
        "s":"service"
      };

      var type = ( userArgs[1] in conversions )? conversions[userArgs[1]]:userArgs[1];

      BuildCommands[type](userArgs.slice(2));
      break;
    default:
      console.log("Bad command, mon ame.");
}
