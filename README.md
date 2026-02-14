![Vivid Log](https://cms.protoqol.nl/assets/2b8d3ddd-8d7e-44e2-ba0f-09f8476258cd?v1)

![NPM](https://img.shields.io/npm/v/%40protoqol%2Fvividlog)
![Build status](https://img.shields.io/github/actions/workflow/status/protoqol/vivid-log/publish.yml)

> Ever thought the native console logging feature could be better?

This npm module makes it slightly easier but mainly a lot nicer to log to the browser console and terminal.

## Features

- **TypeScript Native**: Written in TypeScript with full type definitions.
- **Cross-Environment**: Automatic detection and support for both Browser and Node.js.
- **Beautiful Styles**: CSS-styled logs in browsers and ANSI-styled logs in terminals.
- **Grouping**: Auto-grouping of multiple logs for better organization.
- **Customizable**: Flexible configuration for colors, timestamps, and font sizes.
- **Takeover**: Ability to catch global errors and log them vividly.

## Table of Contents

- [Installation](#installation--usage)
- [Usage](#usage)
    - [Available Methods](#available-methods)
- [Configuration](#configuration)
- [Environment Support](#environment-support)
- [Preview](#preview)
- [Release History](#release-history)

## Installation & Usage

#### Install with npm

Installation is as simple as any other npm module.

```bash
npm i @protoqol/vividlog
```

#### Install with CDN

Or add this to your HTML file directly:

```html

<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@protoqol/vividlog@latest/dist/vividLog.js"></script>

<script>
    // Access via global window object
    const v = window.vividLog;
    v.done("VividLog is ready!");
</script>
```

### Usage

#### Available Methods

VividLog supports both ES modules (`import`) and traditional script tags (Global variable).

- **In Browsers**: It is automatically bound to `window.vividLog`.
- **In Node.js**: It is automatically bound to `global.vividLog`.

##### ES Modules (Modern Web / Node.js)

```typescript
import v from '@protoqol/vividlog';

v.log('Regular log');
```

##### Global Variable (CDN / Traditional Script)

If you are using the CDN version, you don't need to import anything. Use `vividLog` directly:

```javascript
vividLog.info('Information message via global variable');
```

##### Grouping & Multiple Arguments

Log multiple variables together or group them under a single label.

```typescript
// Log multiple items (they will be auto-grouped)
v.log('User Data:', {id: 1, name: 'John'}, ['Admin', 'Developer']);

// Manually group the next log call
v.group().log('Category A', 'Category B', 'Category C');
```

##### Custom Styling & Utilities

Methods for custom branding and behavior.

```typescript
// Custom log with label and hex color
v.say('My Variable', 'A Nice Label', '#795548');

// Just fire a label without content
v.fireLabel('PROCESS STARTED');

// Inject custom CSS (Browser only)
v.style('font-style: italic; font-weight: bold;').log('Stylish text!');

// Catch all global uncaught exceptions/errors
v.takeOver(true);
```

### Configuration

Configure the library by accessing the `config` property.

```typescript
import v from "@protoqol/vividlog";

v.config.autoGroup = false;
v.config.fontSize = "14px";
```

#### Available Config Options

| Property         | Type      | Default   | Description                                                               |
|:-----------------|:----------|:----------|:--------------------------------------------------------------------------|
| `autoGroup`      | `boolean` | `true`    | Automatically group multiple arguments into a collapsed console group.    |
| `timeNotation`   | `string`  | `"h:m:s"` | Format for the timestamp.                                                 |
| `iUseLightTheme` | `boolean` | `false`   | Adjusts text colors for better visibility on light console themes.        |
| `customStyle`    | `string`  | `""`      | Global CSS style applied to all logs (Browser only).                      |
| `fontSize`       | `string`  | `"12px"`  | Font size for console logs (Browser only).                                |
| `newLine`        | `boolean` | `false`   | Whether to put the log content on a new line (default `true` on Firefox). |
| `status`         | `object`  | ...       | Mapping of log levels to their respective colors and codes.               |

## Environment Support

#### Browser

Fully supported with CSS-styled logging in Chrome, Firefox, and Opera.

#### Node.js / Terminal

Fully supported with ANSI color-styled logging. VividLog automatically detects the environment and applies the
appropriate styling.

## Preview

#### What you can expect

![Vivid Log](https://cms.protoqol.nl/assets/c3dae929-c937-486d-b88e-5c0ad4c2748c)

#### Without grouping and with grouping

![Vivid Log](https://cms.protoqol.nl/assets/a83344eb-f4c9-44b0-8bbc-eca2e6f3652c)

#### Expanded group

![Vivid Log](https://cms.protoqol.nl/assets/dfc723de-c038-4024-9710-088d75cddfc1)

#### What your error log looks like after using `v.takeover()`

![Vivid Log](https://cms.protoqol.nl/assets/aba963fa-13b5-4cea-ab4f-dc0ad166f2f9)

## Release History

* 2.0.0
    * Converted the entire library to **TypeScript**.
    * Added full **Node.js / Terminal** support with ANSI colors.
    * Modernized code to ES2026 standards.
    * Improved type detection for variables (e.g., `object[3]`, `array[5]`, `error`).
    * Fixed `v.takeOver()` for Node.js (`uncaughtException`).
    * Updated build system to use Webpack 5 and TypeScript.
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


