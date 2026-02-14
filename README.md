![Vivid Log](https://cms.protoqol.nl/assets/2b8d3ddd-8d7e-44e2-ba0f-09f8476258cd)

[![npm version](https://badge.fury.io/js/vividlog.svg)](https://badge.fury.io/js/vividlog) ![npm](https://img.shields.io/npm/dm/vividlog.svg)

> Ever thought the native console logging feature could be better?

This npm module makes it slightly easier but mainly a lot nicer to log to the browser console.

## Installation & Usage

#### Install with npm

Installation is as simple as any other npm module.

```bash
npm i vividlog --save-dev
```

#### Install with CDN

Or add this to your HTML file directly

```html

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vividlog@latest/dist/vividLog.js"></script>
```

### Usage

> ##### Available methods
>  Note that VividLog is bound to `window.vividLog`

```javascript
let v = require('vividLog') || window.vividLog

// How to use
v.log(...any)

// When JavaScript has done a good job
v.done('A', 'Success!')

// Purely for logging information
v.info('Hey, we reached this point!');

// For debug-related logging
v.debug(['Hm', 'This', 'Is', 'Annoying'])

// Logging errors
v.err('This should definitely not happen')

// For quick and dirty logging
v.log('Nice weather today')
// Group all given variables, can be used with any method above

v.group().log('Group', 'These', 'Together')

// Custom log utility
v.say(
    'My Variable',
    'A Nice Label',
    'MyColor, defaults to brown but can be any css valid color'
)

// Inject your own style!
v.style('font-style: italic;').log('Pretty text!')

// Replace default error log with VividLog I Experimental feature
v.takeOver(true);

```

### Configuration

```typescript
let v = require("vividLog") || window.vividLog;

// Configure like
v.config.autoGroup = false;

// Available config
type configType = {
    config: {
        autoGroup: boolean,
        timeNotation: "h:m:s:ms",
        iUseLightTheme: boolean,
        fontSize: "{PIXEL_VALUE}px",
        newLine: boolean
    }
}

```

## Preview

#### What you can expect

![Vivid Log](https://cms.protoqol.nl/assets/c3dae929-c937-486d-b88e-5c0ad4c2748c)

#### Without grouping and with grouping

![Vivid Log](https://cms.protoqol.nl/assets/a83344eb-f4c9-44b0-8bbc-eca2e6f3652c)

#### Expanded group

![Vivid Log](https://cms.protoqol.nl/assets/dfc723de-c038-4024-9710-088d75cddfc1)

#### What your error log looks like after using `v.takeover()`

![Vivid Log](https://cms.protoqol.nl/assets/aba963fa-13b5-4cea-ab4f-dc0ad166f2f9)

## Release History (v1.5.0)

* 1.5.0
    * Added new method called `v.style()` in which you can define your own log style
    * A lot of refactoring of the code, less chaos more nice code
* 1.3.15
    * `v.takeover()` renamed to `v.takeOver()`
    * New sample images
    * Readme fixes and updates
* 1.3.0
    * Added support to log multiple variables
    * Added ability to group variables
* 1.0.0
    * The first release, it's now working and can be used.
* 0.9.0
    * Added the actual code; v.err() / v.debug() / v.log() / v.done() / v.warn() / v.info() / v.say()
    * Added option to configure some settings
    * Added semi-support for FireFox
* 0.0.2
    * Work in progress

## Tested on Chrome / Firefox / Opera

> If anyone could share some experiences with other browsers with me I would be very thankful!

## Meta

Distributed under the MIT license. See ``LICENSE`` for more information.

---

Developed by [Protoqol](https://protoqol.nl/).


