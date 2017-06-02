const hmacSha1 = require('crypto-js/hmac-sha1');

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

	return {
		screenshotUrl: (options) => {
			if (!options.url) {
				throw new Error('screenshotUrl requires a URL');
			}

			const parameters = parameterString(options);
			const generatedToken = hmacSha1(parameters, secret);

			return `${prefix}screenshot/${key}/${generatedToken}?${parameters}`;
		},
		scrapeUrl: (options) => {
			if (!options.url) {
				throw new Error('scrapeUrl requires a URL');
			}

			const parameters = parameterString(options);
			const generatedToken = hmacSha1(parameters, secret);

			return `${prefix}scrape/${key}/${generatedToken}?${parameters}`;
		}
	};
};