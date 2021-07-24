const UserSchema = require("../dbmodel/user")
const create = async (req, res) => {
  try {
    const user = new UserSchema({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
    });

    // Save user in the database
    const userdetails = await user.save();

    res.json(userdetails);
  } catch (error) {
    res.json(error.message);
  }
};

const findAll = async(req, res) => {
  UserSchema.find()
    .then(user => {
        res.send(user);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving user list."
        });
    });
};

const findOne = (req, res) => {
  UserSchema.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};

const update = (req, res) => {
 
  // Find user and update it with the request body
  UserSchema.findByIdAndUpdate(req.params.userId, {
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
  }, {new: true})
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "user not found with id " + req.params.userId
          });
      }
      res.send(user);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "user not found with id " + req.params.userId
          });                
      }
      return res.status(500).send({
          message: "Error updating user with id " + req.params.userId
      });
  });
};

const deleteuser = (req, res) => {
  UserSchema.findByIdAndRemove(req.params.userId)
  .then(user => {
      if(!user) {
          return res.status(404).send({
              message: "user not found with id " + req.params.userId
          });
      }
      res.send({message: "user deleted successfully!"});
  }).catch(err => {
      if(err.kind === 'ObjectId' || err.name === 'NotFound') {
          return res.status(404).send({
              message: "user not found with id " + req.params.userId
          });                
      }
      return res.status(500).send({
          message: "Could not delete user with id " + req.params.userId
      });
  });
};

module.exports = {create,findAll,findOne,update,deleteuser};
