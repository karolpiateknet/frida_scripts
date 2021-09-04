
let keyWords = ["Keys", "Secret", "Password", "Credentials"]

rpc.exports = {
    /// Searches for ObjC classes with keys key word in name.
    /// Then creates instance of this class and print out contained values. 
    searchForKeysInstances: function () {
        ObjC.enumerateLoadedClasses({
            onMatch: function(className) {
                for (const key of keyWords) {
                    if (className.includes(key)) {
                        try {
                            var instance = ObjC.classes[className].alloc().init();
                            console.log(instance.toString());
                        } catch (error) {
                            
                        }
                    }
                }
                
            },
            onComplete: function() {}
        });
    },
};
