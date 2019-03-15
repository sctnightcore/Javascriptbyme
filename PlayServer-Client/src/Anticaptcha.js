const anticaptcha = require('anticaptcha-async');
const fs = require('fs');


async function getanswer(checksum) {
	const client = anticaptcha(process.env.AntiCaptchakey);
	const result = await client.getImage(fs.createReadStream(`${checksum.data.checksum}.png`), {
		restriction: {
			 minLength: 5,
			 maxLength: 5,
		},
	});
	var ans = result.getValue();
	return ans;
}

module.exports.getanswer = getanswer;