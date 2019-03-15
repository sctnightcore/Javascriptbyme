const Playserver = require('./src/PlayServer');
const Msg = require('./src/Msg');
const Anticaptcha = require('./src/Anticaptcha');


main();

async function main() {
	await Msg.banner();
	while (0 < 999) {
		var checksum = await Playserver.getimgpic();
		var ans = await Anticaptcha.getanswer(checksum);
		await Playserver.sendanswer(checksum,ans);
	}

}


