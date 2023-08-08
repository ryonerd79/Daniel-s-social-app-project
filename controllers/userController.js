const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
    // Get all students
    async getUsers(req, res) {
      try {
        const users = await User.find();
  
        
  
        res.json(users);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },


async getSingleUser(req, res) {
    try {
      const user = await user.findOne({ _id: req.params.studentId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No User with that ID' })
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const User = await User.create(req.body);
      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const User = await User.findOneAndUpdate({ _id: req.params.userId });

      if (!User) {
        return res.status(404).json({ message: 'No such User exists' });
      }

      res.json({ message: 'User successfully updated' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async deleteUser(req, res) {
    try {
      const User = await User.findOneAndRemove({ _id: req.params.userId });

      if (!User) {
        return res.status(404).json({ message: 'No such User exists' });
      }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
}
