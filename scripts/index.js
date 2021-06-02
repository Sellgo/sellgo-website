const { default: chalk } = require('chalk');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const compressSiteMaps = async () => {
	try {
		const publicDir = path.resolve(__dirname, '../public');

		fs.readdirSync(publicDir).forEach((file) => {
			if (file.endsWith('.xml')) {
				const fileContents = fs.createReadStream(`${publicDir}/${file}`);
				const writeStream = fs.createWriteStream(`${publicDir}/${file}.gz`);
				const zip = zlib.createGzip();

				fileContents.pipe(zip).pipe(writeStream);
			}
		});
	} catch (err) {
		console.log(chalk.red('Error compressing sitemaps'), err);
	}
};

compressSiteMaps();
