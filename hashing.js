const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashpass = function(pass){
    return bcrypt.hash(pass, saltRounds);
}

const comparepass = function(pass,hash){
    return bcrypt.compare(pass, hash);
}

module.exports = {
    hashpass,comparepass
}