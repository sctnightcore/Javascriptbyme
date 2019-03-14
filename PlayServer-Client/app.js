const axios = require('axios');
const axiosFile = require('axios-file');
require('dotenv').config();

main();

async function main() {
	await banner();
	const checksum = await getimgpic();
	console.error(`GetImg:${checksum.data.checksum}.png`);
	await saveimg(checksum);
	console.error(`SaveImg:${checksum.data.checksum}.png`);
}


async function banner() {
	console.log("=========================");
	console.log("PlayServer-Javascript");
	console.log("=========================");
}
PserverN-15282
/*get Img */
async function getimgpic() {
	try {
		return axios.post(`http://playserver.co/index.php/Vote/ajax_getpic/${process.env.URL}`);
	} catch (err) {
		console.log(err);
	}
}
/*Save Img */
async function saveimg(checksum) {
	try {
		axiosFile({url: `http://playserver.co/index.php/VoteGetImage/${checksum.data.checksum}`,method: 'get',savePath: `img/${checksum.data.checksum}.png`});
	} catch (err) {
		console.log(err);
	}
}
