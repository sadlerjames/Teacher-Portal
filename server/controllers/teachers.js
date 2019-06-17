const bcrypt = require('bcrypt');
const saltRounds = 10;

const jwt = require('jsonwebtoken');

const find = require('../../utils/find').teacherpass;
const isset = require('../../utils/isset').isset;

module.exports = {
    login: function (req, res, callback) {
        try {
            let email = req.body.email;
            let inputedpassword = req.body.password;
            let passhashinputed = bcrypt.hashSync(inputedpassword, saltRounds);
            let teacherpass = teacherpass(email);
            
            if (email && inputedpassword){
                //compare the password in the database vs the password that the user entered
                let compare = bcrypt.compareSync(teacherpass, passhashinputed);
                if (compare == true){

                } else{

                }
            } else {

            }
        } catch (err) {
            // pass any errors on
            callback(err);
        }
    }
};