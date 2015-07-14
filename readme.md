# PrettyLog

> Colorful console.log for commandline apps in bash and zsh


## Install

```
$ npm install prettylog
```


## Usage

```javascript
var pretty = require('prettylog');

pretty.log('Text here'[,'color','option']);

//examples
pretty.log('Text Here');
pretty.info('Text here', 'blue',);
pretty.warn('Text here', 'yellow','underline');
pretty.error('Text here', 'red','regular');
pretty.trace('Text here', 'cyan','bold');
```

##Functions

* log
* info
* warn
* error
* trace

##Colors

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
