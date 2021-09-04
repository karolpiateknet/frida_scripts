import os
import frida
import frida_tools
import time

def read_frida_scripts_from_file():
	agent_path = os.path.abspath(os.path.join(os.path.abspath(os.path.dirname(__file__)), './', 'iOSAppSnapshotHelpers.js'))

	with open(agent_path, 'r', encoding='utf-8') as f:
   		agent = f.readlines()

	return ''.join([str(x) for x in agent])

def connect_to_device():
	try:
		return frida.get_usb_device()
	except BaseException: 
		time.sleep(3)
		return frida.get_usb_device()

def on_message(message, data):
	print(message)

device = connect_to_device()

# Spawn frida session.
applicationBundleID = 'app.bundle.id'
spawned_pid = device.spawn(applicationBundleID)
session = device.attach(spawned_pid)

# Load frida script.
agent_source = read_frida_scripts_from_file()
script = session.create_script(agent_source)
script.on('message', on_message)
script.load()

# Resume device
device.resume(spawned_pid)

# Use exported functions.
api = script.exports
ios_bundle_path = api.ios_bundle_path()
ios_file_manager_path = api.ios_file_manager_path()

def create_copy_command(path):
	return 'sshpass -p "ssh_key" scp -r -P 2222 root@localhost:' + path + ' ./'

os.system(create_copy_command(ios_bundle_path))
os.system(create_copy_command(ios_file_manager_path))
