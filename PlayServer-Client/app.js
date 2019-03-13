const axios = require('axios');
const axiosFile = require('axios-file');

main();

function main() {
	getimgpic();
}

async function getimgpic() {
  	let res = await axios.post('http://playserver.co/index.php/Vote/ajax_getpic/PserverN-15282');
  	if (res.status == 200 ) {
  		var checksum = res.data.checksum;
  		console.log("GetImg:" +checksum+".png");
  		saveimg(checksum);
  		return checksum;
 	} else {
 		console.log("Cannot get img from PlayServer");
 	}
}


async function saveimg(checksum) {
  	let savefile = await axiosFile({
  		url: 'http://playserver.co/index.php/VoteGetImage/'+checksum,
  		method: 'get',
  		savePath: `img/${checksum}.png`
  	});
  	console.log("SaveImg " + checksum + " has been downloaded!");
}


