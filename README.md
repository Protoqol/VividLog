<img src="https://gitlab.com/uploads/-/system/project/avatar/11976919/logs.png?width=1000"
     alt="Vivid Log" width="200" height="200"/>
# Vivid Log
> Ever thought the native console logging feature could be better?

This npm module makes it slightly easier but mainly a lot nicer to log to the console.

## Installation & Usage
#### Install with npm
Installation is as simple as any other npm module.<br>
`npm i vividlog --save-dev`<br>
#### Install with CDN
Add to your meta tags <br>
`<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/vividlog@1.0.11/dist/main.js"></script>`

#### Usage
VividLog is bound to `window.v` and looks something like this.<br>
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/Assets/withconsole.png"
     alt="Vivid Log" height="500" style="border-radius:5px; box-shadow: 1px 3px 5px black"/>

##### Available log types
> All methods currently only support one variable per call. Multiple vars support coming soon.
```javascript
// Every method supports any type of variable

// Generic logging message
v.log(...);

// Debug message
v.debug(...);

// Error message
v.err(...);

// Success message
v.done(...);

// Warning message
v.warn(...);

// Informational message
v.info(...);
```
##### Custom Log
```javascript
v.say('Label Name', 'Message', 'Color' = 'brown');
```
##### Configuration
Use as `v.config.iUseLightTheme = true;`
```javascript
 config: {
    timeNotation: [String | 'h:m:s:ms' | Only h/m/s/ms seperated by a ':'],
    iUseLightTheme: [ Boolean | false | Makes text black instead of white ],
    fontSize: [ String | "font-size: 12px;" ],
    newLine: [ Boolean | true | Defaults to false on FireFox],
}
```

## Release History (v1.0.0)
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

> Icon by [Freepik](https://www.freepik.com/)
