

rpc.exports = {
  /// Return path for application bundle.
  iosBundlePath: function () {
    var bundle = ObjC.classes.NSBundle.mainBundle();
    return bundle.resourcePath().toString();
  },
  /// Returns path to application files directory in format.
  iosFileManagerPath: function () {
    const NSApplicationDiectory = 1;
    const NSUserDomainMask = 1;

    const fileManager = ObjC.classes.NSFileManager.defaultManager();

    /// file:///var/mobile/Containers/Data/Application/{ID}/Applications/
    var applicationsPath = fileManager.URLsForDirectory_inDomains_(NSApplicationDiectory, NSUserDomainMask).firstObject().toString();
    applicationsPath = applicationsPath.replace("file:///", "");
    applicationsPath = applicationsPath.replace("/Applications/", "");
    
    return "/private/" + applicationsPath;
  }
};