[![Build Status](https://travis-ci.org/ScreenshotsCloud/screenshotscloud-node.svg?branch=master)](https://travis-ci.org/ScreenshotsCloud/screenshotscloud-node)

# ScreenshotsCloud

## Perfect Screenshots Anywhere

Get high quality screenshots using a real browser in seconds using our reliable CDN backed service

## Requirements

Tested against node.js 4+

## Installation

Install via npm

```bash
npm install screenshotscloud
```

Once installed you can generate screenshots as follows:

```node
const ScreenshotsCloud = require('screenshotscloud');

const SCREENSHOTSCLOUD_KEY = 'baf30192-54e1-4610-a89e-5e9c03a6b5dc';
const SCREENSHOTSCLOUD_SECRET = 'OGUYJcZd69WsYIc3EtedU9NCRBBoewTWD5ONZNwlqVrMVroM7P';

const screenshotscloud = ScreenshotsCloud(SCREENSHOTSCLOUD_KEY, SCREENSHOTSCLOUD_SECRET);

const screenshotUrl = screenshotscloud.screenshotUrl({
	"url": "bbc.com/news",
	"width": 800
});
```

## Parameters

These are the options you can use to customize your screenshot.

| Parameter | Default | Description |
| --- | --- | --- |
| url | | **Required.** The website address that you want to take a screenshot of. |
| width | 1920 | Width of the thumbnail. |
| viewport_width | 1920 | Width of the browser viewport this is the actual width of the page before we resize it for the thumbnail. |
| viewport_height | (1200) | Height of the browser viewport, if you do not give this parameter we will calculate it for you based on viewport_width in 16:10 ratio. |
| full_page | false | Capture a full length screenshot of the requested page. |
| delay | 250 | Amount of time to wait before taking a screenshot of the page after it is fully loaded. Maximum 120000ms (2 minutes), minimum 250ms. |
| cache_time | 2592000 | Amount of time in milliseconds to wait before taking the screenshot again. Maximum 2592000ms (30 days), minimum 1ms. |
| user_agent | Latest Firefox User Agent | Set the user agent this screenshot will identify as. Useful for identifying as a mobile or tablet browser or to identify as a specific browser if the website pretends it needs Internet Explorer to view it's contents. |
| language | false | Trim the outer color of the screenshot, useful for SVG's. |
| transparent | false | Remove the background from the page, PNG format required. |
| language | en | Accept-Language header customization for websites that support it, set ja for Japanese, de for German etc. |
| cookie | | Semi colon separated list of cookies e.g. fruit=apple; drink=tea |
| disable_javascript | false | Don't execute javascript on this page. |
| disable_images | false | Don't download images on this page. |
| timeout | 300000 | Amount of time in milliseconds to wait before taking screenshot anyway. Maximum 300000ms (5 minutes). |
| mobile | false | Shortcut to set pixel_ratio, user_agent, viewport_width, viewport_height and width to that of the latest iPhone. |
| pixel_ratio | 1 | Multiplier that sets the pixel density of the page relative to the resolution, useful for taking retina screenshots (2). |
| format | png | Output the screenshot as a PNG (png) or JPEG (jpg) image. |
| quality | 92 (if format=jpg) | Set the jpeg quality of the screenshot if jpeg is set as the format. |
| click_selector | | Accepts valid DOM selector (#wantedselector). Rendered screenshot will only display contents of DOM selector. |
| wait_selector | | Accepts valid DOM selector (.valid_selector > .another_class). We will not take the screenshot until .valid_selector appears on this screen and is not display:none; or timeout is reached. |
| clip_selector | | Accepts valid DOM selector (.valid_selector:not(div)). Rendered screenshot will only display contents of DOM selector. |

More documentation about this package and other language implementations can be found at https://screenshots.cloud/documentation.

## Support

Contact us at support@brushd.com if you have any issues or questions about this package.

## Other implementations

Need an implementation for another language?

| Language | Address |
| --- | --- |
| C# | https://github.com/ScreenshotsCloud/screenshotscloud-cs |
| Java | https://github.com/ScreenshotsCloud/screenshotscloud-java |
| Node.js |https://github.com/ScreenshotsCloud/screenshotscloud-node |
| PHP | https://github.com/ScreenshotsCloud/screenshotscloud-php |
| Python |https://github.com/ScreenshotsCloud/screenshotscloud-python |
| Ruby | https://github.com/ScreenshotsCloud/screenshotscloud-ruby |
| Shell Script | https://github.com/ScreenshotsCloud/screenshotscloud-sh |