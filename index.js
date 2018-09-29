var jwt = require('jsonwebtoken');
var fs = require('fs');

var privateKEY  = fs.readFileSync('./private.key', 'utf8');
var publicKEY  = fs.readFileSync('./public.key', 'utf8');

var signOptions = {
 issuer:  'aa',
 subject:  'aaa',
 audience:  'aaa',
 expiresIn:  "12h",
 algorithm:  "RS256"   // RSASSA [ "RS256", "RS384", "RS512" ]
};

// Generate JWT toke with private key
var token = jwt.sign({email: "ambu1234@mail.com"}, privateKEY, signOptions);
console.log("Token :" + token);

// Verify JWT token with Public key
jwt.verify(token, publicKEY, function(err, decoded){
  if (err) console.log(err);
  console.log("Verified successfully  :" , decoded);
});
