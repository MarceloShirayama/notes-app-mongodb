const passport = require('passport');
const LocalStrategy = require('passport-local');
// const { passport, LocalStrategy } = require('passport');

const User = require('../models/User');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async (email, password, done) => {
  // Match email's user
  const user = await User.findOne({ email });
  if (!user) {
    done(null, false, { message: 'Usuário não encontrado' });
  } else {
    // Match password's user
    const match = await user.matchPassword(password);
    if (match) {
      done(null, user);
    } else {
      done(null, false, { message: 'Senha incorreta' });
    }
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
