#SmartLogger
A JavaScript logging utility that wraps around the _web_ _console_ feature, provided by modern browsers, to ensure that client-side debugging works irrespective of whether a feature is supported in a browser or not.

## Features


## Usage
```javascript
var logger = com.cre4nslab.SmartLogger;
  
logger.setLoggingLevel(logger.INFO);
logger.debug("This won't show since DEBUG is lower than INFO");
```

