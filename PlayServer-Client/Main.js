
const Playserver = require('./src/PlayServer');
const Msg = require('./src/Msg');
const Anticaptcha = require('./src/Anticaptcha');

main();

async function main() {
	console.log('\x1Bc');
	await Msg.banner();
	while (0 < 999) {
		try {
			const checksum = await Playserver.getimgpic();
//TODO get ans from Anti-captcha
			const jsontwo = await Playserver.sendanswer(checksum,ans);
			console.log(`Sleep 61 sec!`);
			await sleep(61*1000);
		} catch (err) {
			console.log(err);
		}
	}
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}