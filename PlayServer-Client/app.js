const axios = require('axios');

main();

function main() {
	getimgpic();
}

async function getimgpic() {
	axios.post('http://playserver.co/index.php/Vote/ajax_getpic/PserverN-15282')
	.then((response) => {
		if (response.status == 200 ) {
			console.log("GetImg:" +response.data.checksum+".png\n");
			var checksum = response.data.checksum;
		}
	})
	.catch((error) => {
	 	console.log(error);
	})

}
