# FI-Widgets
FI Widgets is a website of tools to be used by the Financial Independence, aka FIRE community. FI Widgets draws from the [FI-API](https://github.com/bbusenius/FI-API) which runs on the [FI Python library](https://github.com/bbusenius/FI). When a new function is added to the FI Python library and pushed to GitHub, FI-API is automatically updated and a new widget appears on this site. For a list of available widgets, visit the [FI Python library repo](https://github.com/bbusenius/FI#using). 

![Example row of widgets](https://github.com/bbusenius/FI-Widgets/raw/master/docs/widgets-row-screenshot.png)

## Dependencies
FI Widgets requires a running instance of [FI-API](https://github.com/bbusenius/FI-API). The url in `next.config.js` must match the url of the FI-API instance if it's being run on something other than the default.

## Installation
First install FI-API or find a running instance of it to point the site at.
```
git clone https://github.com/bbusenius/FI-Widgets.git
npm install
```

## Run the site
```
npm run dev
```
The site should be accessible at http://localhost:3000/
