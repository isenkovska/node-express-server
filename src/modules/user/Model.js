import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
});
password: {
  type: String,
    required
:
  true,
    select
:
  false,
},
}
export default mongoose.model('User', userSchema);
