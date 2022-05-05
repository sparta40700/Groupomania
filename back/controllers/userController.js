const { remove } = require("../models/user.model");
const userModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  const users = await userModel.find().select("-password");
  res.status(200).json(users);
};

module.exports.userInfo = async (req, res) => {
  console.log(req.params.id);
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid id" });
    userModel
      .findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else
          console.log(
            "Error in Retriving User :" + JSON.stringify(err, undefined, 2)
          );
      })
      .select("-password");
  }
  const user = await userModel.findById(req.params.id).select("-password");
  res.status(200).json(user);
};

module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid id" })
        try {
        await userModel.findByIdAndUpdate({_id: req.params.id});
        {
            $set: {
                bio: req.body.bio
            }  
        }
        {
            new: true, upsert: true, setDefaultOnInsert: true
        }
        (err, docs) => {
            if (!err) return res.send(docs);
            if (err) return res.status(400).json({ message: err.message });
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
    else {
        return res.status(400).json({ message: "Invalid id" });
    }
}

module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).json({ message: "Invalid id" })
    try {
        await userModel.remove({_id: req.params.id}).exec();
        return res.status(200).json({ message: "User deleted" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}
    else {
        return res.status(400).json({ message: "Invalid id" });
    }
}
        module.exports.followUser = async (req, res) => {   
            if (!ObjectID.isValid(req.params.id)) 
            (!ObjectID.isValid(req.body.id)) 
             {
            return res.status(400).json({ message: "Invalid id" })
            try {
                await userModel.findByIdAndUpdate( 
                req.params.id,
                 { $addToSet: {following: req.body.idToFollow}},
                    {new: true, upsert: true},
                (err, docs) => {
                    if (!err) return res.status(201).json(docs);
                    else return res.status(400).json(err);
                }
                );
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }

module.exports.unfollowUser = async (req, res) => {
            if (
            !ObjectID.isValid(req.params.id))
            (!ObjectID.isValid(req.body.idToUnfollow)
            ) 

            return res.status(400).json({ message: "Invalid id" })
            try {
                await userModel.findByIdAndUpdate(
                    {_id: req.params.id}, {$pull: {followers: req.body.idToUnfollow}},
                {new: true, upsert: true},
                (err, docs) => {
                    if (err) return res.status(400).json(err);
                }
                );
            } catch (error) {
                return res.status(400).json({ message: error.message });
            }
        };
