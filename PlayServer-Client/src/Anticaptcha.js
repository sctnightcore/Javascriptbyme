const anticaptcha = require('anticaptcha-nodejs')(process.env.AntiCaptchakey);
require('dotenv').config();

async function getanswer(checksum) {
	try {

	} catch (err) {
		console.log(err);
	}
}		

module.exports.getanswer = getanswer;