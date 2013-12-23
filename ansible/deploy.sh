#!/bin/bash
# run this to push new version
# hand it your priv key location
KEY_FILE_LOCATION=$1
ansible-playbook deploy.yml -i hosts --private-key $KEY_FILE_LOCATION
