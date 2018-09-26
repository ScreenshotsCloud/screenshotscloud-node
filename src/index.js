const CryptoJS = require('crypto-js');

const DEFAULT_PREFIX = 'https://api.screenshots.cloud/v1/';

const needsProp = function(prop) {
	if(prop === undefined || prop === '') {
		return false;
	}

	return true;
};

const parameterString = function(options) {
	return Object.keys(options).filter(function(key) {
		return needsProp(options[key]);
	}).map(function(key) {
		return key + '=' + encodeURIComponent(options[key]);
	}).join('&');
};

// To generate cachable url's we need a consistent IV.
const encIv = CryptoJS.enc.Hex.parse('');

module.exports = function(key, secret, prefix) {
	if (!prefix) {
		prefix = DEFAULT_PREFIX;
	}

	if (!key) {
		throw new Error('This package requires an API Key, if you don\'t already have one get one at https://screenshots.cloud');
	}

	if (!secret) {
		throw new Error('This package requires an API Secret, if you don\'t already have one get one at https://screenshots.cloud');
	}

	const encKey = CryptoJS.enc.Hex.parse(secret.slice(0,32));

	const encryptLoginUsername = (username) => {
		var encrypted = CryptoJS.AES.encrypt(username, encKey, {
			iv: encIv,
			padding: CryptoJS.pad.ZeroPadding,
		});

    	return encrypted.toString();
	};
	
	const encryptLoginPassword = (password) => {
		var encrypted = CryptoJS.AES.encrypt(password, encKey, {
			iv: encIv,
			padding: CryptoJS.pad.ZeroPadding,
		});

    	return encrypted.toString();
	};

	return {
		screenshotUrl: (options) => {
			if (!options.url) {
				throw new Error('screenshotUrl requires a URL');
			}

			if(options.login_username) {
				options.login_username = encryptLoginUsername(options.login_username);
				options.login_encrypted = 1;
			}

			if(options.login_password) {
				options.login_password = encryptLoginPassword(options.login_password);
				options.login_encrypted = 1;
			}

			const parameters = parameterString(options);
			const generatedToken = CryptoJS.HmacSHA1(parameters, secret);

			return `${prefix}screenshot/${key}/${generatedToken}?${parameters}`;
		},
		scrapeUrl: (options) => {
			if (!options.url) {
				throw new Error('scrapeUrl requires a URL');
			}

			const parameters = parameterString(options);
			const generatedToken = CryptoJS.HmacSHA1(parameters, secret);

			return `${prefix}scrape/${key}/${generatedToken}?${parameters}`;
		},
		encryptLoginUsername: encryptLoginUsername,
		encryptLoginPassword: encryptLoginPassword
	};
};