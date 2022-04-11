const axios = require('axios')
const url = 'https://en.wikipedia.org/wiki/Alan_Turing'

axios(url)
	.then(response => {
		const html = response.data;
		console.log(html)
	})
	.catch(console.error);

