const axios = require('axios');
const axiosFile = require('axios-file');

main();

async function main() {
	await banner();
	var checksum = await getimgpic(); // TODO retrun resp.data.checksum !
}


async function banner() {
	console.log("=========================");
	console.log("PlayServer-Javascript");
	console.log("=========================");
}

async function getimgpic() {
	try {
		await axios.post('http://playserver.co/index.php/Vote/ajax_getpic/PserverN-15282')
		.then(resp => {
		  	console.log("GetImg:" +resp.data.checksum+".png");
		  	axiosFile({url: `http://playserver.co/index.php/VoteGetImage/${resp.data.checksum}`,method: 'get',savePath: `img/${resp.data.checksum}.png`});
		  	console.log("SaveImg " +resp.data.checksum+ " has been downloaded!");
		  	return resp.data.checksum;
	  	});
  	} catch(error) {
  		console.error(error.message);
  	}	
}

