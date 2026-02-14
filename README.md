![Vivid Log](https://cms.protoqol.nl/assets/2b8d3ddd-8d7e-44e2-ba0f-09f8476258cd)

[![npm version](https://badge.fury.io/js/vividlog.svg)](https://badge.fury.io/js/vividlog) ![npm](https://img.shields.io/npm/dm/vividlog.svg)

> Ever thought the native console logging feature could be better?

This npm module makes it slightly easier but mainly a lot nicer to log to the browser console.

## Installation & Usage

#### Install with npm

Installation is as simple as any other npm module.<br>

```bash
npm i vividlog --save-dev
```

#### Install with CDN

Or add this to your HTML file directly <br>

```html

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vividlog@latest/dist/vividLog.js"></script>
```

> #### Usage
>##### Available methods
>  Note that VividLog is bound to `window.vividLog`<br>
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/functions.png" width="650">

> ##### Configuration
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/config.png" width="650">

## Preview - more images coming soon

#### What you can expect

<img src="https://cms.protoqol.nl/assets/c3dae929-c937-486d-b88e-5c0ad4c2748c"
alt="Vivid Log" height="500" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

#### Without grouping and with grouping

<img src="https://cms.protoqol.nl/assets/a83344eb-f4c9-44b0-8bbc-eca2e6f3652c"
alt="Vivid Log" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

#### Expanded group

<img src="https://cms.protoqol.nl/assets/dfc723de-c038-4024-9710-088d75cddfc1"
alt="Vivid Log" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

#### What your error log looks like after using `v.takeover()`

<img src="https://cms.protoqol.nl/assets/aba963fa-13b5-4cea-ab4f-dc0ad166f2f9"
alt="Vivid Log" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

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


