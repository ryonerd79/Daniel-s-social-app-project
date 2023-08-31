const { Schema, model } = require('mongoose');
const reactionsSchema = require('./reaction.js')
const thoughtSchema = new Schema(
  {
    
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
      
      
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: timestamp => timestamp,
      
      
      
    },
    username: {
        type: String,
        required: true,
        
        
        
      },
      reactions: [
       reactionsSchema
    ],
    
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
});

const Thought = model('Thought', thoughtSchema)

module.exports = Thought