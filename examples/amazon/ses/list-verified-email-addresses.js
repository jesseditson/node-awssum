var util = require('util');
var amazon = require("amazon");
var sesService = require("ses");

var env = process.env;
var accessKeyId = process.env.ACCESS_KEY_ID;
var secretAccessKey = process.env.SECRET_ACCESS_KEY;
var awsAccountId = process.env.AWS_ACCOUNT_ID;

var ses = new sesService.Ses(accessKeyId, secretAccessKey, awsAccountId, amazon.US_EAST_1);

console.log( 'Region :', ses.region() );
console.log( 'EndPoint :',  ses.endPoint() );
console.log( 'AccessKeyId :', ses.accessKeyId() );
// console.log( 'SecretAccessKey :', ses.secretAccessKey() );
console.log( 'AwsAccountId :', ses.awsAccountId() );

ses.listVerifiedEmailAddresses({}, function(err, data) {
    console.log("\nlisting verified email addresses - expecting success");
    console.log('Error :', util.inspect(err, true, null));
    console.log('Data :', util.inspect(data, true, null));
});