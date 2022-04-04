const express = require('express');
const router = express.Router();
const knex = require('../db/knex');
//const mysql = require('mysql');

//let todos = [];

/* GET home page. */
router.get('/', function (req, res, next) {
  //const userId = req.session.userid;
  //const isAuth = Boolean(userId);
  //console.log(`isAuth: ${isAuth}`);
  const isAuth = req.isAuthenticated();

  if (isAuth) {
    const userId = req.user.id;
    knex("tasks")
      .select("*")
      .where({user_id: userId})
      .then(function (results) {
        res.render('index', {
          title: 'ToDo App',
          todos: results,
          isAuth: isAuth,
      });
    })

    .catch(function (err) {
      console.error(err);
      res.render('index', {
        title: 'ToDo App',
        isAuth: isAuth,
        errorMessage: [err.sqlMessage],
      });
    });
  } else {
    res.render('index', {
      title: 'ToDo App',
      isAuth: isAuth,
    });
  }
});
    
router.post('/', function(req, res, next){
  //const userId = req.session.userid;
  //const isAuth = Boolean(userId);
  const isAuth = req.isAuthenticated();
  const userId = req.user.id;
  const todo = req.body.add;

  knex("tasks")
    .insert({user_id: userId, content: todo})
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      console.error(err);
      res.render('index', {
        title: 'ToDo App',
        isAuth: isAuth,
      });
    });
  });

router.delete('/', function(req, res, next){
  const isAuth = req.isAuthenticated();
  const id = req.body.id;
    
    knex("id")
      .del()
      .where({id: id})
      .then(function (results) {
        res.render('index', {
          title: 'ToDo App',
          todos: results,
          isAuth: isAuth,
      });
    })
});

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));

module.exports = router;
