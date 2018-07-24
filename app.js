console.log("hello world!!");
var steem = require("steem");

steem.api.setOptions({url: 'https://api.steemit.com'});
steem.api.getAccounts(['forhappywomen'], function(err, response){
    console.log(err, response);

});
