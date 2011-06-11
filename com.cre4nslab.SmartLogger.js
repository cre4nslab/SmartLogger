var com = com || {}
com.cre4nslab = com.cre4nslab || {}

com.cre4nslab.SmartLogger = {
    
    /**
     *
     * @class
     * @constructor
     * 
     * @param {Integer} level
     * @param {String} levelStr
     */
    LoggingLevel : function(level, levelStr){
        this.level = level;
        this.levelStr = levelStr;
        
        /** @return {String} */
        this.toString = function(){ return this.levelStr; }

        /** @return {Integer} */
        this.getValue = function(){ return this.level }
        
        /**
         * @return {Boolean}
         */
        this.isLoggable = function(){
            var level = com.cre4nslab.SmartLogger.level;
            
            if(level===null) return true;
            return level.getValue() >= this.level
        }
        
        return this;
    },
    
    /** @private */
    level : null,
    
    /**
     * @param {LoggingLevel} level
     */
    setLevel: function(level){
        if(!(level instanceof this.LoggingLevel)) 
            throw new Error('level must be of type com.cre4nslab.SmartLogger.LoggingLevel but ' + typeof(level) + ' found.');
        
        this.level = level
    },
    
    debug: function(){
        Array.push(arguments, this.DEBUG);
        this.logMessage.apply(this, arguments);
    },
    
    log: function(){
        Array.push(arguments, this.LOG);
        this.logMessage.apply(this, arguments);
    },
    
    info: function(){
        Array.push(arguments, this.INFO);
        this.logMessage.apply(this, arguments);
    },
    
    warn: function(){
        Array.push(arguments, this.WARN);
        this.logMessage.apply(this, arguments);
    },
    
    error: function(){
        Array.push(arguments, this.ERROR);
        this.logMessage.apply(this, arguments);
    },
    
    logMessage: function(){
        var level = Array.pop(arguments);
        
        if(!(level instanceof this.LoggingLevel && level.isLoggable())) return;
        
        var konsole = null;
        switch(level.toString()){
            case 'LOG':
                konsole = console.log;
                break
            case 'DEBUG':
                konsole = console.debug;
                break
            case 'INFO':
                konsole = console.info;
                break
            case 'WARN':
                konsole = console.warn;
                break
            case 'ERROR':
                konsole = console.error;
                break
        }
        
        if(konsole !== null){
            konsole.apply(this, arguments);
        }
    }
}

// Defining the logging level constants
com.cre4nslab.SmartLogger.ERROR = new com.cre4nslab.SmartLogger.LoggingLevel(1,'ERROR');
com.cre4nslab.SmartLogger.WARN  = new com.cre4nslab.SmartLogger.LoggingLevel(2,'WARN');
com.cre4nslab.SmartLogger.INFO  = new com.cre4nslab.SmartLogger.LoggingLevel(3,'INFO');
com.cre4nslab.SmartLogger.DEBUG = new com.cre4nslab.SmartLogger.LoggingLevel(4,'DEBUG');
com.cre4nslab.SmartLogger.LOG   = new com.cre4nslab.SmartLogger.LoggingLevel(5,'LOG');