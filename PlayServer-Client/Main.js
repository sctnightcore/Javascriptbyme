const Playserver = require('./src/PlayServer');


main();

async function main() {
	await banner();
	const checksum = await Playserver.getimgpic();
	/*TODO get ans from anticaptcha*/
	await Playserver.sendanswer(checksum,ans);
}


async function banner() {
	console.log("=========================");
	console.log("PlayServer-Javascript");
	console.log("=========================");
}
