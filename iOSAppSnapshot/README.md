# iOS App Snapshot

Purpose of this script is to copy all iOS application files once before using the app and then after using it.
First snapshot will be the clean app, second one will also have saved data.

From those two snapshots we can extract only the files that has changed during app usage. 

Difference between two directories:
```
diff -qr Snapshot Snapshot-2/
```
