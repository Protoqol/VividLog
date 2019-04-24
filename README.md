<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/logo.png" alt="Vivid Log"/>
# Vivid Log
> Ever thought the native console logging feature could be better?

This npm module makes it slightly easier but mainly a lot nicer to log to the console.

## Installation & Usage
#### Install with npm
Installation is as simple as any other npm module.<br>
`npm i vividlog --save-dev`
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/install.png" width="300">

#### Install with CDN
Or add this to your html file directly <br>
<iframe
  src="https://carbon.now.sh/embed/?bg=rgba(171%2C184%2C195%2C100)&t=material&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=48px&ph=32px&ln=false&fm=Hack&fs=13px&lh=133%25&si=false&es=2x&wm=false&code=%253Cscript%2520type%253D%2522text%252Fjavascript%2522%2520src%253D%2522https%253A%252F%252Fcdn.jsdelivr.net%252Fnpm%252Fvividlog%25401.3.0%252Fdist%252Fmain.js%2522%253E%253C%252Fscript%253E"
  style="width:600px; height:473px; border:0; margin-bottom: -250px; overflow:hidden;"
  sandbox="allow-scripts allow-same-origin">
</iframe>

#### Usage
VividLog is bound to `window.v` & `global.v`<br>

##### Available log types (Note that any type of variable is supported)
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/functions.png">

##### Extra functionality
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/extra.png">

##### Configuration
<img src="https://gitlab.com/QuintenJustus/vividlog/raw/master/assets/config.png">

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

## Release History (v1.0.0)
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
