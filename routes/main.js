// Main Routes Here
var app = module.parent.exports.app,
  dbConex = module.parent.exports.dbConex,
  Games = require('../models/game.js'),
  Users = require('../models/user.js');

app.post('/create', function(req, res){
  Users.findOrCreate(req.body.nickname, function(err, user){
    user.createGame(req.body.num_players, function(err, game){
      res.render('share', { code: game.code, num_players: game.num_players });
    });
  });
});
