const commander = require('commander')
const { exec } = require('child_process');
const fs = require('fs')

commander
	.version('1.0.0', '-v, --version')
	.usage('[OPTIONS]...')
	.option('-c, --country <country>', 'The Country ID to Process')
	.parse(process.argv);

const options = commander.opts();


fs.readFile('enviroments/env-' + options.country + '.json', 'utf8', function(err, data) {
	const environment = JSON.parse(data)

	// Update colors
	fs.readFile('./tailwind.config.cjs', 'utf8', function (err,data) {
		let result = data.replace(/(primary:\s+colors)\.\w+/gm, '$1.'+ environment.colors.primary);
		result = result.replace(/(secondary:\s+colors)\.\w+/gm, '$1.'+ environment.colors.secondary);
		fs.writeFile('./tailwind.config.cjs', result, 'utf8', function (err) {
			if (err) return console.log(err);
		});
	});

	// Update env
	fs.readFile('.env', 'utf8', function (err,data) {
		let result = data.replace(/VITE_ISO_EXCLUDED=.*/gm, 'VITE_ISO_EXCLUDED='+ environment.iso_excluded.join(','));
		result = data.replace(/VITE_I18N_LANGUAGES=.*/gm, 'VITE_I18N_LANGUAGES='+ environment.i18n_languages.join(','));
		result = data.replace(/VITE_SITE_TITLE=.*/gm, 'VITE_SITE_TITLE='+ environment.site_title);
		
		fs.writeFile('.env', result, 'utf8', function (err) {
			if (err) return console.log(err);
		});
	});

});



// Build
exec('npm run rebuild');
exec('echo ' + options.country.toLowerCase() + '.bible.cloud >| CNAME');

// iso_excluded
// i18n_languages

// Git Push
//exec('git init');
//exec('git add .');
//exec('git commit -m "auto-push"');
//exec('git branch -M main');
//exec('git remote add origin git@github.com:digitalbiblesociety/shin-' + options.country + '.git');
//exec('git push -f -u origin main');