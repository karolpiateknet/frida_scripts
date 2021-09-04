# Frida scripts

This repository contains Frida scripts that I wrote to speed up Pentests.

# Setup

Before you can use these scripts you need to install frida using following [tutorial](https://frida.re/docs/ios/).
Also you will need to install [iProxy](https://github.com/tcurdt/iProxy) to connect to device.

Open the application bundle ID that interests you using command:

```
frida-ps -Ua
```

Output:

<img width="358" alt="frida-ps_-Ua" src="https://user-images.githubusercontent.com/57398986/132090413-2af0e951-0727-4d50-a79f-6067fcf4a374.png">

Replace the bundle ID inside python files.

```
applicationBundleID = 'com.highaltitudehacks.DVIAswiftv2.de'
```


# List

- [iOS App Snapshot](/iOSAppSnapshot)
- [ObjC instance to String](/ObjCToString)
