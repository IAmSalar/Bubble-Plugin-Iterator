function(instance, context) {

	instance.data.startIteration = function(total) {
        
       instance.data.newList(total)
       instance.triggerEvent("started")

    }
    
    instance.data.newList = function(total) {
        
        instance.data.count = 0
    	instance.data.total = total
        instance.publishState("count", 0)  
        instance.publishState("total", total)  
        
    }
    
    instance.data.didIteration = function() {
        
        if (instance.data.total !== null) {
            
        	instance.data.count += 1
            instance.publishState("count", instance.data.count)
            instance.publishState("remaining", instance.data.total - instance.data.count) 
            
            if (instance.data.count >= instance.data.total) {
            	instance.triggerEvent("complete")
            } else {
            	instance.triggerEvent("iteration")   
            }
        	
        }
        
    }
    
    instance.data.count = 0
    instance.data.total = 0

}