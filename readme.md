# PrettyLog

> Colorful console.log for commandline apps in bash and zsh


## Install

```
$ npm install prettylog
```


## Usage

```javascript
var pl = require('prettylog');

pl.log('Text here', 'color','option');
pl.info('Text here', 'color','bold');
pl.warn('Text here', 'color','bold');
pl.error('Text here', 'color','bold');
pl.trace('Text here', 'color','bold');
```

###Colors
* black
* red
* green
* yellow
* blue
* purple
* cyan
* white

###Options
* Regular **default**
* Bold
* Underline

## License

MIT
