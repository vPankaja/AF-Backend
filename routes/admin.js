const router = require("express").Router();
let UserManagement = require("../models/Admin.model");

//Add user
router.route("/accept").post((req,res)=>{

  const role = req.body.role;
  const name = req.body.name;
  const nicNo = req.body.nicNo;
  const contactNo = req.body.contactNo;
  const email = req.body.email;
  const password = req.body.password;


  const newadduser = new UserManagement({

      role,
      name,
      nicNo,
      contactNo,
      email,
      password,
  })

  newadduser.save().then(()=>{
      res.json("User Added")
  }).catch((err)=>{
      console.log(err);
  })

})


//Retreve Users 
router.route("/allusers").get((req, res) => {
    UserManagement.find()
        .then((allusers) => {
          res.json(allusers);
        })
        .catch((err) => {
          console.log(err);
        })
  });

  //Delete User
  router.route("/deleteuser/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await UserManagement.findByIdAndDelete(userID)
      .then(() => {
        res.status(200).send({ status: "User deleted" });
      })
      .catch((err) => {
        res.status(500).send({ status: "Error with delete", error: err.message });
      });
  });

  //Get deatails of a single user
  router.route("/getuser/:id").get(async (req, res) => {
    let userID = req.params.id;
     await UserManagement.findById(userID)
      .then((allusers) => {
        res.status(200).send({ status: "User details fetched", allusers });
      })
      .catch(() => {
        console.log(err,message);
        res.status(500).send({ status: "Error with get user", error: err.message });
      });
  });

  module.exports = router;