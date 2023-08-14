const { Schema, model } = require('mongoose');

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
      /*validate: {
        let email = 'daniel36@gmail.com'
        let pattern = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        let result = email.match(pattern);
      }*/
      
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
    friends: [
        {
        type: Schema.Types.ObjectId,
        ref: 'User',
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