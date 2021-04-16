const passport = require('passport');
const User = require('../models/User');

const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.signUp = async (req, res) => {
  const errors = [];
  const {
    name, email, password, confirmPassword,
  } = req.body;

  if (password !== confirmPassword) {
    errors.push({ text: 'A senha não confere' });
  }
  const numbersOfCharsPass = 6;
  if (password.length < numbersOfCharsPass) {
    errors.push(
      {
        text: `A senha não pode ter menos de ${numbersOfCharsPass} caracteres`,
      },
    );
  }
  if (errors.length > 0) {
    res.render('users/signup', {
      errors, name, email, password, confirmPassword,
    });
  } else {
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      req.flash('error_msg', 'Este email já está em uso');
      res.redirect('/users/signup');
    } else {
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash('success_msg', 'Usuário cadastrado com sucesso');
      res.redirect('/users/signin');
    }
  }
};

usersCtrl.renderSignInForm = (req, res) => {
  res.render('users/signin');
};

usersCtrl.signIn = passport.authenticate('local', {
  failureRedirect: '/users/signin',
  successRedirect: '/notes',
  failureFlash: true,
});

usersCtrl.logOut = (req, res) => {
  req.logout();
  req.flash('success_msg', 'Sessão encerrada');
  res.redirect('/users/signin');
};

module.exports = usersCtrl;
