[![Build Status](https://travis-ci.org/ScreenshotsCloud/screenshotscloud-node.svg?branch=master)](https://travis-ci.org/ScreenshotsCloud/screenshotscloud-node)

# ScreenshotsCloud

## Perfect Screenshots Anywhere

Get high quality real browser screenshots in seconds using our reliable CDN backed API service.

Get an API Key to start using this fast screenshot API service at [ScreenshotsCloud](https://screenshots.cloud).

## Requirements

Tested against node.js 4+

## Installation

Install via npm

```bash
npm install screenshotscloud
```

or yarn

```bash
yarn add screenshotscloud
```

Once installed you can generate screenshot urls as follows:

```node
const ScreenshotsCloud = require('screenshotscloud');

const SCREENSHOTSCLOUD_KEY = 'baf30192-54e1-4610-a89e-5e9c03a6b5dc';
const SCREENSHOTSCLOUD_SECRET = 'OGUYJcZd69WsYIc3EtedU9NCRBBoewTWD5ONZNwlqVrMVroM7P';

const screenshotscloud = ScreenshotsCloud(SCREENSHOTSCLOUD_KEY, SCREENSHOTSCLOUD_SECRET);

const screenshotUrl = screenshotscloud.screenshotUrl({
	"url": "openai.com/research",
	"width": 800
});
```

## Parameters

These are the options you can use to customize your screenshot.

| Parameter | Default | Description |
| --- | --- | --- |
| url | | **Required.** The website address that you want to take a screenshot of. |
| browser | fastest | Which browser to run the request on. chrome for Google Chrome, firefox for Mozilla Firefox, fastest to run the request on both browsers and return the request from the browser which renders the screenshot fastest. Defaults to fastest. |
| width | 1920 | Width of the thumbnail. This option is only valid for png or jpg format options. |
| viewport_width | 1920 | Width of the browser viewport this is the actual width of the page before we resize it for the thumbnail. |
| viewport_height | (1320) | Height of the browser viewport, if you do not give this parameter we will calculate it for you based on viewport_width in 16:10 ratio. |
| full_page | false | Capture a full length screenshot of the requested page. If the format is pdf this option will always be true. |
| format | png | Output the screenshot as a PNG (png), JPEG (jpg) image or PDF (pdf). |
| quality | 95 (if format=jpg) | Set the jpeg quality of the screenshot if jpeg is set as the format. |
| delay | 250 | Amount of time to wait in milliseconds before taking a screenshot of the page after it is fully loaded. Maximum 60000 (1 minute), minimum 100. |
| cache_time | 2592000 | Amount of time in seconds to wait before taking a fresh screenshot for the same request. Maximum 2592000 (30 days), minimum 1. |
| force | false | Force a new screenshot to be taken with no cache. |
| user_agent | Recent Firefox or Chrome User Agent | Set the user agent this screenshot will identify as. Useful for identifying as a mobile or tablet browser or to identify as a specific browser if the website pretends it needs Internet Explorer. |
| trim | false | Trim the excess space around the resulting screenshot using the most top left pixel color, useful for SVG's. |
| language | en | Accept-Language header customization for websites that support it, set ja for Japanese, de for German etc. |
| cookie | | Semi colon separated list of cookies e.g. fruit=apple; drink=tea |
| disable_javascript | false | Don't execute javascript on this page. Forces browser=firefox. |
| disable_images | false | Don't download images on this page. Forces browser=firefox. |
| timeout | 300000 | Amount of time in milliseconds to wait before taking the screenshot anyway. Maximum 300000 (5 minutes). |
| mobile | false | Shortcut to set pixel_ratio, user_agent, viewport_width, viewport_height and width to that of the latest iPhone. |
| pixel_ratio | 1 | Multiplier that sets the pixel density of the page relative to the resolution, useful for taking retina screenshots (2). |
| click_selector | | Accepts valid DOM selector (#wantedselector). Rendered screenshot will only display contents of DOM selector. |
| wait_selector | | Accepts valid DOM selector (.valid_selector > .another_class). We will not take the screenshot until .valid_selector appears on this screen and is not display:none; or timeout is reached. |
| clip_selector | | Accepts valid DOM selector (e.g. .valid_selector:not(div)). Rendered screenshot will only display contents of DOM selector. This option is only valid for png or jpg format options. |
| hover_selector | | Accepts valid DOM selector (e.g. #wantedselector). Mouse will be hovered over the first instance of the selector you specify. Forces browser=chrome. |

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
| ColdFusion | https://github.com/ScreenshotsCloud/screenshotscloud-coldfusion |
| Shell Script | https://github.com/ScreenshotsCloud/screenshotscloud-sh |

ScreenshotsCloud is made by Brushd https://brushd.com/