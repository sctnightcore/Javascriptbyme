const axios = require('axios');
const axiosFile = require('axios-file');

main();

async function main() {
	await banner();
	await getimgpic();
}


function banner() {
	console.log("=========================");
	console.log("PlayServer-Javascript");
	console.log("=========================");
}

function getimgpic() {
	axios.post('http://playserver.co/index.php/Vote/ajax_getpic/PserverN-15282')
	.then(resp => {
	  	var checksum = resp.data.checksum;
	  	console.log("GetImg:" +checksum+".png");
	  	axiosFile({url: `http://playserver.co/index.php/VoteGetImage/${checksum}`,method: 'get',savePath: `img/${checksum}.png`});
	  	console.log("SaveImg " + checksum + " has been downloaded!");
	  	return checksum;
  	});
}

