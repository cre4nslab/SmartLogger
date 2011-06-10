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
        if(!(level instanceof this.LoggingLevel)) return;
        
        this.level = level
    },
    
    debug: function(){
        if(!this.DEBUG.isLoggable()) return;
        
        try{
            console.debug.apply(this, arguments);
        }
        catch(e){}
    },
    
    log: function(){
        if(!this.LOG.isLoggable()) return;
        
        try{
            console.log.apply(this, arguments);
        }
        catch(e){}
    },
    
    info: function(){
        if(!this.INFO.isLoggable()) return;
        
        try{
            console.info.apply(this, arguments);
        }
        catch(e){}
    },
    
    warn: function(){
        if(!this.WARN.isLoggable()) return;
        
        try{
            console.warn.apply(this, arguments);
        }
        catch(e){}
    },
    
    error: function(){
        if(!this.ERROR.isLoggable()) return;
        
        try{
            console.error.apply(this, arguments);
        }
        catch(e){}
    }
    
}

// Defining the logging level constants
com.cre4nslab.SmartLogger.ERROR = new com.cre4nslab.SmartLogger.LoggingLevel(1,'ERROR');
com.cre4nslab.SmartLogger.WARN  = new com.cre4nslab.SmartLogger.LoggingLevel(2,'WARN');
com.cre4nslab.SmartLogger.INFO  = new com.cre4nslab.SmartLogger.LoggingLevel(3,'INFO');
com.cre4nslab.SmartLogger.DEBUG = new com.cre4nslab.SmartLogger.LoggingLevel(4,'DEBUG');
com.cre4nslab.SmartLogger.LOG   = new com.cre4nslab.SmartLogger.LoggingLevel(5,'LOG');