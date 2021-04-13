const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
}, {
  timestamps: true,
});

UserSchema.methods.encrypPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
};

UserSchema.methods.matchPassword = async function comparaHash(password) {
  const compare = await bcrypt.compare(password, this.password);
  return compare;
};

module.exports = model('User', UserSchema);
