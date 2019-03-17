
const Playserver = require('./src/PlayServer');
const Msg = require('./src/Msg');
const Anticaptcha = require('./src/Anticaptcha');

main();
async function main() {
	console.log('\x1Bc');
	await Msg.banner();
	while (0 < 999) {
		try {
			// get img 
			const checksum = await Playserver.getimgpic();
			// save img
			await Playserver.saveimg(checksum);
			//TODO get ans from Anti-captcha
			//
			// send answer to playserver 
			await Playserver.sendanswer(checksum,ans);
			//sleep 61 sec 
			console.log(`Sleep 61 sec!`);
			await sleep(61000);

		} catch (err) {
			console.log(err);
		}
	}
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}