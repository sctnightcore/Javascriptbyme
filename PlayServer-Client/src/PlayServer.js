const axios = require('axios');
const axiosFile = require('axios-file');
require('dotenv').config();
const colors = require('colors/safe');



/*get Img/ Save Img */
async function getimgpic() {
	try {
		let res =  await axios.post(`http://playserver.co/index.php/Vote/ajax_getpic/${process.env.URL}`);
		axiosFile({url: `http://playserver.co/index.php/VoteGetImage/${res.data.checksum}`,method: 'get',savePath: `img/${res.data.checksum}.png`});
		console.error(`[GetImg/SaveImg]:${res.data.checksum}.png`);
		return res;
	} catch (err) {
		console.log(err);
	}
}


async function sendanswer(checksum,ans) {
	try {
		let json = await axios.post(`http://playserver.co/index.php/Vote/ajax_submitpic/${process.env.URL}`, {
			headers: {'Referer':'http://playserver.in.th/index.php/Vote/prokud/$server'},
			data: `server_id=${process.env.SERVERID}&captcha=${ans}&gameid=${process.env.GAMEID}&checksum=${checksum.data.checksum}`
		});

		if (json.data.success == true) {
			console.error(colors.green(`[Success]:${checksum.data.checksum}.png is ${ans}`));
		} else {
			console.error(colors.red(`[Fail]:${checksum.data.checksum}.png is ${ans}`));
		}

	} catch (err) {
		console.log(err);
	}
}

module.exports.getimgpic = getimgpic;
module.exports.sendanswer = sendanswer;
