// Dependencies
// =============================================================
var path = require("path");
var db = require('../models');
var ioCallBack = require('../socketCalls');
var Op = require('sequelize').Op;


// Routes
// =============================================================
module.exports = function(app,io) {

app.get("/connectToSocket/:channelId",function(req,res){
    res.json(req.user);
  let user = req.user.dataValues;
  user.channelId = req.params.channelId;
  if(req.user)
  {
    io.on("connect",function(socket){
      iscallBack(socket,user)
    });

    res.json({status:true});

  }
  else
  {
    res.json({status:false});
  }

  });

};