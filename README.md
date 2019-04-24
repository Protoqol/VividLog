<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/logo.png" alt="Vivid Log"/>

[![npm version](https://badge.fury.io/js/vividlog.svg)](https://badge.fury.io/js/vividlog) [![StyleCI](https://github.styleci.io/repos/183106156/shield?branch=master)](https://github.styleci.io/repos/183106156)

> Ever thought the native console logging feature could be better?

This npm module makes it slightly easier but mainly a lot nicer to log to the browser console.

## Installation & Usage
#### Install with npm
Installation is as simple as any other npm module.<br>
```bash
npm i vividlog --save-dev
```

#### Install with CDN
Or add this to your html file directly <br>
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vividlog@1.3.15/dist/main.js"></script>
```

#### Usage
##### Available methods
>  Note that VividLog is bound to `window.v` & `global.v`.<br>

<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/functions.png" width="650">

##### Configuration
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/config.png" height="410">

## Preview
#### What you can expect
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/withconsole.png"
     alt="Vivid Log" height="500" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

#### Without grouping and with grouping
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/groupedandwithout.png"
     alt="Vivid Log" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

#### Expanded group
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/grouped.png"
     alt="Vivid Log" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

#### What your error log looks like after using `v.takeover()`
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/errorcatching.png"
     alt="Vivid Log" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

## Release History (v1.3.15)
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

## Meta

Distributed under the MIT license. See ``LICENSE`` for more information.

> [gitlab.com/QuintenJustus](https://gitlab.com/QuintenJustus)
