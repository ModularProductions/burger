var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  create: function(val, cb) {
    console.log("creating "+val);
    orm.create("burgers", "burger_name", val, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    console.log("burger.js update obColVals =", objColVals);
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(objId, cb) {
    orm.delete("burgers", objId, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;