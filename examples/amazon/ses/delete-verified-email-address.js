var inspect = require('eyes').inspector();
var awssum = require('awssum');
var amazon = awssum.load('amazon/amazon');
var Ses = awssum.load('amazon/ses').Ses;

var env = process.env;
var accessKeyId = process.env.ACCESS_KEY_ID;
var secretAccessKey = process.env.SECRET_ACCESS_KEY;
var awsAccountId = process.env.AWS_ACCOUNT_ID;

var ses = new Ses({
    'accessKeyId'     : accessKeyId,
    'secretAccessKey' : secretAccessKey,
    // 'awsAccountId'    : awsAccountId, // optional
});

console.log( 'Region :', ses.region() );
console.log( 'EndPoint :',  ses.host() );
console.log( 'AccessKeyId :', ses.accessKeyId() );
// console.log( 'SecretAccessKey :', ses.secretAccessKey() );
console.log( 'AwsAccountId :', ses.awsAccountId() );

ses.DeleteVerifiedEmailAddress({ EmailAddress : 'bob@example.com' }, function(err, data) {
    console.log("\ngdeleting verified email address - expecting success (since it's idempotent)");
    inspect(err, 'Error');
    inspect(data, 'Data');
});
