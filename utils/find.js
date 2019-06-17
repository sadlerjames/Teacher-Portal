var fs = require('fs');
var _ = require("underscore");

module.exports = {
  teacherpass: function(email){
    let rawdata = fs.readFileSync('./data.json');  
    let data = JSON.parse(rawdata);  
    let filtered = _.where(data['teachers'], {email: email});
    let password = filtered[0].password;
    return password;
  }
}