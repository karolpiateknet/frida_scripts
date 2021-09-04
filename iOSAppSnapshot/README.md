# iOS App Snapshot

Purpose of this script is to copy all iOS application files once before using the app and then after using it.
First snapshot will be the clean app, second one will also have saved data.

From those two snapshots we can extract only the files that has changed during app usage. 

# Run

Open the iOSAppSnapshot.py and replace the `ssh_key` value with your password to iphone ssh connection.
If you don't have the password just remove the `-p "ssh_key"`

Run the script using command:

```
python iOSAppSnapshot.py
```
In the main directory you will see new app directory.
Move it to the Snapshot or Snapshot-2 directory.
Snapshot directory should contain clean versions of the apps.
While Snapshot-2 should contain versions after manual testing of the app.

Difference between two directories:
```
diff -qr Snapshot Snapshot-2/
```
