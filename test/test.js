const ScreenshotsCloud = require('../src/index.js')

const SCREENSHOTSCLOUD_KEY = 'my-key-generated-at-urlk-dot-it';
const SCREENSHOTSCLOUD_SECRET = 'mysecretstringgeneratedaturlkdotit';

var assert = require('assert');

describe('screenshotscloud', function() {
	describe('#screenshotUrl', function() {
		it('should return an API request', function() {
			const screenshotscloud = ScreenshotsCloud(SCREENSHOTSCLOUD_KEY, SCREENSHOTSCLOUD_SECRET);

			if(!screenshotscloud.screenshotUrl({
				"url": "maps.google.com",
				"width": 1040,
				"viewport_width": 1560,
				"cache_time": 3600
			}).startsWith('https://api.screenshots.cloud/')) {
				throw new Error('Should be true.');
			}
		});
	});
});

describe('screenshotscloud', function() {
	describe('#screenshotUrl', function() {
		it('should include passed options', function() {
			const screenshotscloud = ScreenshotsCloud(SCREENSHOTSCLOUD_KEY, SCREENSHOTSCLOUD_SECRET);

			if(!screenshotscloud.screenshotUrl({
				"url": "maps.google.com",
				"width": 1040,
				"viewport_width": 1560,
				"cache_time": 3600
			}).endsWith('&cache_time=3600')) {
				throw new Error('Should be true.');
			}
		});
	});
});

describe('screenshotscloud', function() {
	describe('#screenshotUrl', function() {
		it('should match exact output of predetermined response generated from another API implementation', function() {
			const screenshotscloud = ScreenshotsCloud(SCREENSHOTSCLOUD_KEY, SCREENSHOTSCLOUD_SECRET);

			if(!screenshotscloud.screenshotUrl({
				"url": "maps.google.com"
			}) == 'https://api.screenshots.cloud/v1/screenshot/my-key-generated-at-urlk-dot-it/6fd9c40f6131c1cd416bad25d975a51a93a9df9e?url=maps.google.com') {
				throw new Error('Should be true.');
			}
		});
	});
});

describe('screenshotscloud', function() {
	describe('#screenshotUrl', function() {
		it('should throw error if no API key supplied', function() {
			try {
				const screenshotscloud = ScreenshotsCloud();
			} catch(e) {
				if(!e.message.includes("This package requires an API Key")) {
					throw new Error('Should be true.');
				}
			}
		});
	});
});

describe('screenshotscloud', function() {
	describe('#screenshotUrl', function() {
		it('should throw error if no API secret supplied', function() {
			try {
				const screenshotscloud = ScreenshotsCloud(SCREENSHOTSCLOUD_KEY);
			} catch(e) {
				if(!e.message.includes("This package requires an API Secret")) {
					throw new Error('Should be true.');
				}
			}
		});
	});
});

