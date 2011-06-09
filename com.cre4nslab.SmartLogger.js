var com = com || {}
com.cre4nslab = com.cre4nslab || {}


com.cre4nslab.SmartLogger = {
    
    debug: function(){
        try{
            console.debug.apply(this, arguments);
        }
        catch(e){}
    },
    
    log: function(){
        try{
            console.log.apply(this, arguments);
        }
        catch(e){}
    },
    
    info: function(){
        try{
            console.info.apply(this, arguments);
        }
        catch(e){}
    },
    
    warn: function(){
        try{
            console.warn.apply(this, arguments);
        }
        catch(e){}
    },
    
    error: function(){
        try{
            console.error.apply(this, arguments);
        }
        catch(e){}
    }
    
}