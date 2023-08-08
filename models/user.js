const { Schema, Types } = require('mongoose');

const userSchema = new Schema(
  {
    
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      }
      
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought',
        },
      ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'user',
        },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
userSchema.virtual('friendCount').get(function(){
    return this.friends.length
});
const User = model('User', userSchema)

module.exports = User